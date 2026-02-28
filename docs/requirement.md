# Role
你是一位拥有顶尖审美的前端专家，精通 Next.js, Tailwind CSS 和 Framer Motion。你现在负责为我（胡馨婷，一名 26 届毕业、懂大数据且具备独立开发能力的 AI 产品经理）构建个人作品集网站 
# Core Aesthetic (Visual Identity)
1. Style: 融合 Apple 的 "Liquid Glass" (毛玻璃) 质感与 Duolingo 的活泼交互。
2. Palette: 纯白色背景，配合高透明度、高模糊度的容器。
3. Typography: 优先使用 SF Pro 或具亲和力的圆体。
# Layout Structure
1. Sticky Navbar: 灵动岛风格，随滚动收缩。
2. Hello Section: 
   - 文案: "Hi, I'm Xinting. I build AI products that actually work."
   - 交互: 包含一个可交互的 Lottie 动画头像。
   - 标签：Data-Driven, AI-Native, Builder-Mindset 用liquid glass实现
3. The Builds : 
   - 展示 [Bili Subtitle] 插件（突出独立开发、Chrome API、AI 字幕跳转）。
   - 展示 [TalkType] AI 输入法（突出 Electron 跨平台、AI 润色、开源）。
4. The Impact: 
   - 描述美团 AI 数字员工实习经历 。
   - 左侧详述：1000条黄金测评集、19个评测维度、RAG 接入及 15% 解决率提升。
   - 右侧视觉：模拟 AI 诊断过程的交互卡片。需要我补充的信息先用占位符填充，后续我会补充实际情况
5. Skills & Radar:
   - 技能卡片：SQL/Python 悬浮时带代码光效，Figma 悬浮时显示矢量锚点。
   - 审美雷达：展示多邻国、小宇宙、Forest 等 App 的策展笔记，下方附有我的评价，为什么会觉得这些app好。

# 注意
极简吸顶导航栏显示Hello、The Builds 、The Impact、Skills & Radar这四个section，首屏不展示导航栏，用户下滑至页面下方时再显示吸顶导航栏 
# Technical Requirements
1. 使用 Framer Motion 实现 Stagger Animation (交错进场) 和 Spring Physics (物理回弹)。
2. 所有组件需具备 `whileHover={{ scale: 1.02 }}` 的平滑反馈。
3. 响应式设计，完美适配移动端。
4. 结尾包含联系方式：huxinting.iris@gmail.com 。
# Instruction
请根据以上描述，先为我搭建出网站的整体框架代码（Layout 和 Tailwind 配置），然后重点实现 Hero Section 和 Bento Grid 的交互逻辑。