# สารานุกรมข้อมูลดิบทั้งหมดที่สกัดได้จากฐานข้อมูลในเครื่อง (Full Game Data Catalog)

## 0. รายชื่อไฟล์โค้ดและฐานข้อมูลทั้งหมดใน `bpsr-build-planner` (ไม่รวมรูปภาพ)

- `.editorconfig` (0.2 KB)
- `.gitignore` (3.7 KB)
- `.npmrc` (0.0 KB)
- `.prettierignore` (0.1 KB)
- `.prettierrc.json` (0.2 KB)
- `LICENSE` (1.1 KB)
- `NOTICE.md` (0.2 KB)
- `README.md` (4.2 KB)
- `ability-score.html` (0.3 KB)
- `about.html` (0.3 KB)
- `backend\Dockerfile` (0.6 KB)
- `backend\README.md` (5.1 KB)
- `backend\config.example.php` (1.0 KB)
- `backend\docker-compose.yml` (1.0 KB)
- `backend\public\.htaccess` (1.2 KB)
- `backend\public\lib\.htaccess` (0.4 KB)
- `backend\public\lib\base62.php` (0.7 KB)
- `backend\public\lib\bootstrap.php` (2.6 KB)
- `backend\public\lib\planCode.php` (2.0 KB)
- `backend\public\lib\ratelimit.php` (1.7 KB)
- `backend\public\shorten.php` (5.6 KB)
- `backend\schema.sql` (1.7 KB)
- `docs\ARCHITECTURE.md` (8.4 KB)
- `docs\CHARACTER_DATA_MODEL.md` (16.8 KB)
- `docs\EQUIPMENT_ENCHANT.md` (11.2 KB)
- `docs\SHORT_URL.md` (17.0 KB)
- `docs\STATUS_CALCULATION.md` (47.4 KB)
- `eslint.config.js` (1.5 KB)
- `index.html` (1.7 KB)
- `mise.toml` (0.0 KB)
- `package-lock.json` (122.6 KB)
- `package.json` (1.5 KB)
- `scripts\derive-traditional-chinese.mjs` (1.8 KB)
- `scripts\extract-ztable.mjs` (75.3 KB)
- `scripts\lib\extractLocaleText.mjs` (56.7 KB)
- `scripts\lib\json-file.mjs` (0.3 KB)
- `scripts\lib\read-table.mjs` (0.2 KB)
- `scripts\release.mjs` (8.9 KB)
- `settings.html` (0.3 KB)
- `src-tauri\Cargo.toml` (0.6 KB)
- `src-tauri\build.rs` (0.0 KB)
- `src-tauri\capabilities\default.json` (0.4 KB)
- `src-tauri\capabilities\desktop.json` (0.2 KB)
- `src-tauri\icons\icon.icns` (91.0 KB)
- `src-tauri\src\main.rs` (4.0 KB)
- `src-tauri\tauri.conf.json` (2.3 KB)
- `src\App.css` (2.9 KB)
- `src\App.tsx` (0.9 KB)
- `src\Footer.css` (1.4 KB)
- `src\Footer.tsx` (1.8 KB)
- `src\SettingsApp.tsx` (1.6 KB)
- `src\ability-score-main.tsx` (0.5 KB)
- `src\about-main.tsx` (0.4 KB)
- `src\about\AboutApp.tsx` (2.9 KB)
- `src\about\AboutDialog.css` (1.3 KB)
- `src\about\AboutDialog.tsx` (0.6 KB)
- `src\about\AboutPanel.tsx` (2.6 KB)
- `src\about\ChangelogList.tsx` (1.5 KB)
- `src\about\about-panel.css` (2.3 KB)
- `src\about\about.css` (0.5 KB)
- `src\about\changelog.css` (0.7 KB)
- `src\about\changelog.json` (63.6 KB)
- `src\about\changelogData.ts` (0.4 KB)
- `src\about\changelogStorage.test.ts` (1.7 KB)
- `src\about\changelogStorage.ts` (0.6 KB)
- `src\assets\.gitignore` (23.5 KB)
- `src\build-planner\BuildPlanner.tsx` (12.5 KB)
- `src\build-planner\arrayState.ts` (0.7 KB)
- `src\build-planner\assetMap.ts` (0.9 KB)
- `src\build-planner\build-planner.css` (6.3 KB)
- `src\build-planner\character\AbilityScoreApp.tsx` (1.3 KB)
- `src\build-planner\character\AbilityScoreDialog.tsx` (6.3 KB)
- `src\build-planner\character\BuffEffectDialog.tsx` (21.7 KB)
- `src\build-planner\character\CharacterPanel.tsx` (18.1 KB)
- `src\build-planner\character\CharacterPanelFooter.tsx` (2.2 KB)
- `src\build-planner\character\PlanListDropdown.tsx` (4.8 KB)
- `src\build-planner\character\PlanManager.tsx` (24.4 KB)
- `src\build-planner\character\ProfessionPicker.tsx` (5.0 KB)
- `src\build-planner\character\StatTooltip.tsx` (11.7 KB)
- `src\build-planner\character\StatsDetailApp.tsx` (0.6 KB)
- `src\build-planner\character\StatsDetailDialog.tsx` (35.4 KB)
- `src\build-planner\character\ability-score-window.css` (0.4 KB)
- `src\build-planner\character\character.css` (28.6 KB)
- `src\build-planner\character\classIcons.ts` (0.8 KB)
- `src\build-planner\character\statFormat.ts` (1.3 KB)
- `src\build-planner\character\stats-detail-window.css` (0.4 KB)
- `src\build-planner\classData.ts` (1.4 KB)
- `src\build-planner\components\Chevron.tsx` (0.7 KB)
- `src\build-planner\components\CollapsibleSection.tsx` (1.8 KB)
- `src\build-planner\components\ConfirmDialog.tsx` (4.7 KB)
- `src\build-planner\components\DraggableDialog.tsx` (6.2 KB)
- `src\build-planner\components\Dropdown.tsx` (7.5 KB)
- `src\build-planner\components\FloatingTooltip.tsx` (3.6 KB)
- `src\build-planner\components\LinkTextPopup.tsx` (1.7 KB)
- `src\build-planner\components\StatRow.tsx` (1.2 KB)
- `src\build-planner\components\Stepper.tsx` (10.9 KB)
- `src\build-planner\components\ToggleButtonGroup.tsx` (1.3 KB)
- `src\build-planner\components\ToggleChip.tsx` (1.3 KB)
- `src\build-planner\components\ToggleSwitch.tsx` (1.4 KB)
- `src\build-planner\components\ZoomControls.tsx` (1.4 KB)
- `src\build-planner\components\components.css` (19.7 KB)
- `src\build-planner\components\gameText.test.ts` (1.8 KB)
- `src\build-planner\components\gameText.ts` (3.3 KB)
- `src\build-planner\components\renderMarkup.test.ts` (2.7 KB)
- `src\build-planner\components\renderMarkup.tsx` (3.3 KB)
- `src\build-planner\components\useAnchorTooltip.ts` (3.6 KB)
- `src\build-planner\components\useArrowKeySelect.ts` (1.9 KB)
- `src\build-planner\components\useCloseOnOutsideClick.ts` (0.9 KB)
- `src\build-planner\components\useCollapsiblePanel.ts` (1.8 KB)
- `src\build-planner\components\useCtrlWheelZoom.ts` (1.5 KB)
- `src\build-planner\components\useCursorTooltip.ts` (5.2 KB)
- `src\build-planner\components\useDelayedUnmount.ts` (1.0 KB)
- `src\build-planner\components\useDragScroll.ts` (2.5 KB)
- `src\build-planner\components\useDraggable.ts` (1.1 KB)
- `src\build-planner\components\useDropdownKeyboardNav.ts` (3.1 KB)
- `src\build-planner\components\useDropdownPlacement.ts` (2.1 KB)
- `src\build-planner\components\useFocusTrap.ts` (1.8 KB)
- `src\build-planner\components\useLinkTextPopup.ts` (3.1 KB)
- `src\build-planner\components\useMediaQuery.ts` (1.9 KB)
- `src\build-planner\components\useScrollToContentOnLandscape.ts` (1.6 KB)
- `src\build-planner\components\useSessionState.test.ts` (3.3 KB)
- `src\build-planner\components\useSessionState.ts` (4.4 KB)
- `src\build-planner\equipment\EquipmentItemPopup.tsx` (17.8 KB)
- `src\build-planner\equipment\EquipmentPanel.tsx` (11.4 KB)
- `src\build-planner\equipment\EquipmentSlotButton.tsx` (2.7 KB)
- `src\build-planner\equipment\EquipmentSlotPicker.tsx` (56.5 KB)
- `src\build-planner\equipment\EvoSlotPicker.tsx` (5.6 KB)
- `src\build-planner\equipment\LegendaryAffixPicker.tsx` (6.7 KB)
- `src\build-planner\equipment\equipment.css` (26.7 KB)
- `src\build-planner\equipment\equipmentData.test.ts` (5.0 KB)
- `src\build-planner\equipment\equipmentData.ts` (11.5 KB)
- `src\build-planner\equipment\equipmentSlotPickerData.test.ts` (1.9 KB)
- `src\build-planner\equipment\equipmentSlotPickerData.ts` (11.7 KB)
- `src\build-planner\module\EffectInfoPopup.tsx` (4.4 KB)
- `src\build-planner\module\EffectSelect.tsx` (5.7 KB)
- `src\build-planner\module\EquippedEffectsSection.tsx` (2.4 KB)
- `src\build-planner\module\LinkBonusSection.tsx` (1.7 KB)
- `src\build-planner\module\ModuleDialog.tsx` (8.6 KB)
- `src\build-planner\module\ModulePanel.tsx` (5.5 KB)
- `src\build-planner\module\ModulePresetBar.tsx` (12.0 KB)
- `src\build-planner\module\ModulePresetDropdown.tsx` (4.3 KB)
- `src\build-planner\module\ModuleSlot.tsx` (3.9 KB)
- `src\build-planner\module\ModuleTotalStats.tsx` (5.6 KB)
- `src\build-planner\module\effectDescRender.tsx` (1.4 KB)
- `src\build-planner\module\module.css` (22.4 KB)
- `src\build-planner\module\moduleData.test.ts` (5.3 KB)
- `src\build-planner\module\moduleData.ts` (13.5 KB)
- `src\build-planner\module\modulePresets.ts` (2.1 KB)
- `src\build-planner\phantom\CustomDropdown.tsx` (4.9 KB)
- `src\build-planner\phantom\FactorSlot.tsx` (2.2 KB)
- `src\build-planner\phantom\PhantomBondSection.tsx` (4.8 KB)
- `src\build-planner\phantom\PhantomEffectSummaryDialog.tsx` (15.2 KB)
- `src\build-planner\phantom\PhantomNodeConfig.tsx` (18.2 KB)
- `src\build-planner\phantom\PhantomNodeEffect.tsx` (4.8 KB)
- `src\build-planner\phantom\PhantomPanel.tsx` (17.9 KB)
- `src\build-planner\phantom\PhantomTreeSvg.tsx` (9.8 KB)
- `src\build-planner\phantom\phantom.css` (19.8 KB)
- `src\build-planner\phantom\phantomData.test.ts` (4.2 KB)
- `src\build-planner\phantom\phantomData.ts` (12.7 KB)
- `src\build-planner\phantom\phantomEffectSummary.css` (5.4 KB)
- `src\build-planner\phantom\phantomEffectSummary.ts` (15.9 KB)
- `src\build-planner\phantom\phantomView.ts` (6.2 KB)
- `src\build-planner\plan\ShareBuildButton.tsx` (13.9 KB)
- `src\build-planner\plan\ShortUrlImporter.tsx` (3.4 KB)
- `src\build-planner\plan\buildPlan.test.ts` (7.0 KB)
- `src\build-planner\plan\buildPlan.ts` (8.8 KB)
- `src\build-planner\plan\planCode.test.ts` (9.1 KB)
- `src\build-planner\plan\planCode.ts` (23.2 KB)
- `src\build-planner\plan\planDefaults.ts` (4.7 KB)
- `src\build-planner\plan\shortUrl.test.ts` (3.4 KB)
- `src\build-planner\plan\shortUrl.ts` (3.1 KB)
- `src\build-planner\profession.ts` (9.3 KB)
- `src\build-planner\seasonSchedule.test.ts` (1.0 KB)
- `src\build-planner\seasonSchedule.ts` (0.8 KB)
- `src\build-planner\skill\BattleImagineSlot.tsx` (3.4 KB)
- `src\build-planner\skill\FixedSkillCard.tsx` (1.8 KB)
- `src\build-planner\skill\ImaginePickerDialog.tsx` (7.1 KB)
- `src\build-planner\skill\MasterySkillCard.tsx` (2.2 KB)
- `src\build-planner\skill\RoleSkillPickerDialog.tsx` (3.0 KB)
- `src\build-planner\skill\RoleSkillSlot.tsx` (3.3 KB)
- `src\build-planner\skill\SkillCircle.tsx` (1.4 KB)
- `src\build-planner\skill\SkillPanel.tsx` (9.7 KB)
- `src\build-planner\skill\SkillTooltip.tsx` (10.4 KB)
- `src\build-planner\skill\imagineFilterData.ts` (2.0 KB)
- `src\build-planner\skill\skill.css` (12.1 KB)
- `src\build-planner\skill\skillData.ts` (1.8 KB)
- `src\build-planner\skill\useDragReorder.ts` (0.8 KB)
- `src\build-planner\stats\attrMaps.ts` (34.5 KB)
- `src\build-planner\stats\baseStats.ts` (1.3 KB)
- `src\build-planner\stats\calculateAbilityScore.test.ts` (6.0 KB)
- `src\build-planner\stats\calculateAbilityScore.ts` (14.7 KB)
- `src\build-planner\stats\calculateRawStats.test.ts` (65.5 KB)
- `src\build-planner\stats\calculateRawStats.ts` (57.6 KB)
- `src\build-planner\stats\commonCoefficients.ts` (1.2 KB)
- `src\build-planner\stats\cookingBuff.test.ts` (6.5 KB)
- `src\build-planner\stats\cookingBuff.ts` (10.8 KB)
- `src\build-planner\stats\deriveStats.test.ts` (16.2 KB)
- `src\build-planner\stats\deriveStats.ts` (16.2 KB)
- `src\build-planner\stats\evoResolution.test.ts` (0.9 KB)
- `src\build-planner\stats\evoResolution.ts` (0.7 KB)
- `src\build-planner\stats\formulas.test.ts` (0.9 KB)
- `src\build-planner\stats\formulas.ts` (0.4 KB)
- `src\build-planner\stats\gameData.test.ts` (2.0 KB)
- `src\build-planner\stats\gameData.ts` (8.5 KB)
- `src\build-planner\stats\masteryElementBonus.test.ts` (4.3 KB)
- `src\build-planner\stats\masteryElementBonus.ts` (8.4 KB)
- `src\build-planner\stats\seasonConstants.ts` (3.7 KB)
- `src\build-planner\stats\statIcons.ts` (4.4 KB)
- `src\build-planner\stats\statValue.test.ts` (1.5 KB)
- `src\build-planner\stats\statValue.ts` (1.6 KB)
- `src\build-planner\stats\suitEffects.test.ts` (2.1 KB)
- `src\build-planner\stats\suitEffects.ts` (3.6 KB)
- `src\build-planner\store\autoSaveOnMount.ts` (0.7 KB)
- `src\build-planner\store\autosave.test.ts` (2.7 KB)
- `src\build-planner\store\corruptedAutosave.test.ts` (3.2 KB)
- `src\build-planner\store\derivedSelectors.test.ts` (2.5 KB)
- `src\build-planner\store\derivedSelectors.ts` (21.2 KB)
- `src\build-planner\store\equipmentSlice.ts` (9.2 KB)
- `src\build-planner\store\memoize.test.ts` (2.5 KB)
- `src\build-planner\store\memoize.ts` (1.9 KB)
- `src\build-planner\store\modulePresetSlice.ts` (2.8 KB)
- `src\build-planner\store\moduleSlice.ts` (1.0 KB)
- `src\build-planner\store\phantomLegacyAutosave.test.ts` (4.2 KB)
- `src\build-planner\store\phantomSlice.ts` (6.0 KB)
- `src\build-planner\store\planSlice.ts` (16.6 KB)
- `src\build-planner\store\skillSlice.ts` (6.6 KB)
- `src\build-planner\store\talentSlice.ts` (2.0 KB)
- `src\build-planner\store\types.ts` (0.5 KB)
- `src\build-planner\store\useBuildStore.test.ts` (23.5 KB)
- `src\build-planner\store\useBuildStore.ts` (3.8 KB)
- `src\build-planner\talent\TalentTreePanel.tsx` (42.4 KB)
- `src\build-planner\talent\talent.css` (6.6 KB)
- `src\build-planner\talent\talentTreeAlgo.test.ts` (7.4 KB)
- `src\build-planner\talent\talentTreeAlgo.ts` (8.2 KB)
- `src\build-planner\talent\talentTreeData.ts` (3.4 KB)
- `src\build-planner\types.ts` (12.3 KB)
- `src\buildInfo.ts` (0.9 KB)
- `src\components\ErrorBoundary.tsx` (1.9 KB)
- `src\data\attr-icons.json` (89.1 KB)
- `src\data\battle-imagines.json` (52.5 KB)
- `src\data\classes.json` (12.0 KB)
- `src\data\enchant-material-icons.json` (16.4 KB)
- `src\data\enchants.json` (282.7 KB)
- `src\data\equipment.json` (12,627.7 KB)
- `src\data\modules.json` (82.3 KB)
- `src\data\phantom-factors.json` (1,289.4 KB)
- `src\data\player-levels.json` (42.8 KB)
- `src\data\refine.json` (41.5 KB)
- `src\data\season-constants.json` (0.1 KB)
- `src\data\season-talents.json` (175.7 KB)
- `src\data\skill-fight-values.json` (43.6 KB)
- `src\data\skill-rank-fight-values.json` (9.4 KB)
- `src\data\skills.json` (25.7 KB)
- `src\data\suits.json` (16.4 KB)
- `src\data\talent-tree.json` (727.7 KB)
- `src\i18n.ts` (1.2 KB)
- `src\locales\en_US\bpsr-bp-ui.json` (21.5 KB)
- `src\locales\en_US\game-data.json` (3,571.6 KB)
- `src\locales\ja_JP\bpsr-bp-ui.json` (24.6 KB)
- `src\locales\ja_JP\game-data.json` (3,898.4 KB)
- `src\locales\ko_KR\bpsr-bp-ui.json` (23.8 KB)
- `src\locales\ko_KR\game-data.json` (3,964.6 KB)
- `src\locales\zh_CN\bpsr-bp-ui.json` (21.4 KB)
- `src\locales\zh_CN\game-data.json` (3,347.4 KB)
- `src\locales\zh_TW\bpsr-bp-ui.json` (21.4 KB)
- `src\locales\zh_TW\game-data.json` (3,347.4 KB)
- `src\main.tsx` (0.4 KB)
- `src\mobile-notice\MobileNotice.css` (0.8 KB)
- `src\mobile-notice\MobileNotice.tsx` (1.5 KB)
- `src\mobile-notice\mobileNoticeStorage.ts` (0.7 KB)
- `src\platform\index.ts` (0.3 KB)
- `src\platform\languageSync.ts` (1.3 KB)
- `src\platform\languages.ts` (0.3 KB)
- `src\platform\openExternal.ts` (0.4 KB)
- `src\platform\residentWindow.ts` (0.9 KB)
- `src\platform\storeSync.ts` (2.7 KB)
- `src\privacy\PrivacyPolicyDialog.tsx` (2.1 KB)
- `src\privacy\privacy-policy.css` (1.9 KB)
- `src\settings-main.tsx` (0.4 KB)
- `src\settings.css` (1.1 KB)
- `src\stats-detail-main.tsx` (0.5 KB)
- `src\updater\UpdateChecker.tsx` (1.6 KB)
- `src\updater\updater.ts` (0.7 KB)
- `src\vite-env.d.ts` (0.1 KB)
- `stats-detail.html` (0.3 KB)
- `tsconfig.json` (0.6 KB)
- `tsconfig.node.json` (0.3 KB)
- `vite.config.base.ts` (0.8 KB)
- `vite.config.ts` (1.0 KB)
- `vite.config.web.ts` (1.7 KB)
- `vitest.config.ts` (0.2 KB)

