// ไฟล์: src/components/TalentTreeDiagram.tsx
"use client";

import React, { useMemo, useState } from "react";
import { ClassId, SpecId } from "../data/schemas";
import {
  buildClassTalentTreeDiagram,
  TalentDiagramNode,
} from "../engine/game-db-loader";

interface Props {
  classId: ClassId;
  activeSpecId: SpecId;
  allocatedTalents: Record<string, number>;
  onUpdateBatchTalents: (nextTalents: Record<string, number>, autoSpecId?: SpecId) => void;
}

export default function TalentTreeDiagram({
  classId,
  activeSpecId,
  allocatedTalents,
  onUpdateBatchTalents,
}: Props) {
  const [activeTreeTab, setActiveTreeTab] = useState<"basic" | "spec">("basic");
  const [hoveredNode, setHoveredNode] = useState<TalentDiagramNode | null>(null);

  const diagramData = useMemo(() => buildClassTalentTreeDiagram(classId), [classId]);

  const basicIdsSet = useMemo(
    () => new Set(diagramData.basicTreeNodes.map((n) => n.nodeId)),
    [diagramData]
  );

  // นับแต้มที่ใช้ใน Tab 1 (Basic 30 โหนด)
  const basicPointsSpent = useMemo(() => {
    let pts = 0;
    for (const n of diagramData.basicTreeNodes) {
      if ((allocatedTalents[n.nodeId] || 0) > 0) pts += n.cost;
    }
    return pts;
  }, [diagramData, allocatedTalents]);

  const isBasicMaxed = basicPointsSpent >= 30;

  // ตรวจสอบว่าแต้มที่ 31 เลือกโหนดเปิดสาย (Keystone Spec) ตัวไหนไว้
  const unlockedSpecChoice = useMemo(() => {
    return (
      diagramData.specChoices.find((sc) => (allocatedTalents[sc.keystoneNode.nodeId] || 0) > 0) ||
      null
    );
  }, [diagramData, allocatedTalents]);

  const viewingSpecChoice = useMemo(() => {
    if (unlockedSpecChoice) return unlockedSpecChoice;
    return (
      diagramData.specChoices.find((sc) => sc.specId === activeSpecId) ||
      diagramData.specChoices[0]
    );
  }, [diagramData, unlockedSpecChoice, activeSpecId]);

  // นับแต้มที่ใช้ใน Tab 2 (Spec Tree สูงสุด 70 แต้ม รวมโหนดเปิดสาย)
  const specPointsSpent = useMemo(() => {
    let pts = 0;
    for (const [nid, rank] of Object.entries(allocatedTalents)) {
      if (rank > 0 && !basicIdsSet.has(nid)) {
        pts += 1;
      }
    }
    return pts;
  }, [allocatedTalents, basicIdsSet]);

  // ฟังก์ชันเช็กว่าโหนดต้นสายถูกอัปหรือยัง
  const canAllocateNode = (node: TalentDiagramNode, isSpecTree: boolean): boolean => {
    if (isSpecTree && !isBasicMaxed) return false;
    if (isSpecTree && !node.isKeystoneSpec) {
      if (!unlockedSpecChoice || unlockedSpecChoice.specId !== viewingSpecChoice.specId) {
        return false;
      }
      if (specPointsSpent >= 70) return false;
    }
    if (node.prerequisiteNodeIds.length === 0) return true;
    // ต้องอัปโหนดก่อนหน้าอย่างน้อย 1 โหนดในสายที่เชื่อมลงมา
    return node.prerequisiteNodeIds.some((pid) => (allocatedTalents[pid] || 0) > 0);
  };

  // คลิกอัป/ยกเลิกโหนดใน Basic Tree (สูงสุด 30 แต้ม)
  const handleToggleBasicNode = (node: TalentDiagramNode) => {
    const isAllocated = (allocatedTalents[node.nodeId] || 0) > 0;
    const next = { ...allocatedTalents };

    if (isAllocated) {
      // ถ้าลดแต้ม Basic จนต่ำกว่า 30 ต้องล้างโหนดใน Spec Tree ออกด้วยตามกฎเกม
      delete next[node.nodeId];
      for (const key of Object.keys(next)) {
        if (!basicIdsSet.has(key)) delete next[key];
      }
      onUpdateBatchTalents(next);
    } else {
      if (basicPointsSpent >= 30) return;
      if (!canAllocateNode(node, false)) return;
      next[node.nodeId] = 1;
      onUpdateBatchTalents(next);
    }
  };

  // ปุ่มลัด: อัป Basic Talents ครบทั้ง 30 โหนดทันที (30/30 แต้ม) เพื่อปลดล็อกสาย Spec
  const handleMaxAllBasic30 = () => {
    const next = { ...allocatedTalents };
    for (const n of diagramData.basicTreeNodes) {
      next[n.nodeId] = 1;
    }
    onUpdateBatchTalents(next);
    setActiveTreeTab("spec");
  };

  // ปุ่มลัด: เลือกสาย Spec (แต้มที่ 31) หรือสลับสาย
  const handleSelectKeystoneSpec = (targetSpecId: SpecId) => {
    const next: Record<string, number> = {};
    // บังคับให้ Basic ครบ 30 แต้มก่อนเสมอ
    for (const n of diagramData.basicTreeNodes) {
      next[n.nodeId] = 1;
    }
    const chosen = diagramData.specChoices.find((s) => s.specId === targetSpecId);
    if (chosen) {
      // อัปแต้มที่ 31 ลงที่โหนด Keystone ของสายที่เลือก
      next[chosen.keystoneNode.nodeId] = 1;
    }
    onUpdateBatchTalents(next, targetSpecId);
  };

  // คลิกอัป/ยกเลิกโหนดใน Spec Tree (สูงสุด 70 แต้ม: โหนดเปิดสาย 1 + โหนดในสายอีก 69)
  const handleToggleSpecNode = (node: TalentDiagramNode) => {
    if (!isBasicMaxed) return;
    if (node.isKeystoneSpec) {
      handleSelectKeystoneSpec(node.specId!);
      return;
    }

    const isAllocated = (allocatedTalents[node.nodeId] || 0) > 0;
    const next = { ...allocatedTalents };

    if (isAllocated) {
      delete next[node.nodeId];
      onUpdateBatchTalents(next, viewingSpecChoice.specId);
    } else {
      if (specPointsSpent >= 70) return;
      if (!canAllocateNode(node, true)) return;
      next[node.nodeId] = 1;
      onUpdateBatchTalents(next, viewingSpecChoice.specId);
    }
  };

  // เรนเดอร์แผนภาพ Tree Map ด้วย SVG Connectors + Interactive Nodes
  const renderTreeMapCanvas = (nodes: TalentDiagramNode[], isSpecTree: boolean) => {
    const maxRow = Math.max(...nodes.map((n) => n.row), 1);
    const ROW_HEIGHT = 92;
    const COL_WIDTH = 136;
    const PADDING_X = 80;
    const PADDING_Y = 55;

    const svgWidth = 4 * COL_WIDTH + PADDING_X * 2;
    const svgHeight = maxRow * ROW_HEIGHT + PADDING_Y * 2;

    const nodePosMap: Record<string, { x: number; y: number }> = {};
    for (const n of nodes) {
      nodePosMap[n.nodeId] = {
        x: PADDING_X + n.col * COL_WIDTH,
        y: PADDING_Y + n.row * ROW_HEIGHT,
      };
    }

    return (
      <div className="relative bg-slate-950 border border-slate-800 rounded-xl overflow-auto max-h-[600px] p-4 flex justify-center">
        <div className="relative" style={{ width: svgWidth, height: svgHeight }}>
          {/* เส้นเชื่อม Tree Map (SVG) */}
          <svg
            width={svgWidth}
            height={svgHeight}
            className="absolute inset-0 pointer-events-none"
          >
            {nodes.map((node) => {
              const targetPos = nodePosMap[node.nodeId];
              if (!targetPos) return null;
              const isTargetActive = (allocatedTalents[node.nodeId] || 0) > 0;

              return node.prerequisiteNodeIds.map((pid) => {
                const srcPos = nodePosMap[pid];
                if (!srcPos) return null;
                const isSrcActive = (allocatedTalents[pid] || 0) > 0;
                const lineActive = isSrcActive && isTargetActive;

                return (
                  <line
                    key={`${pid}->${node.nodeId}`}
                    x1={srcPos.x}
                    y1={srcPos.y}
                    x2={targetPos.x}
                    y2={targetPos.y}
                    stroke={lineActive ? "#6366f1" : isSrcActive ? "#475569" : "#1e293b"}
                    strokeWidth={lineActive ? 3.5 : 2}
                    strokeDasharray={lineActive ? undefined : "4 4"}
                  />
                );
              });
            })}
          </svg>

          {/* ปุ่มโหนดแต่ละจุดบนแผนภาพ */}
          {nodes.map((node) => {
            const pos = nodePosMap[node.nodeId];
            const isAllocated = (allocatedTalents[node.nodeId] || 0) > 0;
            const available = canAllocateNode(node, isSpecTree);

            return (
              <div
                key={node.nodeId}
                style={{
                  left: pos.x - (node.isKeystoneSpec ? 34 : 26),
                  top: pos.y - (node.isKeystoneSpec ? 34 : 26),
                  width: node.isKeystoneSpec ? 68 : 52,
                  height: node.isKeystoneSpec ? 68 : 52,
                }}
                onMouseEnter={() => setHoveredNode(node)}
                onMouseLeave={() => setHoveredNode(null)}
                onClick={() =>
                  isSpecTree ? handleToggleSpecNode(node) : handleToggleBasicNode(node)
                }
                className={`absolute flex flex-col items-center justify-center cursor-pointer select-none transition-all duration-150 ${
                  node.isKeystoneSpec ? "rounded-2xl rotate-45" : "rounded-full"
                } border-2 shadow-lg ${
                  isAllocated
                    ? node.isKeystoneSpec
                      ? "bg-amber-500/30 border-amber-400 text-amber-200 shadow-amber-500/30 scale-105"
                      : "bg-indigo-600 border-indigo-300 text-white shadow-indigo-500/40 scale-105"
                    : available
                    ? "bg-slate-800 border-slate-500 text-slate-200 hover:border-indigo-400"
                    : "bg-slate-900/90 border-slate-800 text-slate-600 opacity-60"
                }`}
              >
                <div className={node.isKeystoneSpec ? "-rotate-45 text-center px-1" : "text-center px-1"}>
                  <div className="text-[10px] font-extrabold leading-tight truncate max-w-[44px]">
                    {node.isKeystoneSpec ? "SPEC" : `R${node.row + 1}`}
                  </div>
                  <div className="text-[9px] font-mono opacity-80">
                    {isAllocated ? "1/1" : "0/1"}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 space-y-4">
      {/* Header & Points Summary */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-3">
        <div>
          <h2 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
            แผนผัง Talent Tree Map Diagram (Basic 30 แต้ม + สายการเล่น 70 แต้ม = 100 แต้ม)
          </h2>
          <p className="text-xs text-slate-400 mt-0.5">
            อัป Basic Talents ให้ครบ 30/30 โหนดก่อน แล้วแต้มที่ 31 เลือกอัปสายการเล่นหลักเพื่อปลดล็อกผังเฉพาะตัวอีก 69 แต้ม
          </p>
        </div>
        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-semibold">
            Basic: <strong className="text-indigo-400">{basicPointsSpent} / 30</strong>
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 font-semibold">
            Spec:{" "}
            <strong className="text-amber-400">
              {specPointsSpent} / 70
            </strong>
          </span>
          <span className="px-3 py-1.5 rounded-lg bg-indigo-950/60 border border-indigo-500/40 font-bold text-indigo-200">
            รวมทั้งหมด: {basicPointsSpent + specPointsSpent} / 100
          </span>
        </div>
      </div>

      {/* 2 Tabs Switcher: Tab 1 (Basic 30 Nodes) vs Tab 2 (Specialization Tree 70 Points) */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex gap-2 bg-slate-950 p-1.5 rounded-xl border border-slate-800">
          <button
            onClick={() => setActiveTreeTab("basic")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition ${
              activeTreeTab === "basic"
                ? "bg-indigo-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Tab 1: Basic Talents ({basicPointsSpent}/30 โหนด)
          </button>
          <button
            onClick={() => setActiveTreeTab("spec")}
            className={`px-4 py-2 rounded-lg text-xs font-bold transition flex items-center gap-1.5 ${
              activeTreeTab === "spec"
                ? "bg-amber-600 text-white"
                : "text-slate-400 hover:text-white"
            }`}
          >
            <span>
              Tab 2: สายการเล่นเฉพาะตัว ({ unlockedSpecChoice ? unlockedSpecChoice.keystoneNode.name : "รอปลดล็อกแต้มที่ 31" } — {specPointsSpent}/70)
            </span>
          </button>
        </div>

        {activeTreeTab === "basic" && (
          <button
            onClick={handleMaxAllBasic30}
            className="bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold px-3.5 py-2 rounded-lg shadow transition"
          >
            ⚡ อัป Basic ครบ 30/30 แต้มทันที (ไปเลือกสายแต้มที่ 31)
          </button>
        )}
      </div>

      {/* กรณีอยู่ใน Tab 2: แสดงปุ่มเลือกแต้มที่ 31 (Keystone Spec ระหว่าง 2 สาย) */}
      {activeTreeTab === "spec" && (
        <div className="bg-slate-950/90 border border-slate-800 rounded-xl p-4 space-y-3">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-bold text-amber-400 uppercase">
                แต้มที่ 31 — เลือกอัปโหนดเปิดสายการเล่นหลัก (Keystone Specialization):
              </span>
              {!isBasicMaxed && (
                <p className="text-xs text-rose-400 mt-0.5">
                  ⚠️ ต้องอัป Basic Talents ให้ครบ 30/30 แต้มก่อน (หรือคลิกปุ่มสายด้านล่างเพื่ออัป Basic 30 แต้ม + เปิดสายทันที)
                </p>
              )}
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {diagramData.specChoices.map((sc) => {
              const isSelectedSpec = unlockedSpecChoice?.specId === sc.specId;
              return (
                <div
                  key={sc.specId}
                  onClick={() => handleSelectKeystoneSpec(sc.specId)}
                  onMouseEnter={() => setHoveredNode(sc.keystoneNode)}
                  className={`cursor-pointer p-3.5 rounded-xl border-2 transition ${
                    isSelectedSpec
                      ? "bg-amber-950/40 border-amber-400 text-white shadow-md"
                      : "bg-slate-900 border-slate-800 text-slate-300 hover:border-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-amber-300">
                      ★ {sc.keystoneNode.name}
                    </span>
                    <span
                      className={`text-[10px] px-2 py-0.5 rounded font-bold ${
                        isSelectedSpec
                          ? "bg-amber-500 text-slate-950"
                          : "bg-slate-800 text-slate-400"
                      }`}
                    >
                      {isSelectedSpec ? "ACTIVE SPEC (แต้มที่ 31)" : "คลิกเพื่อเลือกสายนี้"}
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1.5 line-clamp-2 leading-relaxed">
                    {sc.keystoneNode.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* แผงแสดงคำอธิบายโหนดเมื่อนำเมาส์ไปชี้ (Hover Tooltip Inspector) */}
      <div className="min-h-[88px] bg-slate-950 border border-indigo-500/30 rounded-xl p-3.5 flex flex-col justify-center">
        {hoveredNode ? (
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-bold text-indigo-300">
                [{hoveredNode.nodeId}] {hoveredNode.name}{" "}
                <span className="text-xs text-slate-400 font-normal">
                  (Row {hoveredNode.row + 1}, Cost: {hoveredNode.cost} pt)
                </span>
              </span>
              <span
                className={`text-xs font-bold px-2 py-0.5 rounded ${
                  (allocatedTalents[hoveredNode.nodeId] || 0) > 0
                    ? "bg-emerald-600/30 text-emerald-300 border border-emerald-500/40"
                    : "bg-slate-800 text-slate-400"
                }`}
              >
                {(allocatedTalents[hoveredNode.nodeId] || 0) > 0 ? "อัปแล้ว (Allocated)" : "ยังไม่ได้อัป"}
              </span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed">
              {hoveredNode.description}
            </p>
            {hoveredNode.statEffectsSummary.length > 0 && (
              <div className="text-[11px] text-amber-300 font-semibold pt-0.5">
                โบนัสสเตตัส: {hoveredNode.statEffectsSummary.join(" | ")}
              </div>
            )}
          </div>
        ) : (
          <p className="text-xs text-slate-500 text-center">
            💡 นำเมาส์ไปชี้ (Hover) ที่โหนดใดก็ได้บนแผนผัง Tree Map ด้านล่างเพื่ออ่าน Text อธิบายความสามารถ และคลิกที่โหนดเพื่ออัปแต้มตามลำดับต้นสายไปปลายสาย
          </p>
        )}
      </div>

      {/* แผนภาพ Tree Map Diagram */}
      {activeTreeTab === "basic"
        ? renderTreeMapCanvas(diagramData.basicTreeNodes, false)
        : renderTreeMapCanvas(viewingSpecChoice.branchNodes, true)}
    </div>
  );
}