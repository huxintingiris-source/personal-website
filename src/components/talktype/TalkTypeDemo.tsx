import React, { useState, useEffect, useRef } from "react";
import { Mic, Copy } from "lucide-react";
import { LoadingDots } from "./ui/loading-dots";
import { UsageGuide } from "./ui/usage-guide";

// 语音波形指示器组件（处理状态）
const VoiceWaveIndicator = ({ isListening }: { isListening: boolean }) => {
  return (
    <div className="flex items-center justify-center gap-0.5">
      {[...Array(4)].map((_, i) => (
        <div
          key={i}
          className={`w-0.5 bg-white rounded-full transition-all duration-150 drop-shadow-sm ${
            isListening ? "animate-pulse h-5" : "h-2"
          }`}
          style={{
            animationDelay: isListening ? `${i * 0.1}s` : "0s",
            animationDuration: isListening ? `${0.6 + i * 0.1}s` : "0s",
          }}
        />
      ))}
    </div>
  );
};

// 增强的工具提示组件
const Tooltip = ({ children, content, position = "top" }: { children: React.ReactNode, content: React.ReactNode, position?: "top" | "bottom" }) => {
  const [isVisible, setIsVisible] = useState(false);

  const getPositionClasses = () => {
    if (position === "bottom") {
      return {
        tooltip: "absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 text-white bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-md whitespace-nowrap z-50 transition-opacity duration-150",
        arrow: "absolute bottom-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-b-2 border-transparent border-b-neutral-800"
      };
    }
    // 默认为顶部
    return {
      tooltip: "absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 text-white bg-gradient-to-r from-neutral-800 to-neutral-700 rounded-md whitespace-nowrap z-50 transition-opacity duration-150",
      arrow: "absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-neutral-800"
    };
  };

  const { tooltip, arrow } = getPositionClasses();

  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div
          className={tooltip}
          style={{ fontSize: "10px" }}
        >
          {content}
          <div className={arrow}></div>
        </div>
      )}
    </div>
  );
};