---
## 1. สรุปข้อมูลในไฟล์ JSON ทั้งหมดของ `bpsr-build-planner`

### ไฟล์: `.prettierrc.json`
- **Type:** Object (7 keys) -> ตัวอย่าง Keys: `['semi', 'singleQuote', 'trailingComma', 'printWidth', 'tabWidth', 'endOfLine', 'arrowParens']`
```json
{
  "semi": true,
  "singleQuote": true
}
```

### ไฟล์: `src-tauri\capabilities\default.json`
- **Type:** Object (4 keys) -> ตัวอย่าง Keys: `['identifier', 'description', 'windows', 'permissions']`
```json
{
  "identifier": "default",
  "description": "Permissions for the main, settings, about, stats-detail and ability-score windows"
}
```

### ไฟล์: `src-tauri\capabilities\desktop.json`
- **Type:** Object (4 keys) -> ตัวอย่าง Keys: `['identifier', 'platforms', 'windows', 'permissions']`
```json
{
  "identifier": "desktop-capability",
  "platforms": [
    "macOS",
    "windows",
    "linux"
  ]
}
```

### ไฟล์: `src-tauri\tauri.conf.json`
- **Type:** Object (8 keys) -> ตัวอย่าง Keys: `['$schema', 'productName', 'version', 'identifier', 'build', 'app', 'bundle', 'plugins']`
```json
{
  "$schema": "https://schema.tauri.app/config/2",
  "productName": "BPSR Build Planner"
}
```

### ไฟล์: `src\about\changelog.json`
- **Type:** Object (1 keys) -> ตัวอย่าง Keys: `['entries']`
```json
{
  "entries": [
    {
      "version": "0.12.5",
      "date": "2026-09-25T09:45:28.482Z",
      "summary": {
        "ja": "キャラクターパネルまわりのレイアウト調整",
        "en": "Adjust character panel layout"
      },
      "changes": {
        "ja": [
          "キャラクターパネルのヘッダー余白を、パネル内の縦スクロールバー表示有無に応じて自動調整",
          "スマホ表示時、画面下部を専有していたフッターをキャラクターパネル最下部に統合(バージョン・プライバシーポリシー・コピーライト・免責事項を縦に集約して表示)"
        ],
        "en": [
          "Auto-adjust the character panel header's right padding based on whether its vertical scrollbar is visible",
          "On phone-sized screens, move the footer (version, privacy policy link, copyright, disclaimer) into the bottom of the character panel instead of showing it full-width"
        ]
      }
    },
    {
      "version": "0.12.4",
      "date": "2026-09-24T18:39:23.446Z",
      "summary": {
        "ja": "レイアウト崩れ・操作不能箇所の修正",
        "en": "Fix layout glitches and unreachable controls"
      },
      "changes": {
        "ja": [
          "潜在パネルでノード効果を表示すると、本来パネル内で完結すべきスクロールがページ全体のスクロールに漏れ出し、絆ポイント・ノード効果の固定表示も崩れる不具合の修正",
          "モジュール選択パネルの合計ステータス欄が内容量に応じてスクロールできず、一部が見えなくなる不具合の修正",
          "モジュールスロットに効果を3つ設定した際のアイコンとの高さ不一致、および横スクロールバーが常に表示される不具合の修正",
          "キャラクターパネルをスクロールすると折りたたみ/展開ボタンが画面外に出て押せなくなる不具合の修正",
          "潜在パネル・キャラクターパネルの折りたたみ/展開ボタンが隣接するラベル(合計絆ポイント、プラン名入力欄)に重なって隠れる不具合の修正",
          "スマホ横画面で確保する上部余白のさらなる拡大"
        ],
        "en": [
          "Fix node effect content in the phantom panel leaking into a page-level scroll instead 
```

### ไฟล์: `src\data\attr-icons.json`
- **Type:** Object (2694 keys) -> ตัวอย่าง Keys: `['4501', '10030', '10031', '10032', '10033', '10034', '10035', '10040', '10041', '10042', '10043', '10044', '10045', '10050', '10051', '10052', '10053', '10054', '10055', '10200']`
```json
{
  "4501": "buff_icon_fire",
  "10030": "common_attrfightpoint"
}
```

### ไฟล์: `src\data\battle-imagines.json`
- **Type:** Object (73 keys) -> ตัวอย่าง Keys: `['3901', '3902', '3903', '3904', '3905', '3906', '3907', '3908', '3910', '3911', '3913', '3914', '3915', '3917', '3920', '3921', '3922', '3923', '3925', '3926']`
```json
{
  "3901": {
    "id": 3901,
    "rarityType": 2,
    "seasonId": 1,
    "classification": 2,
    "icon": "skill_aoyi_skill_icon_017",
    "showSkillType": [
      11,
      20,
      21,
      26,
      27,
      101,
      102
    ],
    "maxRank": 5,
    "skillId": 1991,
    "baseFv": 298,
    "fightValues": [
      89,
      179,
      328,
      418,
      597
    ],
    "passiveEffects": [
      [
        11802,
        800,
        1040,
        1280,
        1520,
        1760,
        2000
      ],
      [
        11044,
        500,
        650,
        800,
        950,
        1100,
        1250
      ]
    ]
  },
  "3902": {
    "id": 3902,
    "rarityType": 2,
    "seasonId": 1,
    "classification": 2,
    "icon": "skill_aoyi_skill_icon_014",
    "showSkillType": [
      10,
      11,
      20,
      21,
      26,
      27,
      101,
      102
    ],
    "maxRank": 5,
    "skillId": 1993,
    "baseFv": 298,
    "fightValues": [
      89,
      179,
      328,
      418,
      597
    ],
    "bufPassiveEffects": [
      [
        3210030,
        [
          3730,
          500,
          500
        ],
        [
          4849,
          500,
          500
        ],
        [
          5968,
          500,
          500
        ],
        [
          7087,
          1000,
          800
        ],
        [
          8206,
          1000,
          800
        ],
        [
          9325,
          2000,
          1000
        ]
      ]
    ]
  }
}
```

### ไฟล์: `src\data\classes.json`
- **Type:** Object (13 keys) -> ตัวอย่าง Keys: `['1', '2', '3', '4', '5', '8', '9', '10', '11', '12', '13', '14', '15']`
```json
{
  "1": {
    "id": 1,
    "element": 3,
    "talent": 1,
    "isOpen": true,
    "attackShow": [
      [
        0,
        11330
      ],
      [
        1,
        11330
      ]
    ],
    "strOrIntOrDexShow": [
      [
        0,
        11030
      ],
      [
        1,
        11030
      ]
    ],
    "icon": "profession_horizontal_03",
    "normalAttackSkill": [
      1701
    ],
    "specialSkill": [
      1714
    ],
    "ultimateSkill": [
      1713
    ],
    "normalSkill": [
      1705,
      1717,
      1718,
      1719,
      1724,
      1730,
      1731,
      1720
    ],
    "talentSkill": [
      1715,
      1728,
      1733,
      1734,
      1735,
      1736,
      1737,
      1738
    ],
    "roleSkill": [
      3611,
      3612,
      3613,
      3614,
      3021,
      3022,
      3023,
      3024,
      3025,
      3026,
      3027,
      3028
    ],
    "showTalentStage": [
      101,
      102
    ],
    "talentColor": "#db8787"
  },
  "2": {
    "id": 2,
    "element": 2,
    "talent": 1,
    "isOpen": true,
    "attackShow": [
      [
        0,
        11340
      ],
      [
        1,
        11340
      ]
    ],
    "strOrIntOrDexShow": [
      [
        0,
        11020
      ],
      [
        1,
        11020
      ]
    ],
    "icon": "profession_horizontal_05",
    "normalAttackSkill": [
      1201
    ],
    "specialSkill": [
      1242
    ],
    "ultimateSkill": [
      1248
    ],
    "normalSkill": [
      1239,
      1211,
      1244,
```

### ไฟล์: `src\data\enchant-material-icons.json`
- **Type:** Object (370 keys) -> ตัวอย่าง Keys: `['10008', '1024001', '1024002', '1024003', '1024004', '1024031', '1024032', '1024033', '1024034', '1024051', '1024052', '1024053', '1024054', '1024131', '1024132', '1024133', '1024134', '1024151', '1024152', '1024153']`
```json
{
  "10008": "item_icons_curreny08",
  "1024001": "red_crystal_stone_basic"
}
```

### ไฟล์: `src\data\enchants.json`
- **Type:** Object (11 keys) -> ตัวอย่าง Keys: `['1001', '1002', '1003', '2001', '2002', '2003', '2004', '3001', '3002', '3003', '3004']`
```json
{
  "1001": [
    {
      "id": 1024001,
      "quality": 1,
      "icon": "red_crystal_stone_basic",
      "level": 1,
      "cost": [
        [
          10008,
          5000
        ]
      ],
      "effects": [
        [
          11112,
          10
        ]
      ],
      "fightValue": 6
    },
    {
      "id": 1024002,
      "quality": 1,
      "icon": "blue_crystal_stone_basic",
      "level": 1,
      "cost": [
        [
          10008,
          5000
        ]
      ],
      "effects": [
        [
          11122,
          10
        ]
      ],
      "fightValue": 6
    },
    {
      "id": 1024003,
      "quality": 1,
      "icon": "green_crystal_stone_basic",
      "level": 1,
      "cost": [
        [
          10008,
          5000
        ]
      ],
      "effects": [
        [
          11142,
          10
        ]
      ],
      "fightValue": 6
    },
    {
      "id": 1024004,
      "quality": 1,
      "icon": "yellow_crystal_stone_basic",
      "level": 1,
      "cost": [
        [
          10008,
          5000
        ]
      ],
      "effects": [
        [
          11132,
          10
        ]
      ],
      "fightValue": 6
    },
    {
      "id": 1024031,
      "quality": 2,
      "icon": "red_crystal_stone_triangle_2",
      "level": 3,
      "cost": [
        [
          10008,
          5000
        ]
      ],
      "effects": [
        [
          11112,
          30
        ],
        [
          11012,
          8
        ]
      ],
    
```

### ไฟล์: `src\data\equipment.json`
- **Type:** Object (11 keys) -> ตัวอย่าง Keys: `['200', '201', '202', '203', '204', '205', '206', '207', '208', '209', '210']`
```json
{
  "200": {
    "2000101": {
      "id": 2000101,
      "part": 200,
      "equipGs": 10,
      "quality": 1,
      "icon": "ch_wp_olvera_02_01",
      "weaponProfessionId": 1,
      "baseStats": [
        [
          11332,
          10,
          10,
          46,
          46
        ],
        [
          11032,
          18,
          18,
          44,
          44
        ],
        [
          11042,
          4,
          4,
          2,
          2
        ]
      ],
      "evo": [],
      "reforgeMaxPerfectline": 0,
      "reforgeEvoMin": 0,
      "reforgeEvoMax": 0,
      "reforgeEvoFvMin": 0,
      "reforgeEvoFvMax": 0,
      "fixedEvolutionStats": {}
    },
    "2000102": {
      "id": 2000102,
      "part": 200,
      "equipGs": 10,
      "quality": 1,
      "icon": "ch_wp_boyce_02_01",
      "weaponProfessionId": 2,
      "baseStats": [
        [
          11342,
          10,
          10,
          46,
          46
        ],
        [
          11022,
          18,
          18,
          44,
          44
        ],
        [
          11042,
          4,
          4,
          2,
          2
        ]
      ],
      "evo": [],
      "reforgeMaxPerfectline": 0,
      "reforgeEvoMin": 0,
      "reforgeEvoMax": 0,
      "reforgeEvoFvMin": 0,
      "reforgeEvoFvMax": 0,
      "fixedEvolutionStats": {}
    },
    "2000103": {
      "id": 2000103,
      "part": 200,
      "equipGs": 10,
      "quality": 1,
      "icon": "ch_wp_tata02_01",
      "weaponProfession
```

### ไฟล์: `src\data\modules.json`
- **Type:** Object (5 keys) -> ตัวอย่าง Keys: `['mods', 'effectsByType', 'effects', 'linkEffects', 'recommendedEffects']`
```json
{
  "mods": [
    {
      "id": 5500101,
      "modType": 1,
      "quality": 1,
      "holes": 1
    },
    {
      "id": 5500102,
      "modType": 1,
      "quality": 2,
      "holes": 2
    },
    {
      "id": 5500103,
      "modType": 1,
      "quality": 3,
      "holes": 3
    },
    {
      "id": 5500104,
      "modType": 1,
      "quality": 4,
      "holes": 3
    },
    {
      "id": 5500201,
      "modType": 2,
      "quality": 1,
      "holes": 1
    },
    {
      "id": 5500202,
      "modType": 2,
      "quality": 2,
      "holes": 2
    },
    {
      "id": 5500203,
      "modType": 2,
      "quality": 3,
      "holes": 3
    },
    {
      "id": 5500204,
      "modType": 2,
      "quality": 4,
      "holes": 3
    },
    {
      "id": 5500301,
      "modType": 3,
      "quality": 1,
      "holes": 1
    },
    {
      "id": 5500302,
      "modType": 3,
      "quality": 2,
      "holes": 2
    },
    {
      "id": 5500303,
      "modType": 3,
      "quality": 3,
      "holes": 3
    },
    {
      "id": 5500304,
      "modType": 3,
      "quality": 4,
      "holes": 3
    }
  ],
  "effectsByType": {
    "1": [
      2104,
      2105,
      1110,
      1111,
      1112,
      1113,
      1114,
      2404,
      2405,
      1407,
      1408,
      1409,
      1410
    ],
    "2": [
      2204,
      2205,
      1205,
      1206,
      2404,
      2405,
      2406,
      1407,
      1408,
      1409,
      1410
    ],
    "3": [
      2304,
      1307,
      1308,

```

### ไฟล์: `src\data\phantom-factors.json`
- **Type:** Object (2 keys) -> ตัวอย่าง Keys: `['factorTypes', 'byClass']`
```json
{
  "factorTypes": {
    "1": "極性",
    "2": "恒常性",
    "3": "第六感",
    "4": "クラス恒常性",
    "5": "クラス狂想",
    "6": "真実"
  },
  "byClass": {
    "200101": {
      "typeId": 3,
      "professionIds": [
        1
      ],
      "seasonId": 2,
      "grades": [
        {
          "id": 20010001,
          "level": 1,
          "effects": [
            [
              3,
              3050011,
              1
            ]
          ],
          "buffPars": [
            [
              140
            ]
          ],
          "fightValue": 0
        },
        {
          "id": 20010002,
          "level": 2,
          "effects": [
            [
              3,
              3050011,
              1
            ]
          ],
          "buffPars": [
            [
              180
            ]
          ],
          "fightValue": 0
        },
        {
          "id": 20010003,
          "level": 3,
          "effects": [
            [
              3,
              3050011,
              1
            ]
          ],
          "buffPars": [
            [
              220
            ]
          ],
          "fightValue": 0
        },
        {
          "id": 20010004,
          "level": 4,
          "effects": [
            [
              3,
              3050011,
              1
            ]
          ],
          "buffPars": [
            [
              260
            ]
          ],
          "fightValue": 0
        },
        {
          "id": 20010005,
          "leve
```

### ไฟล์: `src\data\player-levels.json`
- **Type:** Object (3 keys) -> ตัวอย่าง Keys: `['levels', 'season', 'skillUnlocks']`
```json
{
  "levels": [
    {
      "level": 1,
      "exp": 900000,
      "levelUpAttr": [
        [
          11012,
          5
        ],
        [
          11022,
          5
        ],
        [
          11032,
          5
        ],
        [
          11042,
          5
        ]
      ],
      "fightValue": 64,
      "nacsStandard": [
        [
          200101,
          2072
        ],
        [
          104200,
          910
        ],
        [
          200500,
          5329
        ],
        [
          100701,
          15755
        ],
        [
          800521,
          1443
        ],
        [
          104210,
          822
        ]
      ]
    },
    {
      "level": 2,
      "exp": 900000,
      "levelUpAttr": [
        [
          11012,
          5
        ],
        [
          11022,
          5
        ],
        [
          11032,
          5
        ],
        [
          11042,
          5
        ]
      ],
      "fightValue": 15,
      "nacsStandard": [
        [
          200101,
          2072
        ],
        [
          104200,
          910
        ],
        [
          200500,
          5329
        ],
        [
          100701,
          15755
        ],
        [
          800521,
          1471
        ],
        [
          104210,
          822
        ]
      ]
    },
    {
      "level": 3,
      "exp": 900000,
      "levelUpAttr": [
        [
          11012,
          5
        ],
        [
          11022,
          5
     
```

### ไฟล์: `src\data\refine.json`
- **Type:** Object (2 keys) -> ตัวอย่าง Keys: `['partRefineIds', 'refineById']`
```json
{
  "partRefineIds": {
    "200": {
      "1": 1001,
      "2": 2001,
      "3": 1001,
      "4": 1001,
      "5": 2001,
      "8": 1001,
      "9": 1001,
      "10": 1001,
      "11": 1001,
      "12": 1001,
      "13": 2001,
      "14": 2001,
      "15": 1001
    },
    "201": {
      "1": 1002,
      "2": 1002,
      "3": 1002,
      "4": 1002,
      "5": 1002,
      "8": 1002,
      "9": 1002,
      "10": 1002,
      "11": 1002,
      "12": 1002,
      "13": 1002,
      "14": 1002,
      "15": 1002
    },
    "202": {
      "1": 1002,
      "2": 1002,
      "3": 1002,
      "4": 1002,
      "5": 1002,
      "8": 1002,
      "9": 1002,
      "10": 1002,
      "11": 1002,
      "12": 1002,
      "13": 1002,
      "14": 1002,
      "15": 1002
    },
    "203": {
      "1": 1003,
      "2": 1003,
      "3": 1003,
      "4": 1003,
      "5": 1003,
      "8": 1003,
      "9": 1003,
      "10": 1003,
      "11": 1003,
      "12": 1003,
      "13": 1003,
      "14": 1003,
      "15": 1003
    },
    "204": {
      "1": 1003,
      "2": 1003,
      "3": 1003,
      "4": 1003,
      "5": 1003,
      "8": 1003,
      "9": 1003,
      "10": 1003,
      "11": 1003,
      "12": 1003,
      "13": 1003,
      "14": 1003,
      "15": 1003
    },
    "205": {
      "1": 1004,
      "2": 2004,
      "3": 1004,
      "4": 1004,
      "5": 2004,
      "8": 1004,
      "9": 1004,
      "10": 1004,
      "11": 1004,
      "12": 1004,
      "13": 2004,
      "14": 2004,
      "15": 1004
    },
 
```

### ไฟล์: `src\data\season-constants.json`
- **Type:** Object (3 keys) -> ตัวอย่าง Keys: `['diminishingA', 'diminishingVersatility', 'diminishingEnhance']`
```json
{
  "diminishingA": 50000,
  "diminishingVersatility": 28000
}
```

