/* ================================================
   视频数据库 — 加新视频只需在对应分类加一行
   bv=B站BV号 t=标题 cover/dur 抓取后自动生成
   ================================================ */
const VIDEO_CATS = [
  {key:"runninghub", name:"RunningHub", sub:"玩赚系列与会员体系"},
  {key:"ai-video", name:"AI 视频", sub:"Seedance 横评与实战"},
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
  /* AI 视频 */
  {bv:"BV1qAKQ69EA9", t:"Seedance 2.0 / Fast / Mini 三模型横评：Mini 性价比真的高吗？", cat:"ai-video", cover:"covers/BV1qAKQ69EA9.jpg", dur:"13:54"},
  {bv:"BV1ygMH6sESQ", t:"0.36元/s 高燃 AI 打戏：Shotlab 节点画布实战", cat:"ai-video", cover:"covers/BV1ygMH6sESQ.jpg", dur:"15:33"},
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
