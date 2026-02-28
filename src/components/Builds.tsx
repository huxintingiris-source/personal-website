"use client";

import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Download, Check, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import TalkTypeDemo from "./talktype/TalkTypeDemo";

const subtitles = [
  { time: "00:00:00", text: "所以实际上这次演讲基于我最近的一篇博客文章，" },
  { time: "00:00:04", text: "呃，" },
  { time: "00:00:04", text: "呃，" },
  { time: "00:00:05", text: "如果你对此感兴趣，" },
  { time: "00:00:07", text: "呃，" },
  { time: "00:00:08", text: "演讲，" },
  { time: "00:00:08", text: "建议阅读完整篇博客文章，" },
  { time: "00:00:12", text: "本次演讲的要点是，" },
  { time: "00:00:16", text: "呃，" },
  { time: "00:00:16", text: "我认为我们正处于人工智能发展的特殊时刻，" },
  { time: "00:00:20", text: "我称之为中场休息，" },
  { time: "00:00:24", text: "为什么说人工智能一直在不断进步，" },
  { time: "00:00:28", text: "这似乎是一个非常连贯的，" },
  { time: "00:00:30", text: "呃进程，" },
  { time: "00:00:31", text: "为什么这个时刻如此特殊，" },
  { time: "00:00:35", text: "所以我认为，" },
  { time: "00:00:37", text: "从你知道的，" },
  { time: "00:00:38", text: "暗星会议至今，人工智能始终专注于训练，" },
  { time: "00:00:44", text: "目标是让AI系统越来越强大，" },
  { time: "00:00:48", text: "这体现在，" },
  { time: "00:00:52", text: "基准分数不断攀升，" },
  { time: "00:00:53", text: "没错，" },
  { time: "00:00:54", text: "这是人工智能真正不同的领域，" },
  { time: "00:00:58", text: "现在，" },
  { time: "00:00:58", text: "我们终于有了通用方法来攀登任何基准，" },
  { time: "00:01:04", text: "或统一的基准体系，" },
];