### ไฟล์: `src\data\season-talents.json`
- **Type:** Object (6 keys) -> ตัวอย่าง Keys: `['templates', 'treeNodes', 'ordinaryEffects', 'intermediateSlots', 'advancedEffects', 'bondSlots']`
```json
{
  "templates": {
    "1": {
      "sortId": 5,
      "advancedEffectId": 100,
      "rootNodeId": 1001,
      "icon": "ui/atlas/season_talent/s2talent01_01",
      "unlockCondition": [
        [
          93,
          3,
          17
        ]
      ]
    },
    "2": {
      "sortId": 6,
      "advancedEffectId": 101,
      "rootNodeId": 1101,
      "icon": "ui/atlas/season_talent/s2talent02_01",
      "unlockCondition": [
        [
          93,
          3,
          24
        ]
      ]
    },
    "3": {
      "sortId": 7,
      "advancedEffectId": 102,
      "rootNodeId": 1201,
      "icon": "ui/atlas/season_talent/s2talent03_01",
      "unlockCondition": [
        [
          93,
          3,
          28
        ]
      ]
    },
    "4": {
      "sortId": 8,
      "advancedEffectId": 103,
      "rootNodeId": 1301,
      "icon": "ui/atlas/season_talent/s2talent04_01",
      "unlockCondition": [
        [
          93,
          3,
          30
        ]
      ]
    },
    "5": {
      "sortId": 1,
      "advancedEffectId": 104,
      "rootNodeId": 1401,
      "icon": "ui/atlas/season_talent/s2talent05_01",
      "unlockCondition": []
    },
    "6": {
      "sortId": 4,
      "advancedEffectId": 105,
      "rootNodeId": 1501,
      "icon": "ui/atlas/season_talent/s2talent06_01",
      "unlockCondition": [
        [
          93,
          3,
          15
        ]
      ]
    },
    "7": {
      "sortId": 2,
      "advancedEffectId": 106,
      "rootNodeId": 1601,
   
```

### ไฟล์: `src\data\skill-fight-values.json`
- **Type:** Object (194 keys) -> ตัวอย่าง Keys: `['1201', '1210', '1211', '1239', '1240', '1241', '1242', '1243', '1244', '1245', '1246', '1248', '1401', '1407', '1409', '1410', '1411', '1418', '1419', '1420']`
```json
{
  "1201": [
    5,
    10,
    16,
    21,
    27,
    32,
    38,
    43,
    49,
    54,
    60,
    65,
    71,
    76,
    82,
    87,
    93,
    98,
    104,
    109,
    115,
    120,
    126,
    131,
    137,
    142,
    148,
    153,
    159,
    164
  ],
  "1210": [
    6,
    13,
    20,
    26,
    33,
    40,
    47,
    54,
    61,
    68,
    75,
    82,
    88,
    95,
    102,
    109,
    116,
    123,
    130,
    137,
    144,
    150,
    157,
    164,
    171,
    178,
    185,
    192,
    199,
    206
  ]
}
```

### ไฟล์: `src\data\skill-rank-fight-values.json`
- **Type:** Object (127 keys) -> ตัวอย่าง Keys: `['1201', '1210', '1211', '1239', '1240', '1241', '1242', '1243', '1244', '1245', '1246', '1248', '1401', '1410', '1418', '1419', '1420', '1421', '1422', '1423']`
```json
{
  "1201": [
    28,
    56,
    142,
    170,
    199,
    284
  ],
  "1210": [
    35,
    71,
    177,
    213,
    248,
    355
  ]
}
```

### ไฟล์: `src\data\skills.json`
- **Type:** Object (194 keys) -> ตัวอย่าง Keys: `['1201', '1210', '1211', '1239', '1240', '1241', '1242', '1243', '1244', '1245', '1246', '1248', '1401', '1407', '1409', '1410', '1411', '1418', '1419', '1420']`
```json
{
  "1201": {
    "id": 1201,
    "icon": "ui/textures/skill_weapon_mz/weapon_mz-01_skill_atk",
    "skillType": 0,
    "maxRank": 0
  },
  "1210": {
    "id": 1210,
    "icon": "ui/textures/skill_weapon_mz/weapon_mz-01_kx06",
    "skillType": 1,
    "maxRank": 4
  }
}
```

### ไฟล์: `src\data\suits.json`
- **Type:** Object (4 keys) -> ตัวอย่าง Keys: `['100', '101', '102', '103']`
```json
{
  "100": {
    "tiers": [
      {
        "limitNum": 2,
        "fightValue": 0,
        "effects": {}
      },
      {
        "limitNum": 4,
        "fightValue": 750,
        "effects": {
          "101": {
            "buffId": 2401120,
            "params": [
              100
            ]
          },
          "102": {
            "buffId": 2401240,
            "params": [
              1000
            ]
          },
          "104": {
            "buffId": 2402130,
            "params": [
              1500,
              500
            ]
          },
          "105": {
            "buffId": 2402220,
            "params": [
              1000
            ]
          },
          "107": {
            "buffId": 2403130,
            "params": [
              100
            ]
          },
          "108": {
            "buffId": 2403210,
            "params": [
              100
            ]
          },
          "110": {
            "buffId": 2404140,
            "params": [
              2000,
              1000
            ]
          },
          "111": {
            "buffId": 2404210,
            "params": [
              0
            ]
          },
          "113": {
            "buffId": 2406140,
            "params": [
              300
            ]
          },
          "114": {
            "buffId": 2406240,
            "params": [
              3000
            ]
          },
          "116": {
            "buffId": 2405140,
            "params": [

```

### ไฟล์: `src\data\talent-tree.json`
- **Type:** Object (3 keys) -> ตัวอย่าง Keys: `['nodes', 'stagesByWeaponType', 'treeNodesByWeaponType']`
```json
{
  "nodes": {
    "1": {
      "weaponGroup": 0,
      "icon": "ui/atlas/weaponhero/new/common_icon05",
      "type": 1,
      "effects": [
        [
          1,
          11012,
          10
        ]
      ],
      "buffValueKeys": [],
      "buffPars": [],
      "cost": 1,
      "fightValue": 3
    },
    "2": {
      "weaponGroup": 0,
      "icon": "ui/atlas/weaponhero/new/common_icon06",
      "type": 1,
      "effects": [
        [
          1,
          11022,
          10
        ]
      ],
      "buffValueKeys": [],
      "buffPars": [],
      "cost": 1,
      "fightValue": 3
    },
    "3": {
      "weaponGroup": 0,
      "icon": "ui/atlas/weaponhero/new/common_attrdexterity",
      "type": 1,
      "effects": [
        [
          1,
          11032,
          10
        ]
      ],
      "buffValueKeys": [],
      "buffPars": [],
      "cost": 1,
      "fightValue": 3
    },
    "4": {
      "weaponGroup": 0,
      "icon": "ui/atlas/weaponhero/new/common_icon08",
      "type": 1,
      "effects": [
        [
          1,
          11042,
          30
        ]
      ],
      "buffValueKeys": [],
      "buffPars": [],
      "cost": 1,
      "fightValue": 3
    },
    "5": {
      "weaponGroup": 0,
      "icon": "ui/atlas/weaponhero/new/common_icon12",
      "type": 1,
      "effects": [
        [
          1,
          11112,
          25
        ]
      ],
      "buffValueKeys": [],
      "buffPars": [],
      "cost": 1,
      "fightValue": 3
    },
    "6": {
  
```

### ไฟล์: `src\locales\en_US\bpsr-bp-ui.json`
- **Type:** Object (8 keys) -> ตัวอย่าง Keys: `['settings', 'mobileNotice', 'footer', 'privacy', 'about', 'updater', 'changelog', 'buildPlanner']`
```json
{
  "settings": {
    "title": "Settings",
    "language": "Language",
    "save": "Save",
    "close": "Close"
  },
  "mobileNotice": {
    "body": "Some features may not work correctly on smartphones. For full functionality, we recommend viewing this site on a PC.",
    "rotateHint": "Rotating your screen to landscape makes it easier to use.",
    "close": "Close"
  }
}
```

### ไฟล์: `src\locales\en_US\game-data.json`
- **Type:** Object (14 keys) -> ตัวอย่าง Keys: `['items', 'skills', 'classes', 'parts', 'attributes', 'talents', 'seasonTalents', 'battleImagines', 'uiLabels', 'talentStages', 'moduleEffects', 'attrDescs', 'statDescs', 'textDescs']`
```json
{
  "items": {
    "10008": {
      "name": "Luno (Bound)",
      "description": "Bound Luno cannot be traded in the trading center. However it is still indispensable for growth and adventure, and can be obtained through daily adventure activities."
    },
    "1024001": {
      "name": "Ruby",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024002": {
      "name": "Sapphire",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024003": {
      "name": "Emerald",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024004": {
      "name": "Diamond",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024031": {
      "name": "Ruby - Power 3",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024032": {
      "name": "Ruby - Bulwark 3",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024033": {
      "name": "Ruby - Agility 3",
      "description": "Embedding gems into gear can endow the gear with the unique effects contained in the gems."
    },
    "1024034": {
      "name": "Ruby - Abyss 3",
      "description": "Embeddin
```

### ไฟล์: `src\locales\ja_JP\bpsr-bp-ui.json`
- **Type:** Object (8 keys) -> ตัวอย่าง Keys: `['settings', 'mobileNotice', 'footer', 'privacy', 'about', 'updater', 'changelog', 'buildPlanner']`
```json
{
  "settings": {
    "title": "設定",
    "language": "言語",
    "save": "保存",
    "close": "閉じる"
  },
  "mobileNotice": {
    "body": "スマートフォンでは一部機能が正しく動作しない場合があります。すべての機能を利用するには、PC版サイトでの閲覧をおすすめします。",
    "rotateHint": "画面を横向きにすると操作しやすくなります。",
    "close": "閉じる"
  }
}
```

### ไฟล์: `src\locales\ja_JP\game-data.json`
- **Type:** Object (14 keys) -> ตัวอย่าง Keys: `['items', 'skills', 'classes', 'parts', 'attributes', 'talents', 'seasonTalents', 'battleImagines', 'uiLabels', 'talentStages', 'moduleEffects', 'attrDescs', 'statDescs', 'textDescs']`
```json
{
  "items": {
    "10008": {
      "name": "ルーノ（バインド）",
      "description": "バインドルーノは取引所では使用できないが、育成や冒険の過程では不可欠。普段の冒険で入手できる。"
    },
    "1024001": {
      "name": "赤晶宝石",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024002": {
      "name": "青晶宝石",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024003": {
      "name": "翠晶宝石",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024004": {
      "name": "輝晶宝石",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024031": {
      "name": "赤晶宝石・威3",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024032": {
      "name": "赤晶宝石・磐3",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024033": {
      "name": "赤晶宝石・疾3",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024034": {
      "name": "赤晶宝石・淵3",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024051": {
      "name": "赤晶宝石・威5",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024052": {
      "name": "赤晶宝石・磐5",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024053": {
      "name": "赤晶宝石・疾5",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024054": {
      "name": "赤晶宝石・淵5",
      "description": "ジェムを装備に装着すると、ジェムが秘めている固有の効果を装備に付与できる。"
    },
    "1024131": {
      "name": "青晶宝石・威3",
      "descript
```

### ไฟล์: `src\locales\ko_KR\bpsr-bp-ui.json`
- **Type:** Object (8 keys) -> ตัวอย่าง Keys: `['settings', 'mobileNotice', 'footer', 'privacy', 'about', 'updater', 'changelog', 'buildPlanner']`
```json
{
  "settings": {
    "title": "설정",
    "language": "언어",
    "save": "저장",
    "close": "닫기"
  },
  "mobileNotice": {
    "body": "스마트폰에서는 일부 기능이 정상적으로 작동하지 않을 수 있습니다. 모든 기능을 이용하려면 PC 사이트에서 열람하는 것을 권장합니다.",
    "rotateHint": "화면을 가로 방향으로 돌리면 조작하기 편해집니다.",
    "close": "닫기"
  }
}
```

### ไฟล์: `src\locales\ko_KR\game-data.json`
- **Type:** Object (14 keys) -> ตัวอย่าง Keys: `['items', 'skills', 'classes', 'parts', 'attributes', 'talents', 'seasonTalents', 'battleImagines', 'uiLabels', 'talentStages', 'moduleEffects', 'attrDescs', 'statDescs', 'textDescs']`
```json
{
  "items": {
    "10008": {
      "name": "루노(귀속)",
      "description": "귀속된 루노는 거래소에서 유통할 수 없지만, 성장과 모험 과정에서 없어서는 안 될 자원입니다. 일상적인 모험 활동을 통해 획득할 수 있습니다."
    },
    "1024001": {
      "name": "홍수정 보석",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024002": {
      "name": "청수정 보석",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024003": {
      "name": "녹수정 보석",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024004": {
      "name": "황수정 보석",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024031": {
      "name": "홍수정 보석・위력 3",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024032": {
      "name": "홍수정 보석・견고 3",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024033": {
      "name": "홍수정 보석・기민 3",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024034": {
      "name": "홍수정 보석・심연 3",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024051": {
      "name": "홍수정 보석・위력 5",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024052": {
      "name": "홍수정 보석・견고 5",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024053": {
      "name": "홍수정 보석・기민 5",
      "description": "보석을 장비에 장착하면, 보석이 지닌 독특한 효과를 장비에 부여할 수 있습니다."
    },
    "1024054": {
      "n
```

### ไฟล์: `src\locales\zh_CN\bpsr-bp-ui.json`
- **Type:** Object (8 keys) -> ตัวอย่าง Keys: `['settings', 'mobileNotice', 'footer', 'privacy', 'about', 'updater', 'changelog', 'buildPlanner']`
```json
{
  "settings": {
    "title": "设置",
    "language": "语言",
    "save": "保存",
    "close": "关闭"
  },
  "mobileNotice": {
    "body": "在智能手机上，部分功能可能无法正常使用。若要使用全部功能，建议在电脑端浏览本站。",
    "rotateHint": "将屏幕横放会更方便操作。",
    "close": "关闭"
  }
}
```

### ไฟล์: `src\locales\zh_CN\game-data.json`
- **Type:** Object (14 keys) -> ตัวอย่าง Keys: `['items', 'skills', 'classes', 'parts', 'attributes', 'talents', 'seasonTalents', 'battleImagines', 'uiLabels', 'talentStages', 'moduleEffects', 'attrDescs', 'statDescs', 'textDescs']`
```json
{
  "items": {
    "10008": {
      "name": "卢诺（绑定）",
      "description": "绑定的卢诺，无法在交易中心流通，但在成长和冒险的过程中依然不可或缺，通过日常冒险行为可以获取到。"
    },
    "1024001": {
      "name": "赤晶宝石",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024002": {
      "name": "蓝晶宝石",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024003": {
      "name": "翠晶宝石",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024004": {
      "name": "耀晶宝石",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024031": {
      "name": "赤晶宝石·威3",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024032": {
      "name": "赤晶宝石·磐3",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024033": {
      "name": "赤晶宝石·疾3",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024034": {
      "name": "赤晶宝石·渊3",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024051": {
      "name": "赤晶宝石·威5",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024052": {
      "name": "赤晶宝石·磐5",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024053": {
      "name": "赤晶宝石·疾5",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024054": {
      "name": "赤晶宝石·渊5",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024131": {
      "name": "蓝晶宝石·威3",
      "description": "将宝石嵌入装备之中，能够为装备赋予宝石所蕴含的独特效果。"
    },
    "1024132": {
      "name": "蓝晶宝石·磐3",
      "description": "将宝
```

### ไฟล์: `src\locales\zh_TW\bpsr-bp-ui.json`
- **Type:** Object (8 keys) -> ตัวอย่าง Keys: `['settings', 'mobileNotice', 'footer', 'privacy', 'about', 'updater', 'changelog', 'buildPlanner']`
```json
{
  "settings": {
    "title": "設置",
    "language": "語言",
    "save": "保存",
    "close": "關閉"
  },
  "mobileNotice": {
    "body": "在智能手機上，部分功能可能無法正常使用。若要使用全部功能，建議在電腦端瀏覽本站。",
    "rotateHint": "將屏幕橫放會更方便操作。",
    "close": "關閉"
  }
}
```

### ไฟล์: `src\locales\zh_TW\game-data.json`
- **Type:** Object (14 keys) -> ตัวอย่าง Keys: `['items', 'skills', 'classes', 'parts', 'attributes', 'talents', 'seasonTalents', 'battleImagines', 'uiLabels', 'talentStages', 'moduleEffects', 'attrDescs', 'statDescs', 'textDescs']`
```json
{
  "items": {
    "10008": {
      "name": "盧諾（綁定）",
      "description": "綁定的盧諾，無法在交易中心流通，但在成長和冒險的過程中依然不可或缺，通過日常冒險行為可以獲取到。"
    },
    "1024001": {
      "name": "赤晶寶石",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024002": {
      "name": "藍晶寶石",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024003": {
      "name": "翠晶寶石",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024004": {
      "name": "耀晶寶石",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024031": {
      "name": "赤晶寶石·威3",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024032": {
      "name": "赤晶寶石·磐3",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024033": {
      "name": "赤晶寶石·疾3",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024034": {
      "name": "赤晶寶石·淵3",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024051": {
      "name": "赤晶寶石·威5",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024052": {
      "name": "赤晶寶石·磐5",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024053": {
      "name": "赤晶寶石·疾5",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024054": {
      "name": "赤晶寶石·淵5",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024131": {
      "name": "藍晶寶石·威3",
      "description": "將寶石嵌入裝備之中，能夠為裝備賦予寶石所蘊含的獨特效果。"
    },
    "1024132": {
      "name": "藍晶寶石·磐3",
      "description": "將寶
```


---
## 2. ข้อมูลจริงของระบบ Module (จาก `StarResonanceAutoMod` & `module-optimizer`)