// 文本显示区域组件
const TextDisplay = ({ originalText, processedText, isProcessing, onCopy }: { originalText: string, processedText: React.ReactNode, isProcessing: boolean, onCopy: (text: string) => void }) => {
  if (!originalText && !processedText && !isProcessing) {
    return null;
  }

  return (
    <div className="space-y-6">
      {/* 原始识别文本 - 极简设计 */}
      {originalText && (
        <div className="group relative">
            <div className="absolute left-0 top-3 bottom-3 w-1 bg-slate-200 rounded-full opacity-50"></div>
            <div className="pl-4 py-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">原始识别</span>
                <button
                  onClick={() => onCopy(originalText)}
                  className="opacity-0 group-hover:opacity-100 p-1.5 hover:bg-slate-100 rounded-md transition-all duration-200"
                  title="复制识别文本"
                >
                  <Copy className="w-3.5 h-3.5 text-slate-400 hover:text-slate-700" />
                </button>
              </div>
              <p className="chinese-content text-slate-500 text-sm leading-relaxed">
                {originalText}
              </p>
            </div>
        </div>
      )}

      {/* AI处理后文本 - 高级卡片设计 */}
      {(processedText || isProcessing) && (
        <div className="bg-white dark:bg-black/40 backdrop-blur-md rounded-2xl p-6 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-slate-900 dark:bg-white"></div>
                <h3 className="text-sm font-semibold tracking-wide text-slate-900 dark:text-white uppercase">AI 优化结果</h3>
            </div>
            <div className="flex space-x-1">
              {processedText && (
                <>
                  <button
                    onClick={() => onCopy(typeof processedText === 'string' ? processedText : '')}
                    className="p-2 hover:bg-slate-50 dark:hover:bg-zinc-800 rounded-lg transition-colors text-slate-400 hover:text-slate-900 dark:text-gray-500 dark:hover:text-white"
                    title="复制优化文本"
                  >
                    <Copy className="w-4 h-4" />
                  </button>
                </>
              )}
            </div>
          </div>
          {isProcessing ? (
            <div className="flex flex-col items-center justify-center py-8 space-y-3 text-slate-400">
              <LoadingDots className="text-slate-900 dark:text-white" />
              <span className="text-xs tracking-widest uppercase">AI正在思考中</span>
            </div>
          ) : (
            <div className="chinese-content text-base leading-loose text-slate-800 dark:text-gray-200 font-normal">
               {/* Use structured content rendering if it's an object or just text */}
               {typeof processedText === 'string' ? processedText : processedText}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default function TalkTypeDemo() {
  const [step, setStep] = useState(0); // 0: idle, 1: recording, 2: processing, 3: optimizing, 4: done
  const [originalText, setOriginalText] = useState("");
  const [processedText, setProcessedText] = useState<React.ReactNode>(null);
  const [isHovered, setIsHovered] = useState(false);
  const pressTimer = useRef<NodeJS.Timeout | null>(null);

  // Demo Data
  const demoASRText = "那个...这周主要就是...跟进了那个TalkType的项目，额...完成了...那个前端页面的开发，然后...还修了几个bug，比较棘手的那个...崩溃的问题也解决了。下周的话...准备...额...做一下性能优化，对，还有...跟设计那边对一下新的UI图。";
  
  const demoAIContent = (
    <div className="text-slate-700 dark:text-slate-200 text-sm font-medium">
      <p className="font-bold mb-1">📅 本周工作汇报</p>
      <ul className="list-disc list-inside space-y-1">
        <li><span className="font-semibold">项目进度</span>：TalkType 项目跟进
          <ul className="list-[circle] list-inside ml-4 text-xs text-slate-500 dark:text-slate-400">
            <li>完成前端页面开发</li>
            <li>修复崩溃问题及若干 Bug</li>
          </ul>
        </li>
        <li><span className="font-semibold">下周计划</span>
          <ul className="list-[circle] list-inside ml-4 text-xs text-slate-500 dark:text-slate-400">
            <li>执行性能优化</li>
            <li>与设计团队对齐新 UI 方案</li>
          </ul>
        </li>
      </ul>
    </div>
  );

  const handleMouseDown = () => {
    if (step !== 0 && step !== 4) return; // Prevent restart if busy
    
    // Start Recording Simulation
    setStep(1);
    setOriginalText("");
    setProcessedText(null);
    
    // Simulate speech duration (e.g., 2 seconds)
    pressTimer.current = setTimeout(() => {
       // Ideally we wait for mouse up, but here we can just let it be "recording"
    }, 2000);
  };

  const handleMouseUp = () => {
    if (step !== 1) return;
    
    if (pressTimer.current) clearTimeout(pressTimer.current);
    
    // Transition to Processing
    setStep(2);
    
    // Simulate ASR Processing (1.5s)
    setTimeout(() => {
      setOriginalText(demoASRText);
      setStep(3); // Start Optimizing
      
      // Simulate AI Optimization (2s)
      setTimeout(() => {
        setProcessedText(demoAIContent);
        setStep(4); // Done
      }, 2000);
    }, 1500);
  };

  const resetDemo = () => {
    setStep(0);
    setOriginalText("");
    setProcessedText(null);
  };

  const handleCopyText = (text: string) => {
    // Just a mock
    console.log("Copied:", text);
  };

  // Determine Mic Button State for UI
  const getMicState = () => {
    if (step === 1) return "recording";
    if (step === 2) return "processing"; // ASR processing
    if (step === 3) return "optimizing"; // AI processing
    if (isHovered && step === 0) return "hover";
    return "idle";
  };

  const micState = getMicState();

  const getMicButtonProps = () => {
    // 物理按键风格基础类
    const baseClasses =
      "rounded-xl w-24 h-24 flex flex-col items-center justify-center relative transition-all duration-100 select-none active:scale-95 border-b-4 border-slate-300 dark:border-zinc-700 active:border-b-0 active:translate-y-1";

    const buttonStyle = `${baseClasses} bg-white dark:bg-zinc-800/80 backdrop-blur-sm border-x border-t border-slate-200 dark:border-zinc-700 shadow-sm hover:shadow-md`;

    switch (micState) {
      case "idle":
        return {
          className: `${buttonStyle} cursor-pointer group`,
          tooltip: `长按 Fn 键模拟语音输入`,
          disabled: false
        };
      case "hover":
        return {
          className: `${buttonStyle} cursor-pointer group`,
          tooltip: `长按 Fn 键模拟语音输入`,
          disabled: false
        };
      case "recording":
        return {
          className: `${buttonStyle} border-b-0 translate-y-1 cursor-pointer bg-slate-50 dark:bg-zinc-900/80 backdrop-blur-sm`,
          tooltip: "正在模拟录音...",
          disabled: false
        };
      case "processing":
        return {
          className: `${buttonStyle} border-slate-200 cursor-not-allowed opacity-80`,
          tooltip: "正在识别语音...",
          disabled: true
        };
      case "optimizing":
        return {
          className: `${buttonStyle} border-slate-200 cursor-not-allowed opacity-80`,
          tooltip: "AI正在优化文本...",
          disabled: true
        };
      default:
        return {
          className: `${buttonStyle} cursor-pointer`,
          tooltip: "点击开始演示",
          disabled: false
        };
    }
  };

  const micProps = getMicButtonProps();

  return (
    <div className="h-full bg-slate-50 dark:bg-transparent flex flex-col rounded-2xl overflow-hidden">
      {/* 标题栏 */}
      <div className="flex-shrink-0 flex items-center justify-between px-6 py-3 border-b border-slate-200/60 dark:border-zinc-800 bg-white/80 dark:bg-black/40 backdrop-blur-md shadow-sm">
        <div className="flex flex-col">
          <h1 className="text-lg font-bold text-slate-900 dark:text-white tracking-tight chinese-title">
            TalkType Demo
          </h1>
        </div>
        {step === 4 && (
            <button 
                onClick={resetDemo}
                className="text-sm text-slate-500 hover:text-slate-900 dark:hover:text-white px-3 py-1 rounded-md hover:bg-slate-100 dark:hover:bg-zinc-800 transition-colors"
            >
                重置演示
            </button>
        )}
      </div>

      <div className="flex-1 overflow-y-auto p-6 pb-8">
        <div className="max-w-3xl mx-auto min-h-full flex flex-col">
          {/* 录音控制区域 */}
          <div className="text-center mb-6 flex-shrink-0 flex flex-col items-center justify-center py-4">
          <Tooltip content={micProps.tooltip}>
            <button
              onMouseDown={handleMouseDown}
              onMouseUp={handleMouseUp}
              onMouseLeave={() => {
                  setIsHovered(false);
                  if (step === 1) handleMouseUp();
              }}
              onMouseEnter={() => {
                if (!micProps.disabled) {
                  setIsHovered(true);
                }
              }}
              className={`${micProps.className} non-draggable select-none font-mono text-2xl font-bold text-slate-400 dark:text-zinc-500`}
              disabled={micProps.disabled}
            >
              {/* 动态内容基于状态 */}
              {micState === "idle" || micState === "hover" ? (
                <span className={`transition-colors duration-300 ${isHovered ? 'text-slate-600 dark:text-zinc-300' : ''}`}>Fn</span>
              ) : micState === "recording" ? (
                <div className="w-3 h-3 rounded-sm bg-red-500 animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.6)]"></div>
              ) : micState === "processing" ? (
                <VoiceWaveIndicator isListening={true} />
              ) : micState === "optimizing" ? (
                <LoadingDots className="text-slate-900 dark:text-white" />
              ) : null}
            </button>
          </Tooltip>
          
          <p className="mt-3 text-sm font-medium tracking-wide text-slate-400 dark:text-gray-500 h-6">
            {micState === "recording" ? (
              <span className="text-red-500 animate-pulse">正在模拟录音...</span>
            ) : micState === "processing" ? (
              "正在识别..."
            ) : micState === "optimizing" ? (
              "AI 优化中..."
            ) : (
              <span className={`transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>长按 Fn 键开始演示</span>
            )}
          </p>
        </div>

        {/* 文本显示区域 */}
          <div className="flex-1 text-area-scroll">
            <TextDisplay
              originalText={originalText}
              processedText={processedText}
              isProcessing={step === 2 || step === 3}
              onCopy={handleCopyText}
            />
          </div>

          {/* 使用方式 */}
          <UsageGuide />
        </div>
      </div>
    </div>
  );
}
