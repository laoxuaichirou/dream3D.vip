/* 站点增量条目：与版本化主数据分离，避免修改 data/docs.v*.js。 */
/* briefing 条目按日期倒序维护（最新的排最前），与 docs.v*.js 约定一致。 */
const SITE_DOC_ADDITIONS = [
  {
    t: "Qwen Image 2.1 实测信息简报",
    file: "articles/qwen-image-2-1-report.html",
    cat: "briefing",
    date: "09-23",
    d: "社区六问逐项实测：I2I PE 12.83s 出合法 JSON、1→5 图耗时 48s→394s、Mask 编辑/画风迁移/透明抠图最稳、改机位与保留包装中文仍不可靠"
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
    d: "本机 RTX 4070 Ti SUPER 多轮运行记录：提示词增强器提速验证、多图生成耗时曲线、编辑能力对比（含成功与失败样例），附三套方案选型建议"
  }
];