### โค้ดตาราง Module ใน `StarResonanceAutoMod/module_types.py`:
```python

"""
模组定义
"""

from typing import Dict, List
from dataclasses import dataclass
from enum import Enum


class ModuleType(Enum):
    """模组类型枚举"""
    BASIC_ATTACK = 5500101
    HIGH_PERFORMANCE_ATTACK = 5500102
    EXCELLENT_ATTACK = 5500103
    EXCELLENT_ATTACK_PREFERRED = 5500104
    BASIC_HEALING = 5500201
    HIGH_PERFORMANCE_HEALING = 5500202
    EXCELLENT_HEALING = 5500203
    EXCELLENT_HEALING_PREFERRED = 5500204
    BASIC_PROTECTION = 5500301
    HIGH_PERFORMANCE_PROTECTION = 5500302
    EXCELLENT_PROTECTION = 5500303
    EXCELLENT_PROTECTION_PREFERRED = 5500304


class ModuleAttrType(Enum):
    """模组属性类型枚举"""
    STRENGTH_BOOST = 1110
    AGILITY_BOOST = 1111
    INTELLIGENCE_BOOST = 1112
    SPECIAL_ATTACK_DAMAGE = 1113
    ELITE_STRIKE = 1114
    SPECIAL_HEALING_BOOST = 1205
    EXPERT_HEALING_BOOST = 1206
    CASTING_FOCUS = 1407
    ATTACK_SPEED_FOCUS = 1408
    CRITICAL_FOCUS = 1409
    LUCK_FOCUS = 1410
    MAGIC_RESISTANCE = 1307
    PHYSICAL_RESISTANCE = 1308
    EXTREME_DAMAGE_STACK = 2104
    EXTREME_FLEXIBLE_MOVEMENT = 2105
    EXTREME_LIFE_CONVERGENCE = 2204
    EXTREME_EMERGENCY_MEASURES = 2205
    EXTREME_LIFE_FLUCTUATION = 2404
    EXTREME_LIFE_DRAIN = 2405
    EXTREME_TEAM_CRIT = 2406
    EXTREME_DESPERATE_GUARDIAN = 2304


class ModuleCategory(Enum):
    """模组类型分类"""
    ATTACK = "攻击"
    GUARDIAN = "守护" 
    SUPPORT = "辅助"
    ALL = "全部"


# 模组名称映射
MODULE_NAMES = {
    ModuleType.BASIC_ATTACK.value: "基础攻击",
    ModuleType.HIGH_PERFORMANCE_ATTACK.value: "高性能攻击",
    ModuleType.EXCELLENT_ATTACK.value: "卓越攻击",
    ModuleType.EXCELLENT_ATTACK_PREFERRED.value: "卓越攻击-优选",
    ModuleType.BASIC_HEALING.value: "基础治疗",
    ModuleType.HIGH_PERFORMANCE_HEALING.value: "高性能治疗",
    ModuleType.EXCELLENT_HEALING.value: "卓越辅助",
    ModuleType.EXCELLENT_HEALING_PREFERRED.value: "卓越辅助-优选",
    ModuleType.BASIC_PROTECTION.value: "基础防护",
    ModuleType.HIGH_PERFORMANCE_PROTECTION.value: "高性能守护",
    ModuleType.EXCELLENT_PROTECTION.value: "卓越守护",
    ModuleType.EXCELLENT_PROTECTION_PREFERRED.value: "卓越守护-优选",
}

# 模组属性名称映射
MODULE_ATTR_NAMES = {
    ModuleAttrType.STRENGTH_BOOST.value: "力量加持",
    ModuleAttrType.AGILITY_BOOST.value: "敏捷加持",
    ModuleAttrType.INTELLIGENCE_BOOST.value: "智力加持",
    ModuleAttrType.SPECIAL_ATTACK_DAMAGE.value: "特攻伤害",
    ModuleAttrType.ELITE_STRIKE.value: "精英打击",
    ModuleAttrType.SPECIAL_HEALING_BOOST.value: "特攻治疗加持",
    ModuleAttrType.EXPERT_HEALING_BOOST.value: "专精治疗加持",
    ModuleAttrType.CASTING_FOCUS.value: "施法专注",
    ModuleAttrType.ATTACK_SPEED_FOCUS.value: "攻速专注",
    ModuleAttrType.CRITICAL_FOCUS.value: "暴击专注",
    ModuleAttrType.LUCK_FOCUS.value: "幸运专注",
    ModuleAttrType.MAGIC_RESISTANCE.value: "抵御魔法",
    ModuleAttrType.PHYSICAL_RESISTANCE.value: "抵御物理",
    ModuleAttrType.EXTREME_DAMAGE_STACK.value: "极-伤害叠加",
    ModuleAttrType.EXTREME_FLEXIBLE_MOVEMENT.value: "极-灵活身法",
    ModuleAttrType.EXTREME_LIFE_CONVERGENCE.value: "极-生命凝聚",
    ModuleAttrType.EXTREME_EMERGENCY_MEASURES.value: "极-急救措施",
    ModuleAttrType.EXTREME_LIFE_FLUCTUATION.value: "极-生命波动",
    ModuleAttrType.EXTREME_LIFE_DRAIN.value: "极-生命汲取",
    ModuleAttrType.EXTREME_TEAM_CRIT.value: "极-全队幸暴",
    ModuleAttrType.EXTREME_DESPERATE_GUARDIAN.value: "极-绝境守护",
}

# 英文显示名称映射
MODULE_NAMES_EN: Dict[int, str] = {
    ModuleType.BASIC_ATTACK.value: "Basic Attack Module",
    ModuleType.HIGH_PERFORMANCE_ATTACK.value: "Advanced Attack Module",
    ModuleType.EXCELLENT_ATTACK.value: "Excellent Attack Module",
    ModuleType.EXCELLENT_ATTACK_PREFERRED.value: "Excellent Attack Module Preferred",
    ModuleType.BASIC_HEALING.value: "Basic Support Module",
    ModuleType.HIGH_PERFORMANCE_HEALING.value: "Advanced Support Module",
    ModuleType.EXCELLENT_HEALING.value: "Excellent Support Module",
    ModuleType.EXCELLENT_HEALING_PREFERRED.value: "Excellent Support Module Preferred",
    ModuleType.BASIC_PROTECTION.value: "Basic Guard Module",
    ModuleType.HIGH_PERFORMANCE_PROTECTION.value: "Advanced Guard Module",
    ModuleType.EXCELLENT_PROTECTION.value: "Excellent Guard Module",
    ModuleType.EXCELLENT_PROTECTION_PREFERRED.value: "Excellent Guard Module Preferred",
}

MODULE_ATTR_NAMES_EN: Dict[int, str] = {
    ModuleAttrType.STRENGTH_BOOST.value: "Strength Boost",
    ModuleAttrType.AGILITY_BOOST.value: "Agility Boost",
    ModuleAttrType.INTELLIGENCE_BOOST.value: "Intellect Boost",
    ModuleAttrType.SPECIAL_ATTACK_DAMAGE.value: "Special Attack",
    ModuleAttrType.ELITE_STRIKE.value: "Elite Strike",
    ModuleAttrType.SPECIAL_HEALING_BOOST.value: "Healing Boost",
    ModuleAttrType.EXPERT_HEALING_BOOST.value: "Healing Enhance",
    ModuleAttrType.CASTING_FOCUS.value: "Cast Focus",
    ModuleAttrType.ATTACK_SPEED_FOCUS.value: "Attack SPD",
    ModuleAttrType.CRITICAL_FOCUS.value: "Crit Focus",
    ModuleAttrType.LUCK_FOCUS.value: "Luck Focus",
    ModuleAttrType.MAGIC_RESISTANCE.value: "Resistance",
    ModuleAttrType.PHYSICAL_RESISTANCE.value: "Armor",
    ModuleAttrType.EXTREME_DAMAGE_STACK.value: "DMG Stack",
    ModuleAttrType.EXTREME_FLEXIBLE_MOVEMENT.value: "Agile",
    ModuleAttrType.EXTREME_LIFE_CONVERGENCE.value: "Life Condense",
    ModuleAttrType.EXTREME_EMERGENCY_MEASURES.value: "First Aid",
    ModuleAttrType.EXTREME_LIFE_FLUCTUATION.value: "Life Wave",
    ModuleAttrType.EXTREME_LIFE_DRAIN.value: "Life Steal",
    ModuleAttrType.EXTREME_TEAM_CRIT.value: "Team Luck&Crit",
    ModuleAttrType.EXTREME_DESPERATE_GUARDIAN.value: "Final Protection",
}

# 模组属性id名称映射
MODULE_ATTR_IDS = {name: attr_id for attr_id, name in MODULE_ATTR_NAMES.items()}

# 模组类型到分类的映射
MODULE_CATEGORY_MAP = {
    ModuleType.BASIC_ATTACK.value: ModuleCategory.ATTACK,
    ModuleType.HIGH_PERFORMANCE_ATTACK.value: ModuleCategory.ATTACK,
    ModuleType.EXCELLENT_ATTACK.value: ModuleCategory.ATTACK, 
    ModuleType.EXCELLENT_ATTACK_PREFERRED.value: ModuleCategory.ATTACK,
    ModuleType.BASIC_PROTECTION.value: ModuleCategory.GUARDIAN,
    ModuleType.HIGH_PERFORMANCE_PROTECTION.value: ModuleCategory.GUARDIAN,
    ModuleType.EXCELLENT_PROTECTION.value: ModuleCategory.GUARDIAN,
    ModuleType.EXCELLENT_PROTECTION_PREFERRED.value: ModuleCategory.GUARDIAN,
    ModuleType.BASIC_HEALING.value: ModuleCategory.SUPPORT,
    ModuleType.HIGH_PERFORMANCE_HEALING.value: ModuleCategory.SUPPORT,
    ModuleType.EXCELLENT_HEALING.value: ModuleCategory.SUPPORT,
    ModuleType.EXCELLENT_HEALING_PREFERRED.value: ModuleCategory.SUPPORT,
}

# 分类中英映射与属性名中英互转
CATEGORY_EN_TO_CN: Dict[str, str] = {
    "attack": ModuleCategory.ATTACK.value,
    "guardian": ModuleCategory.GUARDIAN.value,
    "support": ModuleCategory.SUPPORT.value,
    "all": ModuleCategory.ALL.value,
}

CATEGORY_CN_TO_EN: Dict[str, str] = {
    ModuleCategory.ATTACK.value: "Attack",
    ModuleCategory.GUARDIAN.value: "Guardian",
    ModuleCategory.SUPPORT.value: "Support",
    ModuleCategory.ALL.value: "All",
}

ATTR_CN_TO_EN: Dict[str, str] = {cn: MODULE_ATTR_NAMES_EN[attr_id] for attr_id, cn in MODULE_ATTR_NAMES.items()}
ATTR_EN_TO_CN: Dict[str, str] = {v.lower(): k for k, v in ATTR_CN_TO_EN.items()}

def normalize_attribute_name(name: str) -> str:
    """将英文/中文属性名归一化为中文；未知则原样返回"""
    if not name:
        return name
    if name in MODULE_ATTR_IDS:
        return name
    key = name.strip().lower()
    return ATTR_EN_TO_CN.get(key, name)

def normalize_attribute_list(names: List[str] | None) -> List[str] | None:
    if names is None:
        return None
    return [normalize_attribute_name(n) for n in names]

def normalize_category(name: str) -> str:
    """将英文/中文分类归一化为中文，无法识别则返回 '全部'"""
    if not name:
        return ModuleCategory.ALL.value
    if name in CATEGORY_CN_TO_EN:
        return name
    key = name.strip().lower()
    return CATEGORY_EN_TO_CN.get(key, ModuleCategory.ALL.value)

def to_english_attr(name_cn: str) -> str:
    """中文属性名转英文显示名；未知则返回原文"""
    return ATTR_CN_TO_EN.get(name_cn, name_cn)

def to_english_module(config_id: int, fallback_cn: str) -> str:
    """根据 config_id 返回英文模组名；未知则返回中文回退"""
    return MODULE_NAMES_EN.get(config_id, fallback_cn)

# 属性阈值和效果等级
ATTR_THRESHOLDS = [1, 4, 8, 12, 16, 20]

# 基础词条战力映射
BASIC_ATTR_POWER_MAP = {
    1: 7,
    2: 14,
    3: 29,
    4: 44,
    5: 167,
    6: 254
}

# 特殊词条战力映射
SPECIAL_ATTR_POWER_MAP = {
    1: 14,
    2: 29,
    3: 59,
    4: 89,
    5: 298,
    6: 448
}

# 模组总属性值战力映射
TOTAL_ATTR_POWER_MAP = {
    0: 0, 1: 5, 2: 11, 3: 17, 4: 23, 5: 29, 6: 34, 7: 40, 8: 46,
    18: 104, 19: 110, 20: 116, 21: 122, 22: 128, 23: 133, 24: 139, 25: 145,
    26: 151, 27: 157, 28: 163, 29: 168, 30: 174, 31: 180, 32: 186, 33: 192,
    34: 198, 35: 203, 36: 209, 37: 215, 38: 221, 39: 227, 40: 233, 41: 238,
    42: 244, 43: 250, 44: 256, 45: 262, 46: 267, 47: 273, 48: 279, 49: 285,
    50: 291, 51: 297, 52: 302, 53: 308, 54: 314, 55: 320, 56: 326, 57: 332,
    58: 337, 59: 343, 60: 349, 61: 355, 62: 361, 63: 366, 64: 372, 65: 378,
    66: 384, 67: 390, 68: 396, 69: 401, 70: 407, 71: 413, 72: 419, 73: 425,
    74: 431, 75: 436, 76: 442, 77: 448, 78: 454, 79: 460, 80: 466, 81: 471,
    82: 477, 83: 483, 84: 489, 85: 495, 86: 500, 87: 506, 88: 512, 89: 518,
    90: 524, 91: 530, 92: 535, 93: 541, 94: 547, 95: 553, 96: 559, 97: 565,
    98: 570, 99: 576, 100: 582, 101: 588, 102: 594, 103: 599, 104: 605, 105: 611,
    106: 617, 113: 658, 114: 664, 115: 669, 116: 675, 117: 681, 118: 687, 119: 693, 120: 699
}

# 基础词条ID列表
BASIC_ATTR_IDS = {
    ModuleAttrType.STRENGTH_BOOST.value,
    ModuleAttrType.AGILITY_BOOST.value,
    ModuleAttrType.INTELLIGENCE_BOOST.value,
    ModuleAttrType.SPECIAL_ATTACK_DAMAGE.value,
    ModuleAttrType.ELITE_STRIKE.value,
    ModuleAttrType.SPECIAL_HEALING_BOOST.value,
    ModuleAttrType.EXPERT_HEALING_BOOST.value,
    ModuleAttrType.CASTING_FOCUS.value,
    ModuleAttrType.ATTACK_SPEED_FOCUS.value,
    ModuleAttrType.CRITICAL_FOCUS.value,
    ModuleAttrType.LUCK_FOCUS.value,
    ModuleAttrType.MAGIC_RESISTANCE.value,
    ModuleAttrType.PHYSICAL_RESISTANCE.value
}

# 特殊词条ID列表
SPECIAL_ATTR_IDS = {
    ModuleAttrType.EXTREME_DAMAGE_STACK.value,
    ModuleAttrType.EXTREME_FLEXIBLE_MOVEMENT.value,
    ModuleAttrType.EXTREME_LIFE_CONVERGENCE.value,
    ModuleAttrType.EXTREME_EMERGENCY_MEASURES.value,
    ModuleAttrType.EXTREME_LIFE_FLUCTUATION.value,
    ModuleAttrType.EXTREME_LIFE_DRAIN.value,
    ModuleAttrType.EXTREME_TEAM_CRIT.value,
    ModuleAttrType.EXTREME_DESPERATE_GUARDIAN.value
}

# 属性名称到类型的映射
ATTR_NAME_TYPE_MAP = {
    "力量加持": "basic",
    "敏捷加持": "basic", 
    "智力加持": "basic",
    "特攻伤害": "basic",
    "精英打击": "basic",
    "特攻治疗加持": "basic",
    "专精治疗加持": "basic",
    "施法专注": "basic",
    "攻速专注": "basic",
    "暴击专注": "basic",
    "幸运专注": "basic",
    "抵御魔法": "basic",
    "抵御物理": "basic",
    "极-伤害叠加": "special",
    "极-灵活身法": "special",
    "极-生命凝聚": "special",
    "极-急救措施": "special",
    "极-生命波动": "special",
    "极-生命汲取": "special",
    "极-全队幸暴": "special",
    "极-绝境守护": "special",
}


@dataclass
class ModulePart:
    """模组部件信息"""
    id: int
    name: str
    value: int


@dataclass(eq=True)
class ModuleInfo:
    """模组信息"""
    name: str
    config_id: int
    uuid: int
    quality: int
    parts: List[ModulePart]
    
    def __hash__(self):
        return hash(self.uuid)
    
    def __lt__(self, other):
        if not isinstance(other, ModuleInfo):
            return NotImplemented
        return self.uuid < other.uuid 

```

### ข้อมูลที่ฝังใน `star-resonance-module-optimizer/index.html` (ตัดตอน):
```javascript

{
  "@context": "https://schema.org",
  "@type": "WebApplication",
  "name": "Blue Protocol Module Calculator",
  "url": "https://asgharkapk.github.io/star-resonance-module-optimizer/",
  "description": "Interactive module calculator for Blue Protocol, helping players optimize their DPS, Healer, Tank, and Support builds.",
  "applicationCategory": "Game",
  "operatingSystem": "Web",
  "author": {
    "@type": "Person",
    "name": "asgharkapk"
  }
}
---
const e = React.createElement;

const STATS = [
  "Strength Boost", "Agility Boost", "Intellect Boost", "Special Attack", "Elite Strike",
  "Healing Boost", "Healing Enhance", "Resistance", "Armor", "Cast Focus",
  "Attack SPD", "Crit Focus", "Luck Focus", "DMG Stack", "Agile",
  "Life Condense", "First Aid", "Final Protection", "Life Wave", "Life Steal", "Team Luck & Crit"
];
//icons from Maxroll
const STAT_ICONS = {
  "Strength Boost": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_011.webp",
  "Agility Boost": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_039.webp",
  "Intellect Boost": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_034.webp",
  "Special Attack": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_002.webp",
  "Elite Strike": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_038.webp",
  "Healing Boost": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_023.webp",
  "Healing Enhance": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_042.webp",
  "Resistance": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_009.webp",
  "Armor": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_014.webp",
  "Cast Focus": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_013.webp",
  "Attack SPD": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_026.webp",
  "Crit Focus": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_019.webp",
  "Luck Focus": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_048.webp",
  "DMG Stack": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_016.webp",
  "Agile": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_006.webp",
  "Life Condense": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_012.webp",
  "First Aid": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_024.webp",
  "Final Protection": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_045.webp",
  "Life Wave": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_004.webp",
  "Life Steal": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_035.webp",
  "Team Luck & Crit": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/items/modules/effects/mod_effect_icon_017.webp"
};
// Define role groups
const ROLE_STATS = {
  DPS: ["Strength Boost","Agility Boost","Intellect","Special Attack","Elite Strike","Attack SPD","Crit Focus","DMG Stack","Agile"],
  HEALER: ["Healing Boost","Healing Enhance","First Aid","Life Condense","Life Wave"],
  TANK: ["Resistance","Armor","Final Protection"],
  SUPPORT: ["Cast Focus","Luck Focus","Life Steal","Team Luck & Crit"],
  BASIC: ["Strength Boost","Agility Boost","Intellect Boost","Special Attack","Elite Strike","Healing Boost","Healing Enhance","Cast Focus","Attack SPD","Crit Focus","Luck Focus","Resistance","Armor"],
  SPECIAL: ["DMG Stack","Agile","Life Condense","First Aid","Life Wave","Life Steal","Team Luck & Crit","Final Protection"]
};
// Preset module selections based on Maxroll build guides
const PRESETS = {
  "Marksman Wildpack": ["Crit Focus","Attack SPD","DMG Stack","Life Wave","Agility Boost","Elite Strike"],
  "Marksman Falconry": ["Agility Boost","Crit Focus","DMG Stack","Elite Strike","Attack SPD","Life Wave"],
  "Beat Performer Dissonance": ["Life Wave","DMG Stack","Attack SPD","Intellect Boost","Elite Strike","Team Luck & Crit"],
  "Beat Performer Concerto": ["Life Wave","Life Condense","Healing Enhance","Healing Boost","Crit Focus","Team Luck & Crit"],
  "Shield Knight Recovery": ["Final Protection","Resistance","Armor","Crit Focus","Life Wave"],
  "Shield Knight Shield": ["Final Protection","Attack SPD","Resistance","Armor"],
  "Heavy Guardian Earthfort": ["Final Protection","Resistance","Life Wave","Armor","Crit Focus"],
  "Heavy Guardian Block": ["Final Protection","Armor","Resistance","Life Wave"],
  "Verdant Oracle Smite": ["Life Wave","DMG Stack","Cast Focus","Intellect Boost","Elite Strike","Team Luck & Crit"],
  "Verdant Oracle Lifebind": ["Life Wave","Life Condense","Healing Enhance","Crit Focus","Cast Focus","Team Luck & Crit"],
  "Wind Knight Vanguard": ["DMG Stack","Elite Strike","Strength Boost","Attack SPD","Life Wave","Crit Focus"],
  "Wind Knight Skyward": ["DMG Stack","Elite Strike","Strength Boost","Attack SPD","Life Wave","Crit Focus","Luck Focus"],
  "Frost Mage Icicle": ["DMG Stack","Life Wave","Elite Strike","Intellect Boost","Crit Focus","Special Attack"],
  "Frost Mage Frostbeam": ["DMG Stack","Life Wave","Elite Strike","Cast Focus","Intellect Boost","Crit Focus"],
  "Stormblade Moonstrike": ["DMG Stack","Life Wave","Elite Strike","Agility Boost","Attack SPD"],
  "Stormblade Iaido Slash": ["DMG Stack","Elite Strike","Crit Focus","Agility Boost","Special Attack"]
};
const PRESET_ICONS = {
  "Marksman Wildpack": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_petbig.webp",
  "Marksman Falconry": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_skyhitget.webp",
  "Beat Performer Dissonance": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/gita1308.webp",
  "Beat Performer Concerto": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/gita1317.webp",
  "Shield Knight Recovery": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/jiandun1208.webp",
  "Shield Knight Shield": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/jiandun1218.webp",
  "Heavy Guardian Earthfort": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_tank_shieldcounter.webp",
  "Heavy Guardian Block": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_sup_inspireex.webp",
  "Verdant Oracle Smite": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_sup_aoyitrigger.webp",
  "Verdant Oracle Lifebind": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_sup_healringget.webp",
  "Wind Knight Vanguard": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_backhitget.webp",
  "Wind Knight Skyward": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_flyhitget.webp",
  "Frost Mage Icicle": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_skilltriggericearrow.webp",
  "Frost Mage Frostbeam": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_icespearget.webp",
  "Stormblade Moonstrike": "https://assets-ng.maxroll.gg/sr-tools/assets/db/icons/talents/talent_passive_icon_general_dps_sickleget.webp",
  "Stormblade Iaido Slash": "https://assets-ng.maxroll.gg/sr

```


