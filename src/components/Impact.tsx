"use client";

import { motion, AnimatePresence } from "framer-motion";
import { 
  CheckCircle2, Zap, BarChart3, Search, Lightbulb, Workflow, 
  User, MessageSquare, Bot, ArrowRight, BrainCircuit, Sparkles 
} from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

// -----------------------------------------------------------------------------
// Tab Content Data
// -----------------------------------------------------------------------------

const tabs = [
  {
    id: "phase1",
    label: "项目前期：调研与定义",
    icon: Search,
    title: "从 0 到 1 定义 AI 员工",
    subtitle: "深度调研竞品与商家，明确“新商冷启动”核心定位",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        {/* Block 1: Project Background */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">1</div>
            <h4 className="text-gray-900 font-bold text-base">项目背景</h4>
          </div>
          <p className="text-sm pl-11">
            旨在升级“店小宝”角色，从 0 到 1 打造 AI 数字员工，降低商家经营门槛，解决实际线上经营痛点。
          </p>
        </div>

        {/* Block 2: Competitor Research */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold shrink-0">2</div>
            <h4 className="text-gray-900 font-bold text-base">竞品调研</h4>
          </div>
          <div className="pl-11 space-y-2 text-sm">
            <p><span className="font-semibold text-gray-800">对标对象：</span>抖音来客、淘宝千牛、1688 经营助手。</p>
            <p><span className="font-semibold text-gray-800">调研维度：</span>拆解功能分布与模型步骤；分析交互入口与多轮对话引导逻辑；评估用户留存价值。</p>
          </div>
        </div>

        {/* Block 3: Merchant Research */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold shrink-0">3</div>
            <h4 className="text-gray-900 font-bold text-base">商家调研与痛点挖掘</h4>
          </div>
          <div className="pl-11 space-y-2 text-sm">
            <p>通过电话访谈与问卷，锁定<span className="font-bold text-green-700">“按摩足疗”</span>行业作为灰度首选（线上依赖高、AI 接受度高）。</p>
            <p>发现真实痛点并非“成本高”，而是<span className="font-bold text-red-500">“新商冷启动难”</span>与<span className="font-bold text-red-500">“获客推广难”</span>。</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "phase2",
    label: "项目中期：AI 功能建设",
    icon: BrainCircuit,
    title: "构建高可用的 Agent",
    subtitle: "Prompt 调优 SOP + 黄金测评集，解决模型幻觉难题",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        {/* Block 1: Model & Prompt */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold shrink-0">1</div>
            <h4 className="text-gray-900 font-bold text-base">模型选型与 Prompt 调优</h4>
          </div>
          <p className="text-sm pl-11">
            建立标准化工作流：选模型 → Prompt 调优 → RAG 知识库接入 → 评测 → Bad Case 走查。
          </p>
        </div>

        {/* Block 2: Evaluation SOP */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold shrink-0">2</div>
            <h4 className="text-gray-900 font-bold text-base">制定 SOP 与黄金测评集</h4>
          </div>
          <div className="pl-11 space-y-2 text-sm">
            <p>为解决效果难以量化的问题，搭建批量跑测工作流，构建包含 1000+ 条数据的<span className="font-bold text-gray-800">“黄金测评集”</span>。</p>
            <p>设立 19 个细分维度（准确性、有效性、安全性），要求调优后在测评集的通过率达到 90% 以上。</p>
          </div>
        </div>

        {/* Block 3: Result */}
        <div className="p-4 bg-green-50 rounded-2xl border border-green-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-green-200 flex items-center justify-center text-green-700 font-bold shrink-0">3</div>
            <h4 className="text-green-900 font-bold text-base">显著成效</h4>
          </div>
          <div className="pl-11 space-y-2 text-sm">
            <p className="text-green-800 font-medium">模型幻觉率降低至 20% 以下。</p>
            <p className="text-green-700">建立了研发与产品之间清晰的交付标准。</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "phase3",
    label: "项目后期：场景与迭代",
    icon: Zap,
    title: "业务场景落地与拓展",
    subtitle: "从经营诊断到营销介入，覆盖“特团/神会员”核心场景",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed">
        {/* Block 1: New Scenarios */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold shrink-0">1</div>
            <h4 className="text-gray-900 font-bold text-base">新场景接入：营销介入</h4>
          </div>
          <div className="pl-11 space-y-2 text-sm">
            <p><span className="font-semibold text-gray-800">特团/神会员：</span>针对商家“获客难”痛点，自动生成营销方案。</p>
            <p><span className="font-semibold text-gray-800">AI 生图：</span>利用生图工具辅助门店装修，解决新商无图可用的问题。</p>
          </div>
        </div>

        {/* Block 2: Core Function Iteration */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold shrink-0">2</div>
            <h4 className="text-gray-900 font-bold text-base">核心功能迭代：经营诊断</h4>
          </div>
          <div className="pl-11 space-y-2 text-sm">
            <p>针对“读不懂数据”痛点，提供基于 RAG 的智能诊断。</p>
            <p>不仅定位问题（如价格不合理），更给出可直接落地的优化建议（如一键改价、上单）。</p>
          </div>
        </div>

        {/* Block 3: Future Outlook */}
        <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 hover:shadow-sm transition-shadow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 rounded-full bg-yellow-100 flex items-center justify-center text-yellow-600 font-bold shrink-0">3</div>
            <h4 className="text-gray-900 font-bold text-base">持续迭代</h4>
          </div>
          <p className="text-sm pl-11">
            MVP 上线后，基于用户反馈数据不断优化 Prompt 与模型能力，持续拓展“评价回复”等高频场景。
          </p>
        </div>
      </div>
    ),
  }
];

// -----------------------------------------------------------------------------
// Component
// -----------------------------------------------------------------------------

export default function Impact() {
  const [activeTabId, setActiveTabId] = useState("phase1");
  const activeTab = tabs.find(t => t.id === activeTabId) || tabs[0];

  // Auto-cycle tabs if user doesn't interact? Maybe not, manual is better for reading.
  // But let's restart the phone animation when tab changes.
  
  return (
    <section id="impact" className="py-20 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="bg-white rounded-[40px] border border-gray-100 shadow-xl overflow-hidden min-h-[600px] flex flex-col lg:flex-row">
        
        {/* Left: Navigation & Content */}
        <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-100 text-yellow-800 text-sm font-medium mb-6">
              <span>🚀 美团实习 · AI 数字员工</span>
            </div>
            
            {/* Tabs Navigation */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTabId(tab.id)}
                  className={cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2",
                    activeTabId === tab.id 
                      ? "bg-gray-900 text-white shadow-md" 
                      : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                  )}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTabId}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 mb-2">
                  {activeTab.title}
                </h2>
                <div className="text-lg text-gray-500 mb-6 font-medium">
                  {activeTab.subtitle}
                </div>
                {activeTab.content}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Right: Interactive Phone Simulation */}
        <div className="w-full lg:w-1/2 bg-gray-50 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative overflow-hidden border-t lg:border-t-0 lg:border-l border-gray-100">
           
           {/* Decorative Background Elements */}
           <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
           <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

           {/* Phone Container */}
           <div className="relative mx-auto w-full max-w-sm">
             <div className="bg-white rounded-[3rem] shadow-2xl border-4 border-white overflow-hidden relative z-10 h-[600px]">
                {/* Status Bar */}
                <div className="h-12 bg-white flex items-center justify-between px-6 border-b border-gray-50 sticky top-0 z-20">
                  <div className="text-xs font-bold text-gray-400">9:41</div>
                  <div className="flex items-center gap-1">
                    <div className="w-1 h-1 bg-green-500 rounded-full" />
                    <div className="text-xs font-bold text-gray-800">店小宝 AI</div>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-4 h-2.5 border border-gray-300 rounded-[1px]" />
                  </div>
                </div>

                {/* Dynamic Screen Content */}
                <div className="h-full bg-gray-50/50 p-4 overflow-hidden relative">
                  <AnimatePresence mode="wait">
                    {activeTabId === "phase1" && <PhoneScreenBackground key="bg" />}
                    {activeTabId === "phase2" && <PhoneScreenConstruction key="cons" />}
                    {activeTabId === "phase3" && <PhoneScreenDiagnosis key="diag" />}
                  </AnimatePresence>
                </div>

                {/* Bottom Home Indicator */}
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full z-20" />
             </div>
           </div>
        </div>

      </div>
    </section>
  );
}

// -----------------------------------------------------------------------------
// Sub-components for Phone Screens
// -----------------------------------------------------------------------------

function PhoneScreenBackground() {
  return (
    <motion.div 
      className="space-y-4 h-full flex flex-col justify-center"
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
    >
      <div className="text-center space-y-2 mb-8">
        <div className="w-20 h-20 bg-yellow-400 rounded-full mx-auto flex items-center justify-center shadow-lg shadow-yellow-200">
          <Bot className="w-10 h-10 text-yellow-900" />
        </div>
        <h3 className="text-xl font-bold text-gray-900">Hi, 我是店小宝</h3>
        <p className="text-sm text-gray-500">您的美团智能经营助手</p>
      </div>

      <div className="space-y-2">
        {["新店开业引导", "一键生成营销图", "店铺经营诊断", "自动回复评价"].map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex items-center justify-between"
          >
            <span className="text-sm font-medium text-gray-700">{item}</span>
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}

function PhoneScreenDiagnosis() {
  return (
    <div className="flex flex-col h-full pb-12 space-y-4">
      {/* User Question */}
      <motion.div 
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="flex justify-end"
      >
        <div className="bg-yellow-400 text-yellow-900 px-4 py-3 rounded-2xl rounded-tr-none text-sm font-medium shadow-sm max-w-[85%]">
          最近进店的人很多，但下单的人很少，怎么回事？
        </div>
      </motion.div>

      {/* AI Analysis Process */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="flex justify-start gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 shrink-0 mt-1">
          <Bot className="w-5 h-5 text-blue-600" />
        </div>
        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none text-sm text-gray-600 shadow-sm border border-gray-100 max-w-[90%] space-y-3">
          <div className="flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-wider">
            <Search className="w-3 h-3 animate-spin" />
            诊断分析中...
          </div>
          <div className="space-y-2 text-xs">
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
              <span>近7天进店转化率</span>
              <span className="font-bold text-red-500">1.2% (低于商圈 80%)</span>
            </div>
            <div className="flex justify-between items-center p-2 bg-gray-50 rounded-lg">
              <span>双人套餐点击率</span>
              <span className="font-bold text-gray-900">High</span>
            </div>
          </div>
        </div>
      </motion.div>

      {/* AI Solution */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5 }}
        className="flex justify-start gap-3"
      >
        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border border-blue-200 shrink-0 mt-1 opacity-0">
          <Bot className="w-5 h-5 text-blue-600" />
        </div>
        <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none text-sm text-gray-600 shadow-sm border border-gray-100 max-w-[90%] space-y-3">
          <div className="flex items-center gap-2 text-green-600 font-bold text-xs uppercase tracking-wider">
            <Lightbulb className="w-3 h-3" />
            优化建议
          </div>
          <p className="text-gray-800">
            发现您的 <span className="font-bold">“双人套餐”</span> 价格比同商圈竞品高 15%，建议调整价格或增加赠品。
          </p>
          <button className="w-full py-2.5 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-lg text-xs font-bold transition-colors flex items-center justify-center gap-2 group">
            <Sparkles className="w-3 h-3" />
            生成特价团购方案
          </button>
        </div>
      </motion.div>
    </div>
  );
}

function PhoneScreenConstruction() {
  return (
    <div className="h-full flex flex-col items-center justify-center space-y-6">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
        className="relative"
      >
        <div className="w-32 h-32 bg-purple-100 rounded-full flex items-center justify-center animate-pulse">
          <BrainCircuit className="w-16 h-16 text-purple-600" />
        </div>
        <div className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
          Pass
        </div>
      </motion.div>

      <div className="w-full space-y-3 px-4">
        <h4 className="text-center font-bold text-gray-900 mb-4">Prompt 评测流</h4>
        
        {["准确性校验", "安全合规检测", "建议落地性评估"].map((step, i) => (
          <motion.div
            key={step}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + i * 0.2 }}
            className="flex items-center gap-3 bg-white p-3 rounded-xl border border-gray-100 shadow-sm"
          >
            <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
              <CheckCircle2 className="w-3 h-3 text-green-600" />
            </div>
            <div className="flex-1">
              <div className="h-1.5 bg-gray-100 rounded-full w-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8 + i * 0.2, duration: 1 }}
                  className="h-full bg-green-500"
                />
              </div>
            </div>
            <span className="text-xs font-medium text-gray-500">{step}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
