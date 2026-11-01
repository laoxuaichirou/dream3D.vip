/* 站点增量条目：与版本化主数据分离，避免修改 data/docs.v*.js。 */
/* 新条目使用真实主题分类；通过校验后再合并到下一版 docs.v*.js。 */
const SITE_DOC_ADDITIONS = [
  {
    t: "Grok Bot 产品与工程分析：能力、边界、价格与试用建议",
    file: "articles/grok-bot-analysis.html",
    cat: "briefing",
    date: "2026-11-02",
    d: "18 个来源拆解 Grok Bot：8 类能力、9 项局限与解法、订阅价格、资产导出边界与国内用户注意事项"
  },
  {
    t: "Grok Bot 产品与工程分析：能力、边界、价格与试用建议",
    file: "articles/grok-bot-analysis.html",
    cat: "ai-coding",
    date: "2026-11-02",
    d: "18 个来源拆解 Grok Bot：8 类能力、9 项局限与解法、订阅价格、资产导出边界与国内用户注意事项"
  },
  {
    t: "读懂 DeepSeek Superagent：工作原理、授权与真实边界",
    file: "articles/deepseek-superagent.html",
    cat: "briefing",
    date: "2026-11-01",
    d: "从官方文档与源码拆解 dsh-superagent：任务分工、授权机制、真实边界与小白使用门槛"
  },
  {
    t: "读懂 DeepSeek Superagent：工作原理、授权与真实边界",
    file: "articles/deepseek-superagent.html",
    cat: "ai-coding",
    date: "2026-11-01",
    d: "从官方文档与源码拆解 dsh-superagent：任务分工、授权机制、真实边界与小白使用门槛"
  },
  {
    t: "LTX-2.5 LoRA 生态指南：官方 14 项、社区 21 项与测试路线",
    file: "articles/ltx25-lora-ecosystem.html",
    cat: "ai-video",
    date: "2026-10-16",
    d: "一页看懂 LTX-2.5 22B 的修复、VFX、控制与音频 LoRA，含 SepGen 区别和四项优先测试方案"
  }
];