---
## 3. โมเดลข้อมูลตัวละคร (จาก `docs/CHARACTER_DATA_MODEL.md`)

# キャラクター/ビルドデータ仕様(検討メモ)

ZTable(`../../BPSRData/ZTable/`)の実データ調査を踏まえた、キャラクタービルドのデータ構造案。
実装済みの箇所は各セクションで実装ファイルを明示している。未実装・保留の項目は
「未確定・要調査事項」章にまとめてある。

## クラス (Profession)

- ZTable内部名は `Profession`。一覧は `ProfessionSystemTable.json`(`ProfessionId`, `Name`, `Element`, `Talent`, `IsOpen` 等)。
- `IsOpen: false` のクラスは未実装/特殊条件付きのため、クラス選択肢からは除外する。
- クラスごとに固定の `Element`(属性)を持つ。
- 攻撃種別表示は `AttackShow` フィールドで決定: 物理攻撃力(AttrId `11330`)か魔法攻撃力(`11340`)のどちらを表示するかをクラスごとに指定。
  非表示側のステータス値自体は内部的に保持される(0ではなく実値を持つ)。
- メインステータス表示も同様に `StrOrIntOrDexShow` フィールドで決定: 筋力(`11010`)/知力(`11020`)/俊敏(`11030`)のいずれを表示するか。
  こちらも非表示側のステータスは内部的に保持される。

### ロール (Talent / Tag)

- `ProfessionSystemTable.Talent` がロールIdを指す(1=攻撃、2=支援、3=防御)。
- ロール名・説明・イメージカラーは `TalentTagTable.json` で定義:
  - `TagName`: ロール名(攻撃/支援/防御)
  - `TalentColor`(`ProfessionSystemTable`側のフィールド): ロールのイメージカラー(カラーコード)
- 実データで確認済み: `Id:1 TagName:"攻撃"`, `Id:2 TagName:"支援"`, `Id:3 TagName:"防御"`。

### アビリティ(Talent)・スキル(Skill)

クラスごとに以下のスキル関連フィールドを持つ(`ProfessionSystemTable`):

| フィールド          | 内容                                                      |
| ------------------- | --------------------------------------------------------- |
| `NormalAttackSkill` | 通常攻撃スキル(固定)                                      |
| `SpecialSkill`      | 特殊スキル(固定)                                          |
| `UltimateSkill`     | アルティメットスキル(固定)                                |
| `NormalSkill`       | スキル選択候補プール。この中から**任意4個**を選択して使用 |
| `TalentSkill`       | アビリティ(talent)選択候補プール。**任意に複数選択可能**  |
| `roleSkill`(シーズン3で追加) | ロールスキル選択候補プール(下記参照)。この中から**任意4個**を選択して使用 |

固定スキル3種 + 選択スキル4種(NormalSkillより) + 任意選択のアビリティ(TalentSkillより)
+ 選択ロールスキル4種(roleSkillより)、という構成。

#### ロールスキル(RoleSkill、シーズン3で追加)

`classes.json`の`roleSkill`配列(12候補)は2種類のスキルからなる:

- **ロール固定4種**: `Talent`(1=攻撃/2=支援/3=防御)ごとに固定された4種(`TALENT_ROLE_SKILLS`)。
- **全ロール共通8種**(ID 3021〜3028): `SkillDutyTable`(`Type=[1,2,3]`)に登録され、
  全クラス・全ロールで共通。「幻想図鑑」(`SkillAoyiGuideTable`/`SkillAoyiGuideEffectTable`、
  バトルイマジンの育成度で解放される図鑑システム)と連動し、通常スキルの
  「レベル1〜30 × ランクG0〜G6」とは異なる**幻想図鑑ランク(Level 1〜4)のみの1軸**で強化される。

12候補の中から任意4個を選択してスロットに配置する(`roleSkillSlots`/`roleSkillRanks`、
デフォルトはロール固定4種)。

- スキルレベル: 1〜最大30
- スキルランク: 0〜最大6

> **調査結果**: `TalentSkill`が参照するIDは`NormalSkill`等と同じ`SkillTable`のエントリである
> (例: ID 1715は`SkillTable`に存在する通常のスキルエントリ)。つまり「アビリティ(Talent)」と
> 「スキル(Skill)」はデータ上は同一テーブルを共有し、クラス側のどの参照配列に載っているかで
> 区別される。したがって抽出処理上は`skills.json`(SkillTable由来、クラスの参照配列に登場する
> IDのみ)と`classes.json`内の参照配列があれば十分で、アビリティ専用の抽出テーブルは不要。
>
> なお`TalentTable`/`TalentPoolTable`/`TalentTreeTable`という別クラスタも存在するが、
> フィールド構成(`WeaponGroup`/`WeaponType`等)から見て武器熟練ツリーのような別システムと
> 判断し、ここでの「アビリティ」とは区別してスコープ外とした。

## 装備 (Equipment)

### 装備部位 (EquipPart)

UIのスロット配置と一致する連番ID(`EquipPartTable.json`、`extract-ztable.mjs`で
`src/locales/<locale>/game-data.json`の`parts`セクションとして抽出済み):

| Part ID | 部位    |
| ------- | ------- |
| 200     | 武器    |
| 201     | 頭部    |
| 202     | 胴部    |
| 203     | 腕部    |
| 204     | 脚部    |
| 205     | 耳飾り  |
| 206     | 首飾り  |
| 207     | 指輪    |
| 208     | 腕輪-左 |
| 209     | 腕輪-右 |
| 210     | 護符    |

- 武器(Part 200)はクラス専用。`EquipWeaponTable.ProfessionId` で対応するクラスと紐づく。

### 装備のステータス構成

装備品は以下の要素を持つ(EquipTable / EquipAttrLibTable 等を参照、※詳細な数値解決ロジックは別途調査が必要):

- **固定**: 筋力/知力/俊敏のいずれか1つ(メインステータス) + 耐久力 + シーズン固有能力
- **追加(可変)**: ランダムな2種類のサブステータス(会心/幸運/万能など)
- **特別オプション**: 物理攻撃力+2%、攻撃速度+1% 等の特殊効果、またはセット効果

サブステータス・特別オプションはビルドプランナー上で**ユーザーが選択できる**ようにする方針。
ただし選択UI・データ構造の詳細は一旦保留。

> `EquipAttrLibTable.json` の `AttrEffect`/`AllowPart` 等が個々のロール内容を保持していると見られるが、
> 数値ロジックの完全な解読は未着手。装備の性能計算を実装する際に別途詳細調査が必要。

シーズン固有能力(`SeasonTalentFactorItemTable` 等)は「心相投影(潜在)」「幻影因子」として
**実装済み**(当初はスコープ外としていたが方針転換。詳細は後述の「心相投影・幻影因子」章を参照)。

## モジュール (Module)

- 装備とは別枠の装備品。装備とは異なる効果を持つ。
- 最大装備数はシーズンにより変化する: **シーズン2まで4個、シーズン3以降5個**。

## キャラクタービルドの保存データ単位

1キャラクター(1ビルドプラン)ごとに保存する項目:

- キャラ名(保存名)
- 精錬レベル(装備枠ごと)
- クラス
- 選択中のアビリティ(Talent)
- 選択中のスキル(NormalSkillからの4個 + 固定3スキル) + 各スキルのレベル・ランク
- 選択中のロールスキル(roleSkillからの4個、シーズン3で追加) + 各スキルのランク
- 装備(各部位) + 各装備の可変部分の性能(サブステータス・特別オプション等)
- モジュール(シーズン3以降5枠) + 各モジュールの可変部分の性能
- 心相投影(シーズンタレント)のツリー選択状態 + 幻影因子の装着状態

## 未確定・要調査事項

- 装備のサブステータス/特別オプションの選択UI・データ構造(一旦保留)
- 装備のサブステータス/特別オプションの数値解決方法(`EquipAttrLibTable`等の完全な解読)

## 装着効果 (Enchant)

装備に宝石または刻印アイテムを1個装着できるシステム。詳細は `docs/EQUIPMENT_ENCHANT.md` を参照。

- 装着可能アイテム種別は装備の `EnchantId` フィールド(EquipTable)で決定
- Gs≤100: 宝石(赤/青/翠/輝晶宝石、グレード1〜5)
- Gs≥120: 刻印アイテム(通常/精/極の3段階)
- 抽出済み: `src/data/enchants.json`(EnchantIdごとのアイテムリスト)、
  `equipment.json` の各装備エントリに `enchantId` フィールドを追加
- UIは `EquipmentSlotPicker.tsx` に実装済み(装着効果ピッカー)

## 伝説刻印 (Legendary Affix)

高Gs装備(Gs100以上)に付与可能な追加ステータス選択機能。1装備につき1種類を選択。

- データ元: `EquipTable.QualityChildAttrLibId` → `EquipAttrLibTable`
- 各選択肢は `{ effectType, attrId, isPercent, values: number[] }` の形式
  (`src/build-planner/types.ts` `LegendaryAffixEntry`)
- `isPercent` の判定ルール:
  - 武器/アクセサリ部位 → 常に `true`(全効果が%表示)
  - 防具部位(頭/胴/腕/脚/腕輪) → `LEGENDARY_ARMOR_PERCENT_ATTR_IDS`(`extract-ztable.mjs`)に
    列挙されたattrIdのみ `true`、それ以外(物理攻撃力+等)は `false`(実数値加算)。
    このリストは筋力(11014)/知力(11024)/俊敏(11034)で開始したが、同じattrIdが武器/
    アクセサリ側では常にisPercent:trueで出現するのに防具側だけ漏れていた4件
    (攻撃速度11722/詠唱速度11732/回復力11792/バリア強度万分率11812)を2026-07-20に追加済み。
    新しいattrIdを防具刻印に追加する際は、武器/アクセサリ側での実際の表示(%かどうか)と
    揃っているか確認しこのリストの更新要否を判断すること。
- UIは `EquipmentSlotPicker.tsx` に実装済み(紫色表示、ティア選択ボタン)

## 心相投影・幻影因子 (Season Talent / Phantom Factor)

「シーズン固有能力」(`SeasonTalentFactorItemTable` 等)は当初スコープ外としていたが、
**実装済み**(`src/build-planner/phantom/` 配下のPhantomPanel)。旧記載で「潜在」と
呼んでいたものが心相投影に相当する。

### 心相投影(シーズンタレント、`src/data/season-talents.json`)

ツリー状のノードを辿って強化を積む、シーズン専用のタレントシステム。

- `templates`: ツリーのルート/アンロック条件
- `treeNodes`: ノード(`nodeType`1=通常効果ノード/2=因子ノード、`groupId`/`sameGroupId`で
  選択分岐を表現)
- `ordinaryEffects` / `advancedEffects`: 通常ノード/上級ノードの効果データ
- `intermediateSlots`: 因子ノードの中間スロット(装着可能な因子タイプ・対応クラスを制約)
- `bondSlots`: 絆(バインド)スロット

UIは `PhantomTreeSvg.tsx`(ツリー描画)・`PhantomNodeConfig.tsx` / `PhantomNodeEffect.tsx`
(ノード選択・効果表示)・`PhantomBondSection.tsx`(絆スロット)。

### 幻影因子(`src/data/phantom-factors.json`)

心相投影の因子ノードに装着する追加ステータス/効果。6種の因子タイプ(`factorTypes`)を持つ:

| typeId | 名称           |
| ------ | -------------- |
| 1      | 極性           |
| 2      | 恒常性         |
| 3      | 第六感         |
| 4      | クラス恒常性   |
| 5      | クラス狂想     |
| 6      | 真実           |

- `byClass`: クラス(`professionIds`)×因子タイプごとのグレード別効果(`grades`、G1〜G10相当)
- 各因子は `seasonId`(`SeasonTalentFactorItemTable.SeasonId[0]`)を持ち、過去シーズンの因子は
  現シーズンでは無効(ゲーム内説明文で明記)。旧セーブデータ互換のためデータ自体は保持しつつ、
  UI側は現行シーズンの最大 `seasonId` との比較で無効表記・並び替えを行う
  (`CURRENT_FACTOR_SEASON_ID`, `phantomView.ts`)。
- typeId=3(第六感、クラス固有)の効果(`effectType=3`、`FACTOR_POLARITY_EFFECTS`
  で扱う極性の対boost/penaltyとは別枠)はクラスごとにX1〜X11相当の11種あり、大半は
  条件付き/スキル固有効果(対応するStatIdが存在せず対象外)だが、ビートパフォーマーX4
  (`buffId 3057040`)のように「無条件の単独ステータス%ボーナス+スキル固有の副作用」が
  混在するものは`attrMaps.ts`の`FACTOR_SINGLE_STAT_PCT_BONUS`(`buffPars`内の対象
  `paramIndex`のみ反映)で個別対応する(2026-09-16不具合報告: 魔法攻撃力+p2が未反映だった。
  p1側の「ピースフルロンドの回復量変換-x%」はスキル固有のため対象外のまま)。
  この`stat`はatk/matk/maxHp/physicalDefの4種(`IMAGINE_PCT_FINAL`と同じ値域、型は
  `FinalPctStatId`)に限定している。atk/matkはメインステータス変換(知力→魔法攻撃力等、
  `deriveStats.ts`)を経由する"derived"な値のため、rawStats側の%ボーナス(`addPctBonus`、
  `calculateRawStats.ts`内の`pctBonus`)に積むと変換後の分(知力由来の魔法攻撃力等)に
  反映されない。`phantomFinalPct`(`IMAGINE_PCT_FINAL`と同じ、mainStat変換後の
  `derived.magicalAtk`等に乗算するバケツ)に積む必要がある(2026-09-17不具合報告:
  最初の修正でaddPctBonusに積んだところ、知力由来の魔法攻撃力分だけ%が反映されず、
  G7実測4532→4832のはずが4548にしかならなかった)。

## 改鋳進化ステータス (Kaitchu)

改鋳後の装備に付与される選択可能な進化ステータス(精錬レベルとは別、`reforgeEvoMin`/
`reforgeEvoMax`/`reforgeMaxPerfectline`)。

- 最小値/最大値は `EquipTable.RecastingAttrLibId` → `EquipAttrLibTable.AttrEffectConfig`
  から**ZTableより直接抽出**する(`extract-ztable.mjs` `extractEquipment()`)。旧実装では
  ZTableに存在しないためと考えて実測値からの近似式で導出していたが、実際には
  `AttrEffectConfig`に格納されておりZTable側で確定できることが判明したため直接参照に変更した。
- 最大完成度(`reforgeMaxPerfectline`)のみ引き続きヒューリスティック
  (`equip.EquipGs <= 80 ? 8 : 100`、実測ベース。ZTableに直接の対応フィールドなし)。
- 完成度(0〜100%)からの実数値解決: `min + (max - min) × 完成度 / 100`
  (`src/build-planner/stats/statValue.ts` `calcStatValue()`。丸めは合算後・表示直前のみ行う)。
- 武器は防具の2倍の値を持つ(min/maxとも)。
- Gs帯: 低GS(≤80)は完成度上限8%の小規模なステータス、Gs120〜170は完成度0〜100%、
  シーズン3で追加されたGs220〜260(Lv190+装備)はさらに大きい数値帯になる。
  部位・GSごとの具体的なmin/maxは`src/data/equipment.json`の`reforgeEvoMin`/`reforgeEvoMax`
  を参照(ZTable由来のため、シーズン更新時は`npm run extract:ztable`で自動追従)。

## データ抽出の出力構成 (`scripts/extract-ztable.mjs`)

- **言語非依存データ** (`src/data/`、以下は現時点の全ファイル):
  - `equipment.json`: EquipPart毎にグループ化。各エントリに `enchantId`/`legendaryAffix`/
    `legendaryAffixGroups`/`reforgeEvoMin`/`reforgeEvoMax`等を含む
  - `enchants.json`: EnchantIdをキーとした装着可能アイテムリスト(宝石/刻印。詳細は
    `docs/EQUIPMENT_ENCHANT.md`)
  - `refine.json`: 精錬効果データ(累積効果/マイルストーン)
  - `skills.json`: クラスから参照されるスキルのみ(NormalSkill/TalentSkill/RoleSkill)
  - `skill-fight-values.json` / `skill-rank-fight-values.json`: 能力スコア算出用の
    スキルレベル別/ランク別戦力値
  - `classes.json`: IsOpen:false も含む全クラス(`roleSkill`含む、上記「アビリティ・スキル」章参照)
  - `talent-tree.json`: R1/R2アビリティのタレントツリー(ノード・効果・type=4のクラス係数
    ボーナス効果を含む)
  - `battle-imagines.json`: バトルイマジンのデータ
  - `modules.json`: モジュールのデータ(効果・パワーコア・リンク等。専用docsは未作成、
    `src/build-planner/module/moduleData.ts` を参照)
  - `suits.json`: セット効果(`suitId`ごとのtier別効果)
  - `season-talents.json`: 心相投影(シーズンタレント)。`season-constants.json`とは無関係の別データ
  - `phantom-factors.json`: 幻影因子
  - `season-constants.json`: `docs/STATUS_CALCULATION.md`のシーズン定数(K値、現行シーズンの
    ものを自動抽出)
  - `player-levels.json`: プレイヤーレベル関連(シーズン経験値上限等)
- **ロケール毎の表示テキスト** (`src/locales/<locale>/game-data.json`): `items`/`skills`/
  `classes`/`parts`/`attributes` の5セクションをIDキーで保持。
  `items` には宝石/刻印アイテム名も含む。
  手書きのUI文言 (`bpsr-bp-ui.json`) とは別ファイル。


---
## 4. ข้อมูลระบบอุปกรณ์และออปชัน (จาก `docs/EQUIPMENT_ENCHANT.md`)

# 装着効果・装備タイプフィルタ仕様

ZTable調査に基づく装着効果(宝石/刻印)システムの仕様まとめ。
データ抽出・UIともに実装済み(`EquipmentSlotPicker.tsx`)。

## 1. 装着効果システム概要

装備に「宝石」または「刻印」アイテムを1個装着でき、固定のステータスボーナスが得られる。
装備可能なアイテム種別は装備のGsによって異なる:

| GS帯                                  | 装着可能アイテム     | EnchantId |
| ------------------------------------- | -------------------- | --------- |
| Gs=10/20 (一部)                       | なし (`EnchantId=0`) | 0         |
| Gs=40                                 | 宝石 (グレード1〜5)  | 1001      |
| Gs=60                                 | 宝石 (グレード1〜5)  | 1002      |
| Gs=70/80/90                           | 宝石 (グレード1〜5)  | 1003      |
| Gs=100〜180 武器                      | 刻印 (Q3/Q4/Q5)      | 2001      |
| Gs=120〜170 頭/胴/腕/脚               | 刻印 (Q2/Q4)         | 2002      |
| Gs=120〜160 耳飾/首飾/指輪            | 刻印 (Q2/Q3/Q5)      | 2003      |
| Gs=120〜170 腕輪-左/腕輪-右/護符      | 刻印 (Q2/Q3)         | 2004      |
| Gs=220〜280 武器 (S3, Lv190+)         | 刻印 (Q2〜Q5)        | 3001      |
| Gs=220〜270 頭/胴/腕/脚 (S3)          | 刻印 (Q2/Q4)         | 3002      |
| Gs=220〜260 耳飾/首飾/指輪 (S3)       | 刻印 (Q2〜Q5)        | 3003      |
| Gs=220〜270 腕輪-左/腕輪-右/護符 (S3) | 刻印 (Q2/Q3)         | 3004      |

