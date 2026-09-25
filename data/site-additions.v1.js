/* 站点增量条目：与版本化主数据分离，避免修改 data/docs.v*.js。 */
/* briefing 条目按日期倒序维护（最新的排最前），与 docs.v*.js 约定一致。 */
const SITE_DOC_ADDITIONS = [
  {
    t: "Qwen Image 2.1 实测信息简报",
    file: "articles/qwen-image-2-1-report.html",
    cat: "briefing",
    date: "09-25",
    d: "第二轮补测（新增 38 张证据）：八问速答 + PE／Skill／混合三路线选型 + 商品四视图·海报·连续编辑案例；结论是没有一种提示词方案包打天下，按任务路由"
  },
  {
    t: "DeepSeek Harness：不只是 Agent，而是一套可组合的运行时",
    file: "articles/deepseek-harness-intro.html",
    cat: "briefing",
    date: "08-13",
    d: "DeepSeek Agent 执行栈速览：架构、核心能力、安全机制、适用场景与项目成熟度"
  },
  {
    t: "DeepSeek Harness：不只是 Agent，而是一套可组合的运行时",
    file: "articles/deepseek-harness-intro.html",
    cat: "ai-coding",
    d: "拆解 DeepSeek 可组合 Agent 运行时的架构、工具系统、安全边界与适用场景"
  },
  {
    t: "Qwen Image 2.1 深度实测：PE、速度与能力边界",
    file: "articles/qwen-image-2-1-report.html",
    cat: "ai-image",
    d: "本机 RTX 4070 Ti SUPER 多轮运行记录：PE 与 Skill 路由、多参考图职责划分、精确文字与连续编辑、商品资产初稿，新增 38 张重点证据（更新于 2026-09-25）"
  }
];
