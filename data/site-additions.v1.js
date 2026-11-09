/* 站点增量条目：与版本化主数据分离，避免修改 data/docs.v*.js。 */
/* 新条目使用真实主题分类；通过校验后再合并到下一版 docs.v*.js。 */
const SITE_DOC_ADDITIONS = [
{ t:"硅基流动模型比价与场景选择", file:"articles/siliconflow-pricing.html", cat:"ai-coding", date:"2026-11-09", d:"GLM-5.3-Flash vs DeepSeek-V4.1-Flash 等四款模型价格、缓存价与场景选型" },
  {
    t: "国家超算互联网 11.11 薅羊毛攻略：0.1 元 5000 万 Tokens（2026-11-06 口径）",
    file: "articles/scnet-1111.html",
    cat: "briefing",
    date: "2026-11-06",
    d: "新用户 0.1 元秒杀 5000 万 Tokens 量包（GLM-5.3-Flash / DeepSeek-V4.1-Flash-1017，1024K），另有 1 亿 Tokens 额度、MaaS 专场价目、Token Plan 折扣与领券/续费红线"
  },
  {
    t: "国家超算互联网 11.11 薅羊毛攻略：0.1 元 5000 万 Tokens（2026-11-06 口径）",
    file: "articles/scnet-1111.html",
    cat: "ai-coding",
    date: "2026-11-06",
    d: "新用户 0.1 元秒杀 5000 万 Tokens 量包（GLM-5.3-Flash / DeepSeek-V4.1-Flash-1017，1024K），另有 1 亿 Tokens 额度、MaaS 专场价目、Token Plan 折扣与领券/续费红线"
  },
  {
    t: "MiniMax H3 字幕问题实测：伪字幕与烧录字幕",
    file: "articles/h3-subtitle.html",
    cat: "ai-video",
    date: "2026-11-06",
    d: "H3 生成画面里冒字幕怎么处理：实测证明时间码/帧数/长否定清单是高风险结构、简洁自然语言句可消伪字、Character Swap 不是通用去字幕器，含 10 段对照小样"
  },
  {
    t: "火山方舟 API 价格速查：文本、生图、生视频（2026-11 口径）",
    file: "articles/volcengine-ark-pricing.html",
    cat: "briefing",
    date: "2026-11-06",
    d: "火山方舟 2026-11 官方价目整理：文本十二档、Seedream 生图、Seedance 2.5 与 2.0 视频价，含本机实测成本、包月折算与选型建议"
  },
  {
    t: "火山方舟 API 价格速查：文本、生图、生视频（2026-11 口径）",
    file: "articles/volcengine-ark-pricing.html",
    cat: "ai-video",
    date: "2026-11-06",
    d: "火山方舟 2026-11 官方价目整理：文本十二档、Seedream 生图、Seedance 2.5 与 2.0 视频价，含本机实测成本、包月折算与选型建议"
  },
  {
    t: "AI 订阅怎么花钱才不亏：平台政策与多执行器工作链",
    file: "articles/ai-subscription-workchain.html",
    cat: "briefing",
    date: "2026-11-06",
    d: "四家平台套餐对比、免费额度的真实口径、五条封号红线与本机多执行器工作链，附实测证据与待办清单"
  },
  {
    t: "AI 订阅怎么花钱才不亏：平台政策与多执行器工作链",
    file: "articles/ai-subscription-workchain.html",
    cat: "ai-coding",
    date: "2026-11-06",
    d: "四家平台套餐对比、免费额度的真实口径、五条封号红线与本机多执行器工作链，附实测证据与待办清单"
  },
  {
    t: "Hermes 配置优先级：先配什么，后配什么？",
    file: "articles/hermes-configuration-priorities.html",
    cat: "briefing",
    date: "2026-11-03",
    d: "从模型、安全和记忆到备份与扩展，梳理 Hermes 的配置顺序与三个常见风险"
  },
  {
    t: "Hermes 配置优先级：先配什么，后配什么？",
    file: "articles/hermes-configuration-priorities.html",
    cat: "ai-coding",
    date: "2026-11-03",
    d: "从模型、安全和记忆到备份与扩展，梳理 Hermes 的配置顺序与三个常见风险"
  },
  {
    t: "Hermes 自动巡航指南：10 个无人值守配置（已逐条核对）",
    file: "articles/hermes-autopilot.html",
    cat: "briefing",
    date: "2026-11-02",
    d: "把 Hermes 从聊天软件变成自动员工：网页监控、零模型费健康检查、降级链、多 Key 池、批量审批放行，全部命令在 v0.22.5 实测"
  },
  {
    t: "Hermes 自动巡航指南：10 个无人值守配置（已逐条核对）",
    file: "articles/hermes-autopilot.html",
    cat: "ai-coding",
    date: "2026-11-02",
    d: "把 Hermes 从聊天软件变成自动员工：网页监控、零模型费健康检查、降级链、多 Key 池、批量审批放行，全部命令在 v0.22.5 实测"
  },
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