`3001`〜`3004` はシーズン3で追加されたLv190+装備(Gs220以上)用の枠で、`2001`〜`2004`と同じ部位対応・同じ
データ構造(`EnchantItemList`ベース、精/極バリアントあり)を持つ。候補リストには旧シーズン(S2)から
引き継がれたアイテム(id<3000000、`1024xxx`)とS3新規アイテム(id≥3000000、`302xxxx`)が混在しており、
アイテムIDの帯がそのままシーズン境界と一致する(`isSeason3EnchantItem()`, `equipmentSlotPickerData.ts`)。

## 2. 宝石システム (EnchantId=1001/1002/1003)

`EquipEnchantTable` の `RecommendedGem` フィールドで定義された宝石アイテムIDリスト(36件)。
EnchantId=1001/1002/1003 はすべて同一のリスト(グレード1〜5、4色×各グレード)を持つ。
グレード6・7の宝石は `EquipEnchantItemTable` には存在するが、`RecommendedGem` には含まれない。

### 宝石の種類

| 色   | Primary効果 (attrId) | 一例                                  |
| ---- | -------------------- | ------------------------------------- |
| 赤晶 | 会心 (11112)         | 赤晶宝石・威5: 会心+50, 筋力+16       |
| 青晶 | ファスト (11122)     | 青晶宝石・磐5: ファスト+50, 耐久力+50 |
| 翠晶 | 器用さ (11142)       | 翠晶宝石・疾5: 器用さ+50, 敏捷+16     |
| 輝晶 | 幸運 (11132)         | 輝晶宝石・淵5: 幸運+50, 知力+16       |

各色のセカンダリ効果の接尾辞: 威=筋力(11012)、磐=耐久力(11042)、疾=敏捷(11032)、淵=知力(11022)。
グレード1宝石はセカンダリなし(Primary効果のみ)。

### 宝石アイテムのデータ構造

宝石は精/極バリアントを持たない(グレードごとに独立したアイテムID)。
`enchants.json` での表現:

```json
{
  "id": 1024051,
  "quality": 3,
  "effects": [
    [11112, 50],
    [11012, 16]
  ]
}
```

## 3. 刻印システム (EnchantId=2001〜2004 / 3001〜3004)

`EquipEnchantTable` の `EnchantItemList` フィールドで定義されたアイテムIDリスト。
各IDがベースアイテム(通常)で、**+1が「精」、+2が「極」**バリアント。

```
baseId     → 通常 (基本効果)
baseId + 1 → 精  (効果+20〜25%増)
baseId + 2 → 極  (効果+40〜50%増)
```

`enchants.json` での表現:

```json
{
  "id": 1024601,
  "quality": 3,
  "effects": [[11502, 20]],
  "refined": { "id": 1024602, "effects": [[11502, 25]] },
  "perfect": { "id": 1024603, "effects": [[11502, 30]] }
}
```

各刻印には初回装着コスト(`cost`)とは別に、精/極への強化に必要な「上級装着コスト」
(`advancedCost`、`EquipEnchantItemTable.AdvancedConsume` 由来)が存在する。base/refined/perfect
の3バリアントで共通(同一トリオ内はゲームデータ上完全に一致)のため `EnchantItem.advancedCost` に
base側のみ保持している。UIは常時グレード選択(通常/精/極)ドロップダウンを表示し、選択グレードを
装備・プランをまたいで永続化する(`EquipmentSlotPicker.tsx`)。

### EnchantId=2001 (武器) のアイテム例

| アイテム名                     | 効果 (通常→精→極)                    |
| ------------------------------ | ------------------------------------ |
| ブルースパインリザードの刻印   | 全属性攻撃力 +20/25/30               |
| エメラルドホーンの刻印         | 耐久力+80/90/100, 筋力+25/30/35      |
| バジリスクの刻印 (Q=4)         | 全属性攻撃力 +40/45/50               |
| ホーンゴート・花と刃の印 (Q=5) | 全属性攻撃力+40/45/50, 筋力+50/60/70 |

## 4. EnchantType と製精システム

`EquipEnchantTable.EnchantType` フィールドには 1/2/3 の値が存在する:

| Type | 概要                                                                                                     |
| ---- | -------------------------------------------------------------------------------------------------------- |
| 1    | 装着 (初回取り付け)。`EnchantItemList` / `RecommendedGem` から選択                                       |
| 2    | **製精** (別システム)。`EnchantId=9999` として記録され、装着とは独立したエンチャント強化操作と推測される |
| 3    | Type=1 と同一の `EnchantItemList` を持つ。用途は未確定                                                   |

> **注意**: EnchantId=9999 (Type=2) は初回装着とは別の製精システムであり、
> `enchants.json` の抽出対象からは除外している。UIへの反映は将来の課題。

## 5. 抽出データファイル

### `src/data/enchants.json`

EnchantId をキーとした装着可能アイテムのリスト:

```typescript
// 各エントリの型
interface EnchantItem {
  id: number;
  quality: number;
  icon?: string;
  cost?: [itemId: number, count: number][];
  advancedCost?: [itemId: number, count: number][]; // 精/極への強化コスト(刻印のみ)
  effects: [attrId: number, value: number][];
  refined?: { id: number; effects: [number, number][] }; // 精 (刻印のみ)
  perfect?: { id: number; effects: [number, number][] }; // 極 (刻印のみ)
}

// ファイル全体: Record<enchantId: string, EnchantItem[]>
```

- 宝石 (1001/1002/1003): `refined`/`perfect` なし、36件ずつ (同一内容)
- 刻印 (2001〜2004): `refined`/`perfect` あり、各8〜17件
- 刻印 (3001〜3004, S3・Lv190+装備用): `refined`/`perfect` あり、各27〜38件
  (S2から引き継いだアイテムとS3新規アイテムが混在)

### `src/data/equipment.json` の `enchantId` フィールド

`EnchantId=0` (装着不可) の装備には `enchantId` フィールドが存在しない(undefined)。
それ以外の装備には `enchantId: number` が付与されている(BreakThrough合成品はベース装備から継承)。

### `src/locales/*/game-data.json` の `items` セクション

宝石・刻印アイテムの名前と説明が追加済み(アイテムID 1024001〜1024773)。

## 6. 装備タイプフィルタ (実装済み)

防具・アクセサリは「筋力/知力/俊敏」いずれかのメインステータスを持ち、
クラスのメインステータス (`profession.mainStat`) と一致する装備のみ装着可能。

フィルタロジック (`src/build-planner/equipment/equipmentData.ts` `getGearType()`):

- `baseStats` に `attrId=11012` (筋力) が含まれる → `"strength"`
- `baseStats` に `attrId=11022` (知力) が含まれる → `"intellect"`
- `baseStats` に `attrId=11032` (俊敏) が含まれる → `"agility"`
- どれも含まれない → `null` (フィルタ対象外、すべてのクラスで表示)

`EquipmentPanel.tsx` の candidates フィルタ:

```typescript
// 武器はprofessionId一致、防具/アクセはmainStatが一致するgearTypeのみ表示
(item) => {
  if (openSlot === 'weapon') return item.weaponProfessionId === profession.professionId;
  const gearType = getGearType(item);
  return gearType === null || gearType === profession.mainStat;
};
```

## 7. 装備選択候補のGS帯フィルター (実装済み)

`equipmentSlotPickerData.ts` の `CandidateGsFilter`(`'lv220' | 'lv240' | 'lv260'`)で、
装備選択ダイアログの候補一覧をGS帯優先表示できる。**除外ではなく「優先表示」**のフィルターで、
`isCandidateGsMatch()` が真の候補をソートで先頭側に寄せるだけであり、非該当の候補も一覧には残す
(現在選択中の値との紐付けを維持するため)。「S3装備のみ」(GS>190)のような選択肢は、GS降順
ソートと結果が完全に一致し実質的な意味を持たないため未実装。「全て」ボタンも、選択中のボタンを
再クリックすると解除(未選択=絞り込みなし)できるため用意していない。

- 判定: `isCandidateGsMatch(item, filter)` — `lv220`=220以上240未満、`lv240`=240以上260未満、
  `lv260`=260以上
- 初期値: `getDefaultCandidateGsFilter(now)` がクライアントの現在日時から
  `seasonSchedule.ts` の `getGsScheduleTier()` を流用してその時点の「旬」なGS帯を返す
  (`CandidateGsFilter` と `GsScheduleTier` が同じ3値のため共用可能)
- 保持場所: `EquipmentPanel.tsx` の state(`candidateGsFilter`)。ダイアログ(`EquipmentSlotPicker`)を
  開き直しても選択が消えないよう、ダイアログ本体ではなくパネル側で保持する。
  localStorageへは保存せずセッション中のみ有効
- UI: `EquipmentSlotPicker.tsx` のトグルボタン群(`CANDIDATE_GS_FILTERS`)。フィルター適用中は
  一致グループと非一致グループの境界に区切り線を表示する(`candidateDividerIndex`)

## 8. UI実装状況

装着効果ピッカーは `EquipmentSlotPicker.tsx` に実装済み:

- 対象装備の `enchantId` を参照し `enchants.json` の該当セットを表示
- `enchantId` が存在しない装備(Gs=10/20等)はセクション非表示
- 選択状態は `selectedEnchant`(通常/精/極いずれかの実アイテムID)として保持し、
  `sortedEnchants` から `id`/`refined.id`/`perfect.id` を逆引きしてグレード判定する
- ステータス計算への反映は `stats/calculateRawStats.ts` の `rawStats` 合算に組み込み済み
  (呼び出し元は `store/derivedSelectors.ts` の `computeStatsBundle`)
- グレード選択(通常/精/極)は常時表示され、`advancedCost` を含むコストを表示。希望グレードは
  装備を切り替えても維持される(永続化)


---
## 5. สมการคำนวณสเตตัสทั้งหมด (จาก `docs/STATUS_CALCULATION.md`)

# ステータス計算式メモ(検討用)

