/* 站点增量条目：与版本化主数据分离，避免修改 data/docs.v*.js。 */
/* 新条目使用真实主题分类；通过校验后再合并到下一版 docs.v*.js。 */
const SITE_DOC_ADDITIONS = [
  {
    t: "LTX-2.5 LoRA 生态指南：官方 14 项、社区 21 项与测试路线",
    file: "articles/ltx25-lora-ecosystem.html",
    cat: "ai-video",
    date: "2026-10-16",
    d: "一页看懂 LTX-2.5 22B 的修复、VFX、控制与音频 LoRA，含 SepGen 区别和四项优先测试方案"
  }
];
