/* ================================================
   文档数据库 — 发新文章只需三步：
   1. 把文章 HTML 放进 articles/ 目录
   2. 在下面 DOC_DB 对应分类加一行
   3. 刷新页面即可，无需改任何其他文件
   t=标题 file=文件路径 cat=分类key d=一句话描述
   ================================================ */
const DOC_CATS = [
  {key:"comfyui",   name:"ComfyUI",  sub:"安装、更新、排错到进阶实战"},
  {key:"ai-image",  name:"AI 绘画",  sub:"提示词、放大与编辑模型"},
  {key:"ai-video",  name:"AI 视频",  sub:"Seedance 全系教程与测评"},
  {key:"ai-coding", name:"AI Coding", sub:"AI 编程工具与配置"},
  {key:"runninghub",name:"RunningHub", sub:"API 与平台进阶"},
  {key:"storyboard",name:"分镜镜头",  sub:"镜头语言与构图速查"},
  {key:"briefing", name:"信息简报",  sub:"要点速览与版本动态"},
  /* AI 视频 - 官方手册整理版 2026-08-07 */
  {t:"即梦 Seedance 2.5 使用手册", file:"articles/seedance25-manual.html", cat:"ai-video", d:"官方最新提示词方法论：真人8维公式/30s与超长视频五段式/5类转场模板/27个官方案例，含完整参数表"},
  {t:"即梦 Seedance 2.0 使用手册", file:"articles/seedance20-manual.html", cat:"ai-video", d:"四模态创作/9大能力实战案例（希区柯克变焦/一镜到底/情绪改写）/参数与交互形式"},
  {t:"MiniMax H3 模型使用手册", file:"articles/minimax-h3-manual.html", cat:"ai-video", d:"8大商用场景/3大精准编辑/提示词公式与镜头拆解，含核心参数（24FPS/12文件上限/7000字符）"},
  /* 信息简报 - 2026-08-07 */
  {t:"Seedance 2.5 手册信息简报", file:"articles/seedance25-manual.html", cat:"briefing", d:"2.5 全量上线：视频延长至60s/超长180s/时间戳控制/真人公式/转场模板/纯净无字幕BGM"},
  {t:"Seedance 2.0 手册信息简报", file:"articles/seedance20-manual.html", cat:"briefing", d:"2.0 四模态+参考万物：图9张/视频3段15s/时长4-15s/12文件上限/9大能力"},
  {t:"MiniMax H3 手册信息简报", file:"articles/minimax-h3-manual.html", cat:"briefing", d:"H3 开放通用多模态：24FPS原生双声道/首尾帧+全能参考/7000字符/音频不可单独输入"},
];

const DOC_DB = [
  /* ComfyUI */
  {t:"整合包下载说明（已拆分两个链接）", file:"articles/comfyui-download-notes.html", cat:"comfyui", d:"夸克分享被风控过滤后重新拆分：轻量整合包（不含模型）+ 模型自取文件夹，两个链接都要转存，密码见粉丝群公告"},
  {t:"Agent 时代 ComfyUI 部署指南", file:"articles/agent-comfyui-setup.html", cat:"comfyui", d:"说意图让 Agent 干活：3 个手动步骤 + Hermes 自动搞定，配套最新整合包"},
  {t:"ComfyUI 入门环境配置图文教程", file:"articles/comfyui-setup-guide.html", cat:"comfyui", d:"新手必看：下载、环境变量到启动全流程，31 张步骤配图"},
  {t:"ComfyUI 手册 01：数据流语法与强制转换", file:"articles/comfyui-manual-01.html", cat:"comfyui", d:"节点数据类型与转换规则"},
  {t:"ComfyUI 手册 02：工程维护指令集", file:"articles/comfyui-manual-02.html", cat:"comfyui", d:"工程目录与日常维护指令"},
  {t:"ComfyUI 手册 03：报错关键词翻译官", file:"articles/comfyui-manual-03.html", cat:"comfyui", d:"常见报错关键词对照速查"},
  {t:"ComfyUI 自学思路全框架", file:"articles/comfyui-self-learn.html", cat:"comfyui", d:"从入门到实战的自学路线"},
  {t:"ComfyUI 进阶自学思路", file:"articles/comfyui-advanced.html", cat:"comfyui", d:"进阶工作流学习框架"},
  {t:"ComfyUI 插件安装与更新（简化版）", file:"articles/comfyui-plugins-quick.html", cat:"comfyui", d:"即学即用的简化流程"},
  {t:"ComfyUI 主程序与自定义插件更新（严谨完整版）", file:"articles/comfyui-update-full.html", cat:"comfyui", d:"完整更新流程与避坑"},
  {t:"MiniMax H3 终极提示词指南", file:"articles/h3-prompt-guide.html", cat:"comfyui", d:"官方三字段/六字段语法 13 章完整版，含案例模板与翻车修复"},
  /* 信息简报 */
  {t:"H3 提示词指南 v1.2 信息简报", file:"articles/h3-prompt-guide.html", cat:"briefing", d:"H3 指南信息简报：30 秒版要点与改版记录"},
  /* AI 绘画 */
  {t:"GPT Image 2 提示词库", file:"gpt2-gallery.html", cat:"ai-image", d:"1000 条精选提示词图库"},
  {t:"WAN 2.7 Image 提示词示例", file:"articles/wan27-prompts.html", cat:"ai-image", d:"官方示例与写法参考"},
  {t:"传统放大模型详解", file:"articles/upscale-models.html", cat:"ai-image", d:"各放大模型特性与选择"},
  {t:"图像编辑模型使用场景的思考与总结", file:"articles/image-edit-models.html", cat:"ai-image", d:"编辑模型场景对比"},
  /* AI 视频 */
  {t:"即梦 Seedance 2.0 全面教学", file:"articles/seedance2-guide.html", cat:"ai-video", d:"多种玩法与合规技巧"},
  /* AI Coding */
  {t:"AI 编程工具安装与配置实操手册", file:"articles/ai-coding-setup.html", cat:"ai-coding", d:"主流工具一次配好"},
  {t:"Claude Code 完全指南", file:"claude-code-guide.html", cat:"ai-coding", d:"形态辨析、国内配置与概念词典"},
  {t:"Kimi Code 指令大全", file:"kimi-code-guide.html", cat:"ai-coding", d:"交互式指令教程"},
  {t:"Kimi Code / Hermes 防翻车+防失忆配置指南", file:"ai-constraint-guide.html", cat:"ai-coding", d:"SOUL.md 全局约束 + 记忆文档：让 AI 不偷懒、不编造、不忘事"},
  /* RunningHub */
  {t:"RunningHub API 教程", file:"articles/runninghub-api.html", cat:"runninghub", d:"API 调用全流程"},
  {t:"RunningHub API 新手入门教程", file:"articles/runninghub-api-beginner.html", cat:"runninghub", d:"零基础上手"},
  /* 分镜镜头 */
  {t:"151 种进阶语法", file:"151-grammar.html", cat:"storyboard", d:"AI 影视创作语法库"},
  {t:"25 种构图", file:"25-compositions.html", cat:"storyboard", d:"无限画布分镜模板"},
  {t:"60 种镜头语言", file:"60-shots.html", cat:"storyboard", d:"镜头类型速查表"},
];