export default function Builds() {
  const [activeLine, setActiveLine] = useState(0);
  const [showExport, setShowExport] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveLine((prev) => (prev + 1) % subtitles.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="builds" className="py-20 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-3xl md:text-5xl font-bold mb-12 text-center"
      >
        The Builds
      </motion.h2>

      <div className="flex flex-col gap-16">
        
        {/* Project 1: Bili Subtitle (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-gray-50 border border-gray-100 p-8 shadow-sm flex flex-col lg:flex-row gap-8 lg:items-center"
        >
          {/* Content */}
          <div className="flex-1 z-10">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center overflow-hidden p-2 shadow-sm">
                <img src="/bili-icon.png" alt="Bili Subtitle" className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Bili Subtitle</h3>
                <div className="flex gap-2 mt-2">
                  <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">Manifest V3</span>
                  <span className="px-2.5 py-1 bg-white border border-gray-200 rounded-full text-xs font-medium text-gray-600 shadow-sm">React</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-600 leading-relaxed mb-8 text-base">
              拥有 500+ 用户的 Chrome 扩展。AI 驱动的字幕生成与精准时间戳跳转，帮助用户更高效地获取视频信息。
            </p>

            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-gray-100">
              <h4 className="text-sm font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-pink-500" />
                后续迭代计划
              </h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span><strong>AI 总结：</strong>一键生成视频核心内容摘要</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span><strong>跟 AI 对话提问：</strong>基于视频内容进行智能问答</span>
                </li>
                <li className="text-sm text-gray-600 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-400 mt-2 shrink-0" />
                  <span><strong>全文版本字幕：</strong>支持展示完整视频字幕文本</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Interactive UI Simulation */}
          <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none relative z-10">
            <div className="relative bg-white rounded-xl border border-gray-200 shadow-lg overflow-hidden flex flex-col h-[320px] transform transition-transform group-hover:scale-[1.02] duration-500">
              {/* Fake Header */}
              <div className="h-10 border-b border-gray-100 bg-gray-50/50 flex items-center justify-between px-4 shrink-0">
                <span className="text-sm font-semibold text-gray-700">视频字幕</span>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowExport(!showExport);
                  }}
                  className="flex items-center gap-1.5 px-3 py-1 bg-white border border-gray-200 rounded-md text-xs text-gray-600 hover:bg-gray-50 transition-colors shadow-sm"
                >
                  <Download className="w-3.5 h-3.5" />
                  导出
                </button>
              </div>

              {/* Subtitle List */}
              <div className="flex-1 overflow-hidden relative p-3 bg-white">
                 <div 
                   className="transition-transform duration-500 ease-in-out"
                   style={{ transform: `translateY(-${Math.min(Math.max(0, (activeLine - 1) * 28), Math.max(0, subtitles.length * 28 - 256))}px)` }}
                 >
                   {subtitles.map((sub, idx) => (
                     <div 
                       key={idx} 
                       className={cn(
                         "flex gap-3 py-1.5 px-3 rounded-lg text-xs transition-colors duration-300",
                         activeLine === idx ? "bg-pink-50 text-pink-900 font-medium" : "text-gray-500"
                       )}
                     >
                       <span className="font-mono opacity-70 shrink-0 text-[10px] pt-0.5">{sub.time}</span>
                       <span className="truncate">{sub.text}</span>
                     </div>
                   ))}
                 </div>
                 
                 {/* Scrollbar fake */}
                 <div className="absolute right-1.5 top-3 bottom-3 w-1 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div 
                      className="w-full bg-gray-300 rounded-full"
                      animate={{ top: `${(activeLine / subtitles.length) * 100}%`, height: '20%' }}
                      style={{ position: 'absolute' }}
                    />
                 </div>
              </div>

              {/* Export Dialog Popover */}
              <AnimatePresence>
                {showExport && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 10 }}
                    className="absolute top-12 right-3 w-56 bg-white rounded-xl shadow-xl border border-gray-200 p-4 z-20"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-medium text-gray-700">格式:</span>
                      <div className="flex items-center gap-1 px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-md text-xs text-gray-600 cursor-pointer hover:bg-gray-100 transition-colors">
                        TXT <ChevronDown className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <div className="flex items-center gap-2.5 mb-4 cursor-pointer">
                      <div className="w-4 h-4 bg-blue-500 rounded flex items-center justify-center shadow-sm">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-sm text-gray-600">带时间戳</span>
                    </div>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowExport(false);
                      }}
                      className="w-full py-2 bg-[#00AEEC] text-white rounded-lg text-xs font-bold hover:bg-[#00A1D6] transition-colors shadow-sm"
                    >
                      确认导出
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl opacity-60 pointer-events-none" />
        </motion.div>

        {/* Project 2: TalkType (Full Width) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-[#0F172A] text-white p-8 shadow-md flex flex-col lg:flex-row gap-8 lg:items-center"
        >
          {/* Content */}
          <div className="flex-1 z-10 order-2 lg:order-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-blue-500/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner border border-white/10">🎙️</div>
              <div>
                <h3 className="text-2xl font-bold">TalkType AI</h3>
                <div className="flex gap-2 mt-2">
                  <span className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300">Electron</span>
                  <span className="px-2.5 py-1 bg-white/10 border border-white/20 rounded-full text-xs font-medium text-gray-300">OpenAI</span>
                </div>
              </div>
            </div>
            
            <p className="text-gray-300 leading-relaxed mb-8 text-base">
              基于 Electron 构建的跨平台 AI 输入法。实时语音转文字并进行 AI 润色，开源且注重隐私保护。
            </p>

            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-sm font-semibold text-white mb-4 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                后续迭代计划
              </h4>
              <ul className="space-y-3">
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 shrink-0" />
                  <span><strong>按 ESC 取消：</strong>说话说到一半发现说错了，能按 ESC 取消刚才的内容，重新说</span>
                </li>
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 shrink-0" />
                  <span><strong>热词功能：</strong>不只是修改提示词，支持自定义热词库</span>
                </li>
                <li className="text-sm text-gray-300 flex items-start gap-2">
                  <div className="w-1 h-1 rounded-full bg-gray-500 mt-2 shrink-0" />
                  <span><strong>打字疲劳提醒：</strong>识别到长时间连续打字时，提示使用语音输入更加快速精准</span>
                </li>
              </ul>
            </div>
          </div>
          
          {/* Visual Placeholder for UI */}
          <div className="flex-1 w-full max-w-md mx-auto lg:max-w-none relative z-10 order-1 lg:order-2 flex justify-center items-center min-h-[300px]">
             <div className="dark relative w-full h-[500px] bg-gradient-to-br from-gray-800 to-black rounded-xl border border-gray-700 shadow-2xl transform rotate-[-2deg] group-hover:rotate-0 transition-all duration-500 overflow-hidden">
                <TalkTypeDemo />
             </div>
          </div>
        </motion.div>

        {/* Idea Lab (Full Width Bottom) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-indigo-50 to-purple-50 border border-indigo-100 p-12 shadow-sm text-center"
        >
           <h3 className="text-2xl font-bold mb-6 text-indigo-900">Idea Lab & Experiments</h3>
           <div className="flex gap-4 overflow-hidden mask-linear-gradient w-full justify-center flex-wrap max-w-4xl mx-auto">
              {["Cloud Debate AI线上辩论平台", "AI 一键排版工具",  "IELTS Writing雅思写作助手", "Smart Notes AI笔记本"].map((idea) => (
                <div key={idea} className="px-5 py-2.5 bg-white/60 backdrop-blur-sm rounded-full text-base font-medium text-indigo-800 shadow-sm whitespace-nowrap hover:bg-white hover:scale-105 transition-all cursor-default">
                  {idea}
                </div>
              ))}
           </div>
           <p className="mt-6 text-base text-indigo-600/80">Exploring 20+ product ideas and counting...</p>
        </motion.div>

      </div>

      {/* Vibe Coding Methodology Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 pt-12 border-t border-gray-100"
      >
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-4">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Development Philosophy
          </div>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">独立开发背后的思考：Vibe Coding 方法论</h3>
          <p className="text-gray-600 max-w-2xl mx-auto text-base leading-relaxed">
            在开发 Bilibili 字幕插件的过程中，我经历了从失败到成功的探索，沉淀出了一套高效的 AI 协作工作流。在后续的项目中也成果复用了这一套工作流。 
            这不仅仅是写代码，更是关于如何与 AI 高效协作。
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Left: The Journey */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm h-full">
            <h4 className="text-lg font-bold text-gray-900 mb-8 flex items-center gap-2">
              <span className="text-xl">📉</span> 从试错中学习
            </h4>
            <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-red-50 flex items-center justify-center border-4 border-white shadow-sm z-10">
                  <span className="text-red-500 text-lg">✕</span>
                </div>
                <h5 className="font-bold text-gray-900 mb-2 text-lg">第一次尝试：失败</h5>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  试图直接把模糊的需求丢给 AI Agent，导致上下文混乱，Bug 越修越多。
                </p>
                <div className="bg-red-50 text-red-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  教训：不能指望 AI 自动补全模糊的需求
                </div>
              </div>
              
              <div className="relative pl-10">
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full bg-green-50 flex items-center justify-center border-4 border-white shadow-sm z-10">
                  <span className="text-green-500 text-lg">✓</span>
                </div>
                <h5 className="font-bold text-gray-900 mb-2 text-lg">第二次尝试：成功</h5>
                <p className="text-gray-600 mb-3 leading-relaxed">
                  改变策略，先由 chatbot 协助理清需求，再分步开发。
                </p>
                <div className="bg-green-50 text-green-700 px-4 py-2 rounded-lg text-sm font-medium inline-block">
                  关键 Trick：让 AI 向我提问，直到它完全理解需求
                </div>
              </div>
            </div>
          </div>

          {/* Right: The SOP */}
          <div className="group relative overflow-hidden rounded-3xl bg-[#0F172A] p-8 text-white shadow-xl h-full flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none group-hover:bg-blue-500/30 transition-colors duration-500"></div>
            
            <div className="relative z-10">
              <h4 className="text-lg font-bold mb-8 flex items-center gap-2">
                <span className="text-xl">⚡</span> 我的 AI 开发 SOP
              </h4>
              
              <div className="space-y-6">
                {[
                  { step: "01", title: "需求澄清", desc: "与 AI 头脑风暴，明确模糊地带，把填空题变成选择题" },
                  { step: "02", title: "生成 PRD", desc: "输出包含用户故事、功能清单、异常流程的专业文档" },
                  { step: "03", title: "任务拆解", desc: "将大需求拆解为 MVP 和后续迭代模块，明确交付标准" },
                  { step: "04", title: "循环开发", desc: "按模块生成 Prompt，验证通过后再进行下一步，步步为营" }
                ].map((item, index) => (
                  <div key={item.step} className="flex gap-4 group/item">
                    <span className="text-blue-500 font-mono font-bold text-lg pt-0.5 opacity-60 group-hover/item:opacity-100 transition-opacity">{item.step}</span>
                    <div>
                      <h5 className="font-bold text-white text-base mb-1 group-hover/item:text-blue-300 transition-colors">{item.title}</h5>
                      <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 relative z-10">
              <div className="flex items-center gap-3 text-sm text-gray-400 italic">
                <span className="w-1 h-1 rounded-full bg-blue-400"></span>
                <span>"MVP 上线之后不断迭代更新优化"</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