出典: [スタレゾ Wiki - ゲームシステム/キャラクターステータス](https://bpsr-wiki.regnas.blue/wiki/%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%B7%E3%82%B9%E3%83%86%E3%83%A0/%E3%82%AD%E3%83%A3%E3%83%A9%E3%82%AF%E3%82%BF%E3%83%BC%E3%82%B9%E3%83%86%E3%83%BC%E3%82%BF%E3%82%B9)
(2026-03-28 時点の版、ページ末尾の更新日時より)。
このページの式は**シーズン毎に定数が変わる**と明記されているため、実装では定数を
ハードコードせず差し替え可能な設定として扱う(詳細は「実装方針」章)。

## 1. 実数値→%変換の共通モデル(収益減少曲線)

会心・幸運・器用さ・ファスト・レジスト・万能・物理/魔法増強・属性強度・属性耐性・防御力は、
いずれも「装備等で得られる実数値」を以下の形の式で%に変換してから効果を発揮する
(値が大きいほど変換効率が落ちる、いわゆる収益減少曲線)。

```
ステータス% = base% + 100 × 実数値 / (実数値 + K)
```

`base%` と `K` はステータスごとに異なり、`K` は明示的に「シーズン毎に変更される」と記載がある。
系列Aは「同一の収益減少曲線を、土台となるbase%だけ変えて使っている」ことがグラフデータ
(x=0 のときの y 値)から確認できる(実装 `seasonConstants.ts` は現在S3の値を採用)。

`K` はZTableの `FightAttrTranTable.json`(Id=1/2/3 がそれぞれS1/S2/S3に対応)で確定済み。
`CriToCrit`/`HasteToHastePct`/`LuckToLuckyStrikeProb`/`MasteryToMasteryPct`/`BlockToBlockRate`
が系列A、`VersatilityToVersatilityPct`が系列B、`ElementPowerToDam`/`PhyPowerToDam`/
`MagPowerToDam`が系列C(いずれも各配列の先頭要素がK)。系列D(`DefPara`)もS3=22000まで判明。

まずbase%(系列・対象ステータスごとに決まり、通常はシーズンをまたいでも変わらない)を示す:

| 系列 | 対象ステータス                         | base% |
| ---- | --------------------------------------- | ----- |
| A    | 会心・幸運                             | 5%    |
| A    | 器用さ                                 | 6%    |
| A    | ファスト                               | 0%(※S1/S2は6%。下記注参照) |
| A    | レジスト                               | 0%    |
| B    | 万能                                   | 0%    |
| C    | 物理増強・魔法増強・属性強度・属性耐性 | 0%    |
| D    | 物理防御力・魔法防御力・精錬防御力     | 0%    |

> **ファストのbase%について**: Wiki記載値(S2時代)は6%だが、S3では実測(俊敏538・装備なしで
> `real=430` → `0.8536%` = `100×430/(430+50000)` と一致)によりbase%が**0%**に変更されている
> ことを確認済み。他の系列Aステータス(会心/幸運/器用さ/レジスト)はWiki値のままで実測と矛盾しない。
> 実装は `seasonConstants.ts` の `DIMINISHING_A_BASE_PERCENT.haste = 0` としてこの補正を反映している。

次に`K`(系列ごとにシーズンで変わる)を示す。列をステータス系列、行をシーズンにしているため、
将来シーズンが増えてもこの表に1行追加するだけでよい(以前は行列を逆にしていたためシーズンが
増えるたびに列が増えて見づらくなっていた):

| シーズン | 系列A  | 系列B | 系列C | 系列D      |
| -------- | ------ | ----- | ----- | ---------- |
| S1       | 4457   | 2500  | 4457  | (記載なし) |
| S2       | 19972  | 11200 | 6487  | 9980       |
| S3(現行) | 50000  | 28000 | 11000 | 22000      |

(系列ごとの対象ステータスは上のbase%表を参照)

> **系列DのS1が「記載なし」な理由**: `FightAttrTranTable.json`のId=1(S1)エントリは
> `DefPara`(系列Dの元データ)が空配列であり、値がそもそもデータ中に存在しない
> (2026-07-01時点の最古のBPSRData/StarResonanceDataダンプ、および別系統のTW版ダンプでも
> 同様に空。過去に遡れる範囲のZTableに一貫してS1分は未収録)。S1時点では防御関連の計算方法
> 自体がS2以降と異なっていた可能性もあるが、既に検証できるデータが残っておらず詳細は不明。
> なお過去の実測記録として「防御力÷(防御力+6500)」(K=6500)という報告があるが、上記の理由で
> ZTableからは裏付けが取れないため、参考情報の域を出ない。

## 2. 基礎ステータス

### 最大HP

- 0になると戦闘不能。
- 最終値はゲーム内では**切り捨てではなく四捨五入**で表示される(2026-08-06、複数ビルドの実測で確認。
  `applyFinalStatModifiers`の`maxHp`のみ`Math.round`を使用。他のステータス(atk/matk/physicalDef等)は
  従来通り切り捨て)。
- **未解明の残課題**: 装備6部位以上で、上記の四捨五入だけでは説明できない**固定+2**のズレが実測で
  確認されている(5部位以下では発生しない)。装備の種類・精錬値には依存せず、装備数のみに連動する
  ことをユーザー実測で確認済みだが、対応する仕組みがZTable抽出済みデータ内に見当たらず、原因は
  特定できていない。暫定対応として`calculateRawStats.ts`で装備6部位以上の場合に`maxHp`へ固定+2を
  加算している(該当コメント参照)。原因が判明次第、正しい実装に置き換えること。

### 耐久力(実数値、加算)

最大HPに加算変換。クラスごとに変換係数が異なる:

| クラス                                 | 耐久力1ptあたりの最大HP |
| -------------------------------------- | ----------------------- |
| ヘヴィガーディアン、シールドファイター | +12                     |
| フロストメイジ                         | +6.5                    |
| その他                                 | +6                      |

### 会心(系列A, base5%)

- `会心% = 5 + 100×実数値/(実数値+K_A)`
- 会心発生確率に等しい。
- 会心発生時は「会心ダメージ」ステータス(別項目、基礎50%)分だけダメージが増加する。
  **会心(実数値/%)自体は会心ダメージの倍率には影響しない**(確率のみを上げる)。
- 幸運の一撃にも会心は乗る。

### ファスト(系列A, base0% ※S3実測補正)

- S3実装: `ファスト% = 100×実数値/(実数値+K_A)`(Wiki記載のS2時代base6%はS3では実測と合わず、
  0%に補正済み。詳細は前章の注記を参照)
- 攻撃速度・詠唱速度を増加させる。クラスにより変換係数が異なる(R1アビリティ込みの値は青字表記、
  以下表では `+R1` として分離)。ツインストライカー(S3新クラス)は基礎係数(0.6%/1%列)は
  未確認のため暫定でゲイルランサー/ストームブレイド相当の値を仮採用しているが(`profession.ts` の
  `TODO(シーズン3)` コメント参照)、R1の`+R1 1%`分は他の2クラスと全く同じ効果データ
  (`talentId 301`「疾転」)がZTable上に存在するため、こちらは確認済みの値:

| クラス               | 攻撃速度/ファスト1%   | 詠唱速度/ファスト1% |
| -------------------- | ---------------------- | ------------------- |
| ヘヴィガーディアン   | 0.6%                   | 1%                  |
| シールドファイター   | 0.6%                   | 1%                  |
| ストームブレイド     | 0.6%(+R1 1%)           | 1%                  |
| ゲイルランサー       | 0.6%(+R1 1%)           | 1%                  |
| ディバインアーチャー | 0.6%                   | 1%                  |
| フロストメイジ       | 0.2%                   | 2%                  |
| ヴァーダントオラクル | 0.2%                   | 2%                  |
| ビートパフォーマー   | 0.6%                   | 2%                  |
| ツインストライカー(基礎係数は未確認) | 0.6%(暫定、+R1 1%は確認済み) | 1%(暫定) |

> ディバインアーチャーのR1「迅射」(`talentId 1135`)は、この表のような
> 「ファスト%→攻撃速度%の変換率へのボーナス」ではなく、ファストの量に関係なく常時
> 攻撃速度+3%が加算される別枠の効果(`atkSpeedFinalPctAddend`)。旧docsではこれを
> 誤って「+R1 0.2%」という変換率ボーナスとして本表に混在させていたため訂正した。
>
> 上記「+R1 1%」(ストームブレイド/ゲイルランサー/ツインストライカー「迅速」「疾転」)は
> S3実装当初、`calculateRawStats.ts`の変換率ボーナス処理(`TALENT_EFFECT_TYPE_CONVERSION_RATE`)
> がattrId 11722(攻撃速度)を素通しして未反映になっていたバグがあったが、2026-07-18に修正済み
> (`atkSpeedPerHastePercentBonus`として`deriveStats.ts`に個別集計・加算するようにした)。
>
> 武器レアステータス(例: 月影型「ファスト+6%」)等の`finalPctAddend.haste`・イマジン最終%
> 乗算・料理バフ(HP変動/二段増幅/鼓舞/ステ補正)によるファスト%への後付け加算は、上表の
> 変換係数を通じて攻撃速度%/詠唱速度%にも反映されるべきだが、`deriveStats()`内の初期計算は
> rawStats由来の`hastePercent`(後付け加算より前の値)しか見ないため取りこぼしていたバグが
> あった。2026-08-05に修正済み(最終ファスト%確定後、`recalculateSpeedPercents()`で
> `derivedSelectors.ts`側から再計算する)。

### 幸運(系列A, base5%)

- `幸運% = 5 + 100×実数値/(実数値+K_A)` = 幸運の一撃の発生確率。
- 持続ダメージ/持続回復を除くクラススキルのダメージ/回復発生ごとに判定。アビリティ由来の
  ダメージ/回復では発生しない(アビリティが自動発動させたクラススキルなら発生する)。
- 幸運の一撃ダメージ倍率/回復倍率: 共通の基礎値`40% + 0.25 × 幸運%`(`FIXED_BASE_PERCENT.
  luckyHitBase`。幸運の"%換算後の値"を使う点に注意。実数値ではない。2026-08-09不具合報告:
  幸運5%/11%/幸運相乗込み5%の3点実測ダメ倍率41.25%/42.75%/43.75%と寸分違わず一致することを
  確認済み。回復倍率も同じ基礎40%であることをユーザー確認済み)。ZTableの幸運説明文にある
  「幸運強化: 幸運確率1%につき『幸運効果』のダメージと回復力それぞれ+1%」は、この倍率とは
  別枠の(幸運効果自体へのバフのような)効果と判明したため未対応のままでよい。
  - 幸運の一撃ダメージ倍率のみに乗る、係数0.25への追加変換率ボーナス(`luckyHitDamageRatioBonus`)
    を持つR2アビリティが全クラス監査(2026-08-09)で複数見つかった: ビートパフォーマー「幸運相乗」
    (+0.5)、フロストメイジ(talentId 255, +0.5)、ツインストライカー(talentId 330, +0.8)、
    ヴァーダントオラクル(talentId 553, +1.5)。同アビリティは`luckyHitDamageBonus`への平坦加算も
    持つ場合がある(255は+15%、330は+5%、553は+5%)。ディバインアーチャー(talentId 470)・
    ヴァーダントオラクル(talentId 510)は平坦+50%のみ。ストームブレイド(talentId 173)の
    「幸運の一撃の攻撃力+100%」は対応するStatIdがなく実測待ちで未対応。
  - イマジンインパクト(心相ツリー、テンプレート1)の固定ノード「リビルド」(buffId 3002030)
    「幸運の一撃倍率+10%」は、表記こそ「ダメージ」を明示しないがダメージ専用で回復には影響
    しない(`ORDINARY_EFFECT_BONUS`、2026-08-09不具合報告・ユーザー確認)。
  - 武器レアステータス・イマジン最終%乗算・料理バフ等による幸運%(`luck`)への後付け加算は、
    上記の変換係数を通じて幸運の一撃ダメージ倍率/回復倍率にも反映されるべきだが、
    `deriveStats()`内の初期計算はrawStats由来の`luckPercent`(後付け加算より前の値)しか見ない
    ため取りこぼしていたバグがあった(2026-08-09不具合報告: ビートパフォーマー狂音型で
    幸運36.86%・幸運相乗込み係数0.75のはずが63.14%にしかならなかった)。攻撃速度%/詠唱速度%と
    同じ問題のため、同じ対処法で2026-08-09に修正済み(最終幸運%確定後、
    `recalculateLuckyHitMultipliers()`で`derivedSelectors.ts`側から再計算する)。
  - 幸運の一撃は対象の防御力を完全に無視し、会心も別途乗る。
  - 概算式: `(攻撃力+精錬攻撃力) × 幸運の一撃ダメージ倍率 × (会心時のみ会心ダメージ倍率) × (100% + ダメージ増加バフ + 幸運増強%) × その他ダメージ増加効果`
- 幸運増強: `幸運% (=幸運確率) と同値の与ダメージ増加バフ`。汎用の与ダメージ増加バフと加算。

### 器用さ(系列A, base6%)

- `器用さ% = 6 + 100×実数値/(実数値+K_A)`
- クラス×型(2種)ごとに完全に異なる固有効果が発生する(攻撃力系には乗らないものが多い)。
- 下表はZTable `ProfessionSystemTable.MasteryDes`(型ごとの効果説明文、`[type1, type2]`の順)
  から直接書き起こしたもの(S3、2026-07確認)。ZTable上に構造化された係数テーブルはなく、
  MasteryDesは自由記述文のため、`npm run extract:ztable`でシーズンが更新された際は
  この表とコード側(`stats/masteryElementBonus.ts`)の両方を再確認・追従させる必要がある。
  「器用さ強化」は器用さ1%につき基礎変換率自体が+X%されるという自己参照的な効果
  (例: 霜天型は器用さ6%のとき `6×(0.2×(1+6×3/100))=1.416%` → 表示は切り捨てで1.41%)。
  過去のS2時点では霜天型は「氷属性ボーナス+0.4%」固定だったが、S3で現在の式に変更された
  (実測・ユーザー確認済み)。

| クラス               | 型     | 効果(器用さ1%あたり)                                                     |
| --------------------- | ------ | -------------------------------------------------------------------------- |
| ストームブレイド     | 雷刃型 | 雷印を消費するスキルのダメージ+3.4%                                       |
| ストームブレイド     | 月影型 | 迅雷連斬、雷霆鎌、審罰鎌のダメージ+1.2%                                   |
| フロストメイジ       | 氷牙型 | 氷属性ボーナス+0.65%                                                      |
| フロストメイジ       | 霜天型 | 凍源の取得効率+1%、氷属性ボーナス+0.2%(器用さ強化: 変換率+3%/pt)          |
| ツインストライカー   | 双炎型 | ツインラッシュ・ラースアクス・アクススパイラルのリキャスト加速+3.2%、物理攻撃力+0.2% |
| ツインストライカー   | 炎舞型 | 火属性ボーナス+0.72%                                                      |
| ゲイルランサー       | 烈風型 | 風属性ボーナス+0.35%(器用さ強化: 変換率+3%/pt)                            |
| ゲイルランサー       | 乱風型 | 風属性ボーナス+0.65%                                                      |
| ヴァーダントオラクル | 威咲型 | 森属性ボーナス+0.75%、バリア強度+0.3%                                     |
| ヴァーダントオラクル | 森癒型 | 回復力+1%                                                                 |
| ヘヴィガーディアン   | 剛身型 | バリア強度+2.5%                                                           |
| ヘヴィガーディアン   | 剛守型 | レジストダメージ軽減と幸運レジストダメージ軽減+0.2%                       |
| ディバインアーチャー | 狼弓型 | 臣獣のダメージ+2.75%                                                      |
| ディバインアーチャー | 鷹弓型 | 光属性ボーナス+0.6%                                                       |
| シールドファイター   | 光砕型 | 光明の盾の取得効率+2.5%、全属性耐性+0.2%                                  |
| シールドファイター   | 光盾型 | 光盾障壁のHPブースト効果+3%、全属性耐性+0.2%                              |
| ビートパフォーマー   | 狂音型 | ピースフルロンドのボーナス変換効果+1%                                     |
| ビートパフォーマー   | 響奏型 | ヒーリングメロディーの減衰速度-0.35%                                      |

上記のうち既存StatId、または新規に切った直接加算StatId(属性ボーナス/バリア強度/回復力/
全属性耐性)で表現できる効果は`stats/masteryElementBonus.ts`の`MASTERY_STAT_EFFECTS`
(rawStatsへのflat加算、実数値/100=%単位)で実装済み: フロストメイジ/ゲイルランサー/
ヴァーダントオラクル(威咲型は森属性ボーナス+バリア強度の両方、森癒型は回復力)/
ディバインアーチャー(鷹弓型)/ツインストライカー(炎舞型)/ヘヴィガーディアン
(剛身型のバリア強度)/シールドファイター(光砕型・光盾型の全属性耐性、新設した
`allAttrResistBonus` StatId経由)。

ツインストライカー双炎型の「物理攻撃力+0.2%」は、対象(atk)が%ではなく実数値そのものの
ステータスのためflat加算方式では表現できず、代わりに同ファイルの`MASTERY_FINAL_PCT_EFFECTS`
(最終値への乗算ボーナス、`imagFinalPct`/`ipct('atk')`と同じ仕組み)で実装している
(2026-07-31修正。当初「対応StatIdなし」と誤判定して見送られていたが、`atk`自体は
`StatId`として存在するため、乗算方式を新設して対応した)。

以下は対応する加算経路・UIが未整備なため意図的に見送っている(2026-07確認、必要になれば
別途対応):
- レジストダメージ軽減(ヘヴィガーディアン剛守型): 現状`resistDamageReductionPercent`が
  `FIXED_BASE_PERCENT`の固定30%のみで、実数値からの加算経路自体が存在しない
  (4章「レジストダメージ軽減」参照)。器用さ変換のためだけにこの基盤を新設するのは
  過剰投資と判断。
- 特定スキルのダメージ%・リソース獲得効率(ストームブレイド雷刃型/月影型、ツイン
  ストライカー双炎型のリキャスト加速、ディバインアーチャー狼弓型、シールドファイター
  光砕型/光盾型のもう一方の効果、ビートパフォーマー狂音型/響奏型): 対象スキル固有の効果で
  対応するStatIdがそもそも存在せず、「ステータス」としては表現できない。StatsDetailDialogには
  表示しない方針。

### 万能(系列B, base0%)

- `万能% = 100×実数値/(実数値+K_B)`
- ダメージ・回復量・バリア付与量を `万能%×0.35` だけ増加。
- 被ダメージを `万能%×0.15` だけ軽減。
- **他のすべての効果と乗算**で計算される特殊なステータス(系列Aの幸運増強・属性ボーナス等は
  加算合算後に乗算なのに対し、万能はステータス自体が常に乗算項として独立に効く)。

### レジスト(系列A, base0%)

- `レジスト% = 100×実数値/(実数値+K_A)` = 物理ダメージ被弾時にレジストが発生する確率
  (一部クラスは魔法ダメージもレジスト可能になる効果を持つ場合がある)。
- レジスト発生時は「レジストダメージ軽減」(基礎30%、生存ステータス章)分だけ被ダメージを軽減。

## 3. 攻撃ステータス

### メインステータス(筋力/知力/敏捷)

クラスに応じていずれか1つが「メインステータス」として表示される
(`docs/CHARACTER_DATA_MODEL.md` の `StrOrIntOrDexShow` に対応)。

| 元ステータス | 基礎効果(全クラス共通) | クラス限定の追加効果                                                                                                                                                    |
| ------------ | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 筋力         | 物理防御力+0.2/pt      | 物理攻撃力系クラスは+0.6/pt(物理攻撃力)。R1アビリティ込みでゲイルランサー/ツインストライカーは+0.125/pt追加(計0.725)、ヘヴィガーディアン/シールドファイターはR1で物理防御力+1.2/pt追加 |
| 知力         | 魔法防御力+0.5/pt      | 魔法攻撃力系クラス(フロストメイジ/ヴァーダントオラクル/ビートパフォーマー)は別途+0.5/pt(魔法攻撃力)。R1込みで+0.1/pt追加(計0.6)                                             |
| 敏捷         | ファスト+0.8/pt        | ストームブレイドは+0.6/pt(物理攻撃力、R1込みで+0.125/pt追加→計0.725)。ディバインアーチャーは+0.58/pt(物理攻撃力)、R1「敏捷変換」でファスト側の変換率に+0.7/pt追加(計1.5)。ディバインアーチャーR1「迅射」は別枠の攻撃速度直接加算(下記ファスト章を参照)                   |

> `敏捷`の基礎変換率(ファスト+0.8/pt)は全クラス共通で、ゲーム内実測により確定した値
> (`COMMON_STAT_COEFFICIENTS.hastePerAgilityPoint`)。旧Wiki記載値は0.45/ptだったが、
> S3では実態と合わなくなっていたため補正済み。R1アビリティによる追加分(筋力/敏捷/知力の
> 変換率ボーナス)は`talent-tree.json`(ZTable `TalentTable`由来、現行=S3)の
> type=4(`TALENT_EFFECT_TYPE_CONVERSION_RATE`)効果から直接取得できる値で、シーズンが
> 進んだ場合は`npm run extract:ztable`の再実行で自動的に最新シーズンの値に更新される。
>
> `知力`の基礎変換率(魔法防御力+0.5/pt)も同様にゲーム内実測により確定した値
> (`COMMON_STAT_COEFFICIENTS.magicalDefPerIntellectPoint`)。旧値0.2/ptは
> `physicalDefPerStrengthPoint`との対称性からの未検証の推測値だったが、2026-08-09の
> 不具合報告(知力6435→魔法防御力3217、6959→3475、7465→3732の3点、傾き0.5)により誤りと
> 判明し補正した。ZTable(`FightAttrTable`の`AttrMDefense`(11360)の`AttrAdd`=11362等)を
> 確認したが、筋力/知力→防御力の変換率そのものを表すテーブル項目は見つからず(`敏捷`→
> `ファスト`と同じく、クライアント内部ロジックに直書きされている可能性が高い)、`敏捷`と
> 同様に実測値を直接定数化する方針とした。
>
> **メインステータス→攻撃力/ファスト等の変換は、基礎係数とR1アビリティ係数を別々に整数へ
> 切り捨ててから加算する**(2026-08-06不具合報告で複数ビルドの実測値と照合して判明。例:
> 知力2249の場合、基礎0.5/ptとR1ボーナス0.1/ptを先に合算した0.6/ptで一度だけ乗算すると
> `floor(2249×0.6)=1349`になるが、ゲーム内実測は`floor(2249×0.5)+floor(2249×0.1)=1124+224=1348`
> だった。ファスト実数(俊敏→ファスト)も同型: `floor(546×0.8)=436`。実装は
> `deriveStats.ts`の`convertBySeparatelyTruncatedRates()`。会心/幸運/器用さ/万能や
> 筋力/知力/敏捷自体もゲーム内は常に整数(小数点以下切り捨て)で扱われるため、
> `calculateRawStats.ts`の`INTEGER_TRUNCATED_STAT_IDS`で対象StatIdを整数切り捨てにしている
> (未検証の耐久力/防御力/属性系等は従来通り小数点2桁切り捨てのまま)。

R1アビリティを取得済みの前提でまとめた「攻撃力上昇量」表(攻撃ステータス毎の攻撃力への変換効率):

| クラス               | 攻撃力上昇量 |
| -------------------- | ------------ |
| ゲイルランサー       | 筋力×0.725   |
| ヘヴィガーディアン   | 筋力×0.6     |
| シールドファイター   | 筋力×0.6     |
| フロストメイジ       | 知力×0.6     |
| ヴァーダントオラクル | 知力×0.6     |
| ビートパフォーマー   | 知力×0.6     |
| ストームブレイド     | 敏捷×0.725   |
| ディバインアーチャー | 敏捷×0.58    |

### 物理攻撃力・魔法攻撃力

- スキルダメージ/回復の基礎値。武器攻撃力・モジュール・装備オプション等でも増加する。
- 対象の防御力(物理/魔法防御力)で割合減衰した後にスキル倍率が乗算される:
  `(攻撃力×防御による減衰) × スキル倍率 + α = 最終ダメージ`
- (参考、エネミー側の防御力依存の目安。自キャラのビルド計算には直接関係しない):
  物理は約30%減、魔法は約8%減で計算されることが多いとの記載。
- 表示される最終値はゲーム内では常に整数(小数点以下切り捨て)。2026-08-06にて
  `applyFinalStatModifiers`の切り捨てを小数点2桁(`truncate2`)から整数(`truncateInt`)へ修正済み。

### 精錬物攻・精錬魔攻

- 防御力による減衰の**後**に加算される攻撃力:
  `{(攻撃力×防御による減衰) + 精錬攻撃力} × スキル倍率 + α = 最終ダメージ`
- 全属性攻撃力・属性攻撃力も「精錬攻撃力と同じ扱い(=ここに加算)」と明記されている。

### 物理増強・魔法増強(系列C, base0%)

- `増強% = 100×増強強度/(増強強度+K_C)`
- 与える物理/魔法ダメージ量と回復量を増加させる。
- シーズンごとの `K_C` (ZTable `FightAttrTranTable.PhyPowerToDam`等で確定済み):

  | シーズン  | K_C   |
  | --------- | ----- |
  | S1        | 4457  |
  | S2        | 6487  |
  | S3 (現行) | 11000 |

  現在の実装(`seasonConstants.ts`)はS3の値(11000)を採用している。

### 攻撃速度・詠唱速度

- 攻撃速度100%でスキルの発動時間が半分(理論上DPS2倍)。詠唱を持つスキルには影響しない。
  究極スキル等、固定モーションのスキルは対象外。
- 詠唱速度100%で詠唱を持つスキルの発動/間隔が半分。詠唱がないスキルには影響しない。
- レイドセット効果のうち、ゲーム内の戦闘状態(スタック数・対象の残りHP等)ではなく現在の
  攻撃速度%の閾値だけで反映先が決まる条件付き効果は`stats/suitEffects.ts`で実装している
  (例: S2セット ストームブレイド月影型2点セット、buffId 2401260「攻撃速度が80%未満の場合、
  攻撃速度+6%。80%以上の場合、マスタリースキルの雷属性ダメージ+7%」)。後段の閾値以上の
  分岐(スキル固有ダメージ%)は対応するStatIdがなく対象外(器用さ章「以下は対応する加算経路・
  UIが未整備なため意図的に見送っている」と同じ理由)。suits.json全体を確認したが、同様に
  「現在ステータスの閾値で自己完結して分岐する」効果は他になし(光盾障壁のスタック数・対象の
  HP依存等はゲーム内の戦闘状態依存のため対象外)。

### 会心ダメージ

- 基礎50%。会心発生時のダメージ増加倍率(会心率とは独立したステータス)。

### 幸運の一撃ダメージ倍率

- 「幸運」の章を参照(`40% + 0.25×幸運%`。クラス別アビリティボーナス等の詳細も同章に記載)。

## 4. 生存ステータス

### 物理防御力・魔法防御力(系列D)

- `軽減% = 100×防御力/(防御力+K_D)`
- 例: 防御力1000なら `1000/(1000+9980)=9.1%` 軽減。

### 精錬防御力(系列D、物理/魔法防御力とは別枠)

- `軽減% = 100×精錬防御力/(精錬防御力+K_D)`
- 物理/魔法防御力の軽減とは**別に計算され、被ダメージに乗算**される(2段階の軽減)。

### 物理軽減・魔法軽減

- %軽減ステータス。他の軽減要素(防御力由来の軽減等)とは乗算で適用される。

### レジストダメージ軽減

- 基礎30%。レジスト発生時の被ダメージ軽減率。一部クラス(ヘヴィガーディアン等)は基礎値が増加する。
  ヘヴィガーディアンR2アビリティにattrId 12542(type=1平坦加算)の該当効果が存在するが、
  `resistDamageReductionPercent`は現状常に基礎30%固定(`FIXED_BASE_PERCENT.resistDamageReduction`)
  で加算元のrawStatsが未実装のため、この分だけ計算に反映されていない(要対応)。

### 対ボスダメージ軽減

- ヘヴィガーディアンR2アビリティ「精鋭の牙」(talentId 924)で確認。実数値/100=%の規約
  (5章参照)。ボス種別敵に対する被ダメージ軽減。対ボスダメージボーナス(攻撃側、5章)とは
  別のattrId(12642)。

## 5. 支援ステータス

| ステータス             | 内容                                                                                |
| ---------------------- | ------------------------------------------------------------------------------------ |
| 会心回復               | 回復時に会心が発生した場合の回復量増加(基礎50%、会心と同じ発生確率の仕組みを使う)   |
| 幸運の一撃回復の倍率   | 幸運の一撃発生時に追加で発生する回復の倍率(幸運の一撃と同じ発生確率の仕組み)        |
| 回復力                 | 与える回復量の増加                                                                  |
| 被回復力               | 受ける回復量の増加                                                                  |
| バリア強度             | 付与するバリア量の増加                                                              |
| 被バリア強度           | 受けるバリア量の増加(最大HPの100%が上限という未確証の記載あり)。効果ソースがゲームデータ上に見つかっておらず、現状常に0固定 |
| ブレイク効率           | エネミーのブレイクゲージへの効果増加(伝説刻印のみで確認、装備以外のソース未確認)     |
| 対ボスダメージボーナス | ボス種別敵への与ダメージ増加(伝説刻印のみで確認、装備以外のソース未確認)           |

会心ダメージ/会心回復/回復力/被回復力/バリア強度/ブレイク効率/対ボスダメージボーナスは
いずれも収益逓減カーブ(1章)を経由しない、実数値がそのまま`実数値/100 = %`となる
ステータス(装備の`EquipAttrLibTable`で`isPercent: true`のもの)。装備の伝説刻印(単体
選択枠・4枠選択式レアステータス)・固定進化ステータス・アビリティ(type=3)・潜在因子の
いずれから加算されても同じ変換規則が適用されるため、rawStatsに実数値のまま合算してから
表示直前に`/100`する実装になっている(`attrMaps.ts`の`EVO_PCT_ATTR_TO_STAT`/
`LEGENDARY_AFFIX_FLAT_STAT`等を参照)。

## 6. 属性攻撃力・属性ボーナス・属性軽減

- **全属性攻撃力・属性攻撃力**: 精錬攻撃力と同じ扱いで加算される、防御力を無視する追加攻撃力。
- **属性強度→属性ボーナス**(系列C): `属性ボーナス% = 100×属性強度/(属性強度+K_C)`。
  すべての属性ボーナス系効果を加算後、合計ダメージに乗算。
- **属性耐性→属性軽減**(系列C): `属性軽減% = 100×属性耐性/(属性耐性+K_C)`。
  すべての属性軽減系効果を加算後、合計ダメージに乗算。
- **属性ボーナスへの直接加算**(火/氷/森/雷/風/岩/光、attrId 13112〜13172): 蒼海武器の
  4枠選択式レアステータス・一部装備の固定進化ステータスで確認。系列Cの収益逓減カーブを
  経由せず、5章と同じ「実数値/100=%」規約でそのまま属性ボーナス%に加算される
  (`ELEMENT_BONUS_STAT`、実装は`StatsDetailDialog.tsx`側で属性強度由来の%と合算)。
  闇属性のみ対応するAttrIdがゲームデータ上に見つかっていない。

## 7. その他

### 最大スタミナ

- 基礎1200ST。

| 行動            | 消費量   |
| --------------- | -------- |
| ダッシュ        | 120ST/秒 |
| ジャンプ(1段)   | なし     |
| ジャンプ(2段目) | 50ST     |
| 回避            | 150ST/回 |
| ジャスト回避    | 120ST/回 |

### 戦闘時のスタミナ回復率(1秒あたり)

メインステータスの種別に依存:

| クラス                                                     | 秒間回復量(ST) |
| ---------------------------------------------------------- | -------------- |
| ゲイルランサー / ヘヴィガーディアン / シールドファイター   | 160            |
| フロストメイジ / ヴァーダントオラクル / ビートパフォーマー | 240            |
| ストームブレイド / ディバインアーチャー                    | 185            |

### 移動速度

- 伝説刻印(単体選択枠、脚部のみ確認)由来の実数値加算のみ確認済み。装備の
  `EquipAttrLibTable`上は`isPercent: false`(%表示ではない)で、他の武器/アクセサリ側
  刻印のような「実数値/100=%」規則が成立する裏付けが見つかっていないため、
  現状は実数値をそのまま表示している(実機での換算式確認が今後の課題)。

## 8. 実装方針(検討)

### 8.1 現状のデータモデルとのギャップ(執筆時点のスナップショット。現在の実装状況は8.6を参照)

`src/build-planner/types.ts` の `StatId` は現在以下のみ:
`maxHp, atk, matk, strength, agility, intellect, endurance, illusionPower, crit, haste,
luck, mastery, versatility, resist`

上記の計算式を再現するには、最低限以下が**現状のモデルに存在しない**ため追加が必要:

- 物理防御力 / 魔法防御力(`strength`/`intellect` から導出される値。装備からも直接加算され得る)
- 精錬物攻 / 精錬魔攻 / 精錬防御力(装備の「精錬レベル」由来。`SlotRefineLevels` と連動)
- 会心ダメージ(`crit` とは独立した別ステータス、基礎50%)
- 会心回復(基礎50%、上と別軸)
- 幸運の一撃ダメージ倍率の元になる「幸運の一撃基礎倍率(40%)」(`luck` から導出)
- 物理増強 / 魔法増強(系列C、与ダメージ%)
- 属性強度 / 属性耐性 / 属性ボーナス / 属性軽減(属性ごと、または全属性版)
- 回復力 / 被回復力 / バリア強度 / 被バリア強度
- 攻撃速度 / 詠唱速度(`haste` から**クラス係数で**導出される派生値であり、`haste` 自体ではない)

→ `StatId` は「装備等から直接加算される実数値ステータス」と「そこから導出される%/最終ステータス」を
分けて持つべきで、後者は専用の派生ステータス型(例: `DerivedStats`)に分離するのが良い。
画面表示は「実数値」と「変換後%」の両方を出す場面が多い(Wikiのグラフタブもこの形式)ため、
表示用には両方を保持して問題ない。

### 8.2 計算パイプラインの分離

1. **実数値合算層**(現状の `store/derivedSelectors.ts`(`computeStatsBundle`)の `stats` が
   ここに該当): ベース値 + 装備の
   `statBonuses` を `StatId` ごとに加算するだけ。将来モジュール/バフ等もここに合流させる。
2. **%変換層**: 1.の実数値のうち、会心・幸運・器用さ・ファスト・レジスト・万能・増強・属性強度/耐性・
   防御力を、上記「系列A/B/C/D」の共通関数で%に変換する。式は1つの純粋関数に共通化できる:

   ```ts
   function diminishingPercent(real: number, k: number, basePercent = 0): number {
     return basePercent + 100 * (real / (real + k));
   }
   ```

   系列ごとの `k`/`basePercent` は後述の「シーズン定数」から注入する。

3. **クラス派生層**: メインステータス(筋力/知力/敏捷)→物理/魔法攻撃力・対応防御力、
   ファスト%→攻撃速度%/詠唱速度%、器用さ%→クラス×型固有効果、といった
   **クラスごとに係数が異なる変換**をここで行う。係数テーブルは `src/data/classes.json`
   (ZTable由来)には存在しない値(Wiki/コミュニティ計算値)なので、別途
   `src/build-planner/stats/classCombatProfile.ts` 的なハンドメイドテーブルとして持つ必要がある。
   - R1アビリティ込みの係数とベース係数は**別フィールドで保持**し、アビリティ選択状態と
     連動して切り替えられるようにする(例: `{ base: 0.6, withR1Ability: 0.725 }`)。
4. **最終ダメージ合成層**(将来、DPS計算等を作る場合): 攻撃力×防御減衰+精錬攻撃力、という
   形の式を組み立てる層。今回のステータス画面表示のスコープでは未着手でも良いが、
   会心/幸運の一撃/万能/属性ボーナス等は「加算合算してから乗算」という合成順序を
   壊さないように設計しておく必要がある。

### 8.3 シーズン定数の外部化(実装済み・当初計画から変更)

Wikiが「この定数はシーズン変更時に変更される」と明記している値(例: S2時点で`K_A=19972`,
`K_B=11200`, `K_C=6487`, `K_D=9980`)は、コード中に直接埋め込まず、設定オブジェクトとして
1か所にまとめる方針とした(`src/build-planner/stats/seasonConstants.ts`)。

当初は「シーズンが進んだらこのファイルを手動更新する」想定だったが、実際には
`scripts/extract-ztable.mjs` の `extractSeasonConstants()` がZTableの `FightAttrTranTable.json`
(Id=1/2/3がS1/S2/S3に対応)から**現在の最大Id(=現行シーズン)の係数を機械的に抽出**し、
`src/data/season-constants.json` に出力する形で実装されている。そのため `npm run extract:ztable`
を再実行するだけでシーズン更新に追従でき、`seasonConstants.ts` 自体を手動編集する必要はない
(現行値はS3の `diminishingA=50000`/`diminishingVersatility=28000`/`diminishingEnhance=11000`)。
ただし各ステータスの base%(`DIMINISHING_A_BASE_PERCENT`)はZTableに存在しない値のため、
引き続き手動管理・実測確認が必要(前述のファストbase%補正はこの手動管理部分の一例)。

### 8.4 未確定・要検証事項

- 回復力/被回復力/バリア強度/ブレイク効率/対ボスダメージボーナスは系列Cの収益逓減カーブ
  ではなく、装備の`EquipAttrLibTable`(`isPercent`フラグ)から実数値そのまま`/100`で%になる
  ことが確認できた(5章参照)。属性ボーナス/属性軽減は系列Cの収益逓減カーブで確定・実装済み
  (6章参照)。被バリア強度は対応するAttrIdの効果ソースがゲームデータ上に見つかっておらず、
  移動速度(`isPercent: false`)は%換算の裏付けが取れておらず、いずれも未確認のまま。
- 万能のシーズン1→2での定数比(2500→11200、4.48倍)が他系列(4457→19972、4.48倍)と
  ほぼ同じ比率である点は興味深いが、別系列として扱われている(別の基準値からの再計算と思われる)。
- 装備のサブステータス・特別オプションの数値解決(`EquipAttrLibTable`)は
  `docs/CHARACTER_DATA_MODEL.md` 側で別途要調査として記録済み。今回の計算式とは別軸の課題。
- 敵防御力依存のダメージ減衰(物理約30%/魔法約8%)はビルドプランナーが「自分のビルドの
  ステータスのみ」を見せる用途であれば不要(最終ダメージシミュレーションを作る場合のみ必要)。
- 以下のAttrId(いずれもtype=1平坦効果、`TalentTable`上には存在)は装備・潜在因子・
  モジュール・アビリティのいずれの実データにも一切出現せず、対応する`TalentTreeTable`の
  ノードも存在しない(=どのクラスのツリーにも配置されていない、選択不可能な死んだデータ)
  ことを確認済み: `11762`(スキルリキャスト短縮)/`11842`(万能増強)/`11852`(万能軽減)/
  `11862`(スマッシュ強度)/`11872`(スマッシュダメージボーナス)/`11882`(抑圧ダメージ)/
  `11892`(抑圧ダメージ軽減)/`11902`(鼓舞比率)/`12542`(レジストダメージ軽減)/
  `12662`(バリアの受けるダメージ軽減)。実装しても検証不能なため対応を見送っている
  (ZTable更新でいずれかのクラスツリーに実際に配置されるようになった場合は再調査)。

### 8.5 推奨する着手順序

1. `StatId`/表示まわりは大きく変えず、まず「%変換が必要な既存ステータス(crit/haste/luck/
   mastery/versatility/resist)」を `diminishingPercent` で正しく%表示するようにする
   (現状は実数値をそのまま%として表示しているため、ここが最も実態とズレている)。
2. 物理/魔法防御力・精錬攻撃力・精錬防御力など、不足している派生ステータスを `StatId` または
   別の `DerivedStats` 型に追加する。
3. クラス係数テーブル(メインステータス→攻撃力/防御力、ファスト→攻撃速度/詠唱速度)を導入し、
   クラス選択と連動させる。
4. 器用さのクラス×型固有効果、属性ボーナス/軽減などの「個別系統」は、汎用ダメージ計算とは
   別の効果リストとして後回しで良い。

### 8.6 実装状況

1〜3はコードに反映済み。「クラス(職業)の識別・ZTable側IDとの対応・ステータス計算用係数」は、
1つの `Profession` 構造体の属性としてまとめて持つ設計にしている
(`"class"` は言語予約語と紛らわしいため、`ClassId`ではなく`ProfessionKey`/`Profession`の語を使う)。

- `src/build-planner/profession.ts`: クラス定義の単一の置き場所。
  - `ProfessionKey`: アプリ内でクラスを一意に識別する文字列キー。
  - `Profession`: 1クラス分のデータ構造体。`professionId`(ZTable側ID)・`mainStat`/
    `attackType`(メインステータス種別・攻撃種別)・`atkPerMainStatPoint`/
    `hpPerEndurancePoint`/`atkSpeedPerHastePercent`/`castSpeedPerHastePercent`
    (ステータス計算用係数、いずれもR1アビリティ抜きの基礎値)を属性として持つ。
  - `PROFESSIONS: Record<ProfessionKey, Profession>`: 9クラス分の定義データ(シーズン3で
    `twinStriker` を追加)。`professionId`/`attackType`/`mainStat` は、`game-data.json` の
    `classes[id].name`(実名)と `src/data/classes.json` の `attackShow`/`strOrIntOrDexShow` を
    突き合わせて確認済み(対応表はファイル内のコメントを参照)。ただし `twinStriker` の
    ステータス計算係数(`atkPerMainStatPoint`等)はゲーム内確認が未了で、近縁クラスの値を
    暫定採用しているのみ(`profession.ts` の `TODO(シーズン3)` コメント参照)。
  - `getProfessionByProfessionId(professionId)`: 逆引き用ヘルパー(`PROFESSIONS` から
    その場で導出するだけで、別途手動管理のテーブルは持たない)。
- `src/build-planner/stats/commonCoefficients.ts`: クラスに関わらず適用される共通係数
  (筋力→物理防御力0.2、知力→魔法防御力0.2、敏捷→ファスト0.8。敏捷の値は3章の実測補正
  (0.45→0.8)を反映済みの現行値)。
- `src/build-planner/stats/deriveStats.ts`: `deriveStats(raw, profession)` という形で
  `Profession` を直接受け取る純粋関数に変更し、`DerivedStats`(maxHp/physicalAtk/
  magicalAtk/physicalDef/magicalDef/各%ステータス)を計算する。
- (旧記述、現在はクラス選択UIと連動済み)当初は `professionKey` を
  `DEFAULT_PROFESSION_KEY`(装備モックの楽器テーマに合わせ`"beatPerformer"`)に固定し、
  `profession = PROFESSIONS[professionKey]` を `deriveStats` にそのまま渡すだけの
  実装だった。現在は `store/planSlice.ts` の `professionKey` 状態と
  `ProfessionPicker` UIが連動しており、`game-data.json` をi18nリソースとして
  読み込んでクラス名をUIに表示する実装も完了している。

R1アビリティ取得状態との連動(メインステータス→攻撃力/物理防御力/ファストの変換率ボーナス)は
実装済み: `talent-tree.json`上でtype=4のeffect(`[4, 元ステータス種別, attrId, rateX10000]`)
として既にデータ化されており、`calculateRawStats.ts`のアビリティ効果ループがこれを解釈して
`conversionRateBonus`を算出、`deriveStats.ts`の第3引数として渡している(`profession.ts`側に
ノードID/レートをハードコードする必要はない)。

精錬物攻/精錬魔攻/精錬防御力(`refinePhysAtk`/`refineMagAtk`/`refineDef`)は`refine.json`
(精錬レベル別の累積効果)由来で実装済み(`calculateRawStats.ts`)。全属性攻撃力/属性攻撃力
(`allAttrAtk`/各属性Atk)も精錬攻撃力と同枠の加算として実装済み。

属性ボーナス/属性軽減(系列Cの収益逓減カーブ)、回復力/被回復力/バリア強度/ブレイク効率/
対ボスダメージボーナス/対ボスダメージ軽減(実数値/100=%、5章参照)、属性ボーナスへの
7属性分の直接加算(実数値/100=%、6章参照)は実装済み。

器用さのクラス×型固有効果のうち、既存StatId、または新規に切った直接加算StatId(属性ボーナス/
バリア強度/回復力/全属性耐性)で表現できる分(フロストメイジ/ゲイルランサー/ヴァーダント
オラクル(威咲型・森癒型)/ディバインアーチャー(鷹弓型)/ツインストライカー(炎舞型)/
ヘヴィガーディアン(剛身型)/シールドファイター(光砕型・光盾型))は`stats/masteryElementBonus.ts`
の`MASTERY_STAT_EFFECTS`で実装済み(3章「器用さ」表参照)。ツインストライカー双炎型の
物理攻撃力+0.2%/ptは対象が実数値ステータス(atk)のためflat加算では表現できず、同ファイルの
`MASTERY_FINAL_PCT_EFFECTS`(最終値への乗算ボーナス)で別途実装している。未着手(意図的に
見送り、3章の表参照): レジストダメージ軽減(加算経路自体が未整備)/特定スキルのダメージ%・
リソース獲得効率(対応するStatId自体が存在しない)。被バリア強度は対応する効果ソースが
ゲームデータ上に見つかっておらず、移動速度は%換算の裏付けがないため実数値のまま。
レジストダメージ軽減等10件のAttrIdはどのクラスのツリーにも配置されていない死んだデータのため
対応を見送っている(いずれも8.4参照)。


---
## 6. ข้อมูลที่สกัดได้จากไฟล์ `07_loader` & `08_sr-texts-en_US` ของ Maxroll

- **จำนวนข้อความภาษาอังกฤษที่ดึงได้จาก `08_sr-texts-en_US`:** `52,307` รายการ

- **รายชื่อตารางข้อมูลที่พบใน `07_loader`:** `['ReactCurrentBatchConfig', 'clipboardData', 'loadedData', 'mutableSourceEagerHydrationData', 'rendererConfig', 'characterData', 'getData', 'setData', 'deleteData', 'insertData', 'useStoreData', 'emitNamedEntityData', 'initialConfig', 'userAgentData', 'positionData', 'svgData', 'katexImagesData', 'htmlData', 'onOpenEmbedModalForConfig', 'cellEditorConfig', 'toolbarConfig', 'modifiersData', 'gameData', 'navigationData', 'entityData', 'FormData', 'Manager__profilesTable', 'personalPageConfig', 'authorData', 'processedData', 'getConfig', 'pageData', 'seoData', 'aoyiData', 'awaitData', 'itemData', 'slotData', 'plannerData', 'setPlannerData', 'hideData']`

### ตัวอย่างข้อความภาษาอังกฤษ 50 รายการแรก:
```json

{
  "3422010": "Total DMG",
  "3422011": "{*skillpara.damageMerge({116160102},{2},",
  "3423099": "Charge Time",
  "3806524": "Total DMG",
  "3806525": "{*skillpara.damageMerge({117170101},{1},",
  "3807613": "CD",
  "19634378": "Total DMG",
  "19634379": "{*skillpara.damageMerge({139340103,139340104,139340105},{1,1,1},",
  "19635467": "Target",
  "19636556": "CD",
  "22113495": "Absorb Damage",
  "22114584": "Duration",
  "22115673": "CD",
  "22613763": "Homestead EXP",
  "22613764": "Homestead Supplies",
  "25044516": "Resonates with the power from Elite Muku Warrior. Leaps forward to launch a powerful attack, dealing area <style=",
  "25048839": "Resonates with the power from Boss Frost Ogre. Swings a frost hammer to attack enemies in a spin, dealing <style=",
  "25150149": "Resonates with the power from Elite Scout Muku. Continuously pursues the target, dealing <style=",
  "25193709": "Resonates with the power from Boss Spider King. Transforms into a cocoon. After a short delay, the cocoon bursts, dealing <style=",
  "25262316": "Resonates with the power from Elite Flame Goblin Mage, summoning meteors to fall from the sky, dealing <style=",
  "25262317": "Resonates with the power from Elite storm Goblin Giant Axe, and continuously unleashes Whirlwind Strike, dealing <style=",
  "26158563": "Resonates with the power from Elite Murloc Warrior, after a short chant, deals <style=",
  "35646890": "Enhanced <linktext=1501><style=",
  "35649068": "Deals <style=",
  "35649069": "Consumes <style=",
  "35651246": "Consumes <style=",
  "35677381": "Consumes <style=",
  "35678471": "Consumes <style=",
  "35955999": "Total DMG",
  "35956e3": "{*skillpara.damageMerge({111012040101},{1},",
  "35957088": "CD",
  "37002396": "DMG per hit",
  "37002397": "{*skillpara.damageMerge({25541203},{1},",
  "37003485": "CD",
  "38027515": "Total DMG",
  "38027516": "{*skillpara.damageMerge({119220102},{1},",
  "38028604": "Basic Shield Amount",
  "38028605": "{*skillpara.effect(",
  "38029693": "Extra Shield Amount",
  "38029694": "{*skillpara.effect(",
  "43645524": "Total DMG",
  "43645525": "{*skillpara.damageMerge({114210102,114210103},{1,6},",
  "43646613": "CD",
  "50844900": "Total DMG",
  "50844901": "{*skillpara.damageMerge({111022050102},{2},",
  "50845989": "Haste bonus",
  "50847078": "Duration",
  "50847079": "20s",
  "50848167": "CD",
  "52916416": "Total DMG"
}

```
