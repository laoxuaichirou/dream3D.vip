/* ================================================
   视频数据库 — 加新视频只需在对应分类加一行
   bv=B站BV号 t=标题 cover/dur 抓取后自动生成
   ================================================ */
const VIDEO_CATS = [
  {key:"runninghub", name:"RunningHub", sub:"玩赚系列与会员体系"},
  {key:"ai-video", name:"AI 视频", sub:"Seedance 横评与实战"},
  {key:"ai-tools", name:"AI 工具与项目", sub:"自研工具、平台与模型实测"},
  {key:"comfyui", name:"ComfyUI", sub:"从安装到实战"},
  {key:"aipc", name:"AIPC 装机", sub:"硬件选购指南"},
  {key:"network", name:"网络自救", sub:"断网排错"},
];

const VIDEO_DB = [
  /* RunningHub */
  {bv:"BV1EeN86FEg3", t:"玩赚 RunningHub ①", cat:"runninghub", cover:"covers/BV1EeN86FEg3.jpg", dur:"7:31"},
  {bv:"BV1uQN86mEzF", t:"玩赚 RunningHub ②", cat:"runninghub", cover:"covers/BV1uQN86mEzF.jpg", dur:"21:44"},
  {bv:"BV1ntN86PE8f", t:"玩赚 RunningHub ③：部分收入大公开", cat:"runninghub", cover:"covers/BV1ntN86PE8f.jpg", dur:"4:43"},
  {bv:"BV18sNB6ME7k", t:"RHTV 教程 EP01", cat:"runninghub", cover:"covers/BV18sNB6ME7k.jpg", dur:"9:51"},
  {bv:"BV1VSAGzEEtj", t:"RH 新会员体系详解", cat:"runninghub", cover:"covers/BV1VSAGzEEtj.jpg", dur:"8:22"},
  {bv:"BV14LYq6YEct", t:"RunningHub 全球 AIGC 长片创作大赛：550 万奖励池与百万现金大奖", cat:"runninghub", cover:"covers/BV14LYq6YEct.jpg", dur:"1:00"},
  {bv:"BV1eoYi61Ems", t:"全球 AIGC 长片创作大赛：刘慈欣顾问与 10 个 IP 授权", cat:"runninghub", cover:"covers/BV1eoYi61Ems.jpg", dur:"0:59"},
  {bv:"BV1WQhE6uEsr", t:"RHTV 教程 EP02：实时绘画 + 2D 画板，草稿秒变成品", cat:"runninghub", cover:"covers/BV1WQhE6uEsr.jpg", dur:"20:12"},
  {bv:"BV1cwhH6gEjx", t:"RHTV 教程 EP03：角色库、视频换装与爆款视频复刻", cat:"runninghub", cover:"covers/BV1cwhH6gEjx.jpg", dur:"18:20"},
  {bv:"BV1XAah6WEKg", t:"RunningHub 视频模型免费无限使用：每天 9 点到早 10 点", cat:"runninghub", cover:"covers/BV1XAah6WEKg.jpg", dur:"4:11"},
  /* AI 视频 */
  {bv:"BV1qAKQ69EA9", t:"Seedance 2.0 / Fast / Mini 三模型横评：Mini 性价比真的高吗？", cat:"ai-video", cover:"covers/BV1qAKQ69EA9.jpg", dur:"13:54"},
  {bv:"BV1ygMH6sESQ", t:"0.36元/s 高燃 AI 打戏：Shotlab 节点画布实战", cat:"ai-video", cover:"covers/BV1ygMH6sESQ.jpg", dur:"15:33"},
  {bv:"BV1y1Gg6vEM6", t:"MiniMax 海螺H3将开源？！ 省钱攻略｜模型拆解｜比官网便宜60%丨使用方式+测试对比", cat:"ai-video", cover:"covers/BV1y1Gg6vEM6.jpg", dur:"11:07"},
  {bv:"BV1dNuS6sEsi", t:"翻车实录：Seedance 2.5 花几百块踩过的 8 个坑", cat:"ai-video", cover:"covers/BV1dNuS6sEsi.jpg", dur:"20:39"},
  {bv:"BV1nBMR65EoP", t:"海螺 H3 开源了：三卡实测与最新整合包", cat:"ai-video", cover:"covers/BV1nBMR65EoP.jpg", dur:"6:18"},
  /* AI 工具与项目 */
  {bv:"BV1LpMQ6ZEnx", t:"普通人也能用 AI 赚钱：2 小时做出能收费的 AI 应用 / 网站", cat:"ai-tools", cover:"covers/BV1LpMQ6ZEnx.jpg", dur:"13:02"},
  {bv:"BV1K7uF6PELV", t:"本地项目如何发布到 VibeX：换发型项目实战与 AI 对话优化", cat:"ai-tools", cover:"covers/BV1K7uF6PELV.jpg", dur:"18:23"},
  {bv:"BV1ABuk6SEtW", t:"Qwen3.8 Max 开源：每天 100 亿 Token 免费送", cat:"ai-tools", cover:"covers/BV1ABuk6SEtW.jpg", dur:"3:58"},
  {bv:"BV1bWg56JEXc", t:"AI 生图全能图片工作台：文生图、图生图、反推一站打通", cat:"ai-tools", cover:"covers/BV1bWg56JEXc.jpg", dur:"16:46"},
  {bv:"BV1v2gH62ELj", t:"Gary Frame 帧工场：景别、机位、台词一键解析", cat:"ai-tools", cover:"covers/BV1v2gH62ELj.jpg", dur:"8:42"},
  {bv:"BV1AVgw6BEQ9", t:"GaryPrompt：浏览器插件一键调用 Skill，不再手动复制", cat:"ai-tools", cover:"covers/BV1AVgw6BEQ9.jpg", dur:"12:17"},
  {bv:"BV1vkb26wEsu", t:"GaryHair：一键换发型与证件照项目演示", cat:"ai-tools", cover:"covers/BV1vkb26wEsu.jpg", dur:"7:06"},
  {bv:"BV1dvYZ6gEeK", t:"GPT Image 2.5 双版本实测：高品质版 vs 极速版", cat:"ai-tools", cover:"covers/BV1dvYZ6gEeK.jpg", dur:"15:57"},
  {bv:"BV1XshZ6FEED", t:"Qwen-Image-2.1 实测：ComfyUI 保姆级教程", cat:"ai-tools", cover:"covers/BV1XshZ6FEED.jpg", dur:"25:53"},
  /* ComfyUI */
  {bv:"BV1XdxezAEa7", t:"基础：目录结构、报错解决、安装与启动", cat:"comfyui", cover:"covers/BV1XdxezAEa7.jpg", dur:"16:22"},
  {bv:"BV1mJHjzFEcy", t:"整合包极速启动：N卡配置、虚拟内存、网络环境", cat:"comfyui", cover:"covers/BV1mJHjzFEcy.jpg", dur:"2:48"},
  {bv:"BV1TKxvz4Eni", t:"入门 02：基础工作流参数与搭建，7 步核心节点", cat:"comfyui", cover:"covers/BV1TKxvz4Eni.jpg", dur:"24:27"},
  {bv:"BV1EzsqzUEat", t:"入门 03：LoRA / Embedding 深度解析与实战", cat:"comfyui", cover:"covers/BV1EzsqzUEat.jpg", dur:"64:41"},
  {bv:"BV1EykEBWE3o", t:"Z-image 图生图入门（上）：重绘逻辑与图像反推", cat:"comfyui", cover:"covers/BV1EykEBWE3o.jpg", dur:"13:58"},
  {bv:"BV15RknBsE9s", t:"Z-image ControlNet（下）：姿态到深度图实操", cat:"comfyui", cover:"covers/BV15RknBsE9s.jpg", dur:"19:20"},
  {bv:"BV1396iBWE1d", t:"报错处理：自定义节点开关与工作流排错", cat:"comfyui", cover:"covers/BV1396iBWE1d.jpg", dur:"7:56"},
  {bv:"BV1vnw2zGEVQ", t:"AI 服装提取一键搞定：Klein 专属工作流", cat:"comfyui", cover:"covers/BV1vnw2zGEVQ.jpg", dur:"10:48"},
  {bv:"BV1yPQDBVEqY", t:"一键 AI 换装工作流：Klein 模型实测（零基础）", cat:"comfyui", cover:"covers/BV1yPQDBVEqY.jpg", dur:"14:59"},
  {bv:"BV1ancPzEEgR", t:"2026 主流放大：SeedVR 一致性与 8K 工作流", cat:"comfyui", cover:"covers/BV1ancPzEEgR.jpg", dur:"9:04"},
  {bv:"BV1RNiFB1EmP", t:"ComfyUI 插件维护指南", cat:"comfyui", cover:"covers/BV1RNiFB1EmP.jpg", dur:"25:02"},
  /* AIPC 装机 */
  {bv:"BV18F14BTEoW", t:"系列开篇：跑 AI 该买什么电脑？", cat:"aipc", cover:"covers/BV18F14BTEoW.jpg", dur:"2:58"},
  {bv:"BV1UA14BNEdi", t:"02 显卡选购", cat:"aipc", cover:"covers/BV1UA14BNEdi.jpg", dur:"12:14"},
  {bv:"BV152CFBPEZb", t:"03 CPU 选购（上）", cat:"aipc", cover:"covers/BV152CFBPEZb.jpg", dur:"6:59"},
  {bv:"BV1NKCcBnEzR", t:"04 CPU 选购（中）", cat:"aipc", cover:"covers/BV1NKCcBnEzR.jpg", dur:"5:54"},
  {bv:"BV1UvkiBWEXx", t:"05 CPU 选购（下）", cat:"aipc", cover:"covers/BV1UvkiBWEXx.jpg", dur:"7:16"},
  {bv:"BV1wFkCBhEXT", t:"06 主板选购", cat:"aipc", cover:"covers/BV1wFkCBhEXT.jpg", dur:"12:52"},
  {bv:"BV1zzC1BvED9", t:"07 散热选购", cat:"aipc", cover:"covers/BV1zzC1BvED9.jpg", dur:"9:40"},
  {bv:"BV1bpCiBxEUy", t:"08 内存条选购", cat:"aipc", cover:"covers/BV1bpCiBxEUy.jpg", dur:"4:52"},
  {bv:"BV1sBycBHEuK", t:"09 硬盘选购", cat:"aipc", cover:"covers/BV1sBycBHEuK.jpg", dur:"9:25"},
  {bv:"BV1uAUsBMEUy", t:"10 电源选购", cat:"aipc", cover:"covers/BV1uAUsBMEUy.jpg", dur:"5:50"},
  {bv:"BV1ZutzzoE7a", t:"AIPC 怎么配？评论区上千条问题汇总", cat:"aipc", cover:"covers/BV1ZutzzoE7a.jpg", dur:"22:49"},
  /* 网络自救 */
  {bv:"BV1KrtazXEWN", t:"99% 的网络问题，3 个方法解决：终极断网排错", cat:"network", cover:"covers/BV1KrtazXEWN.jpg", dur:"20:20"},
  {bv:"BV1aMc9ecEM9", t:"只需三步，轻松解决断网问题", cat:"network", cover:"covers/BV1aMc9ecEM9.jpg", dur:"3:27"},
];
