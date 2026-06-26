"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Joint = "hip" | "knee" | null;
type Duration = "under3" | "3to12" | "over12" | null;
type Treatments = "yes" | "no" | null;

interface QuizState {
  joint: Joint;
  pain: number;
  duration: Duration;
  treatments: Treatments;
}

const init: QuizState = { joint: null, pain: 7, duration: null, treatments: null };

const slideIn = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.22,1,0.36,1] as [number,number,number,number] } },
  exit:    { opacity: 0, x: -30, transition: { duration: 0.25 } },
};

function CheckCircle() {
  return (
    <span className="w-5 h-5 rounded-full bg-[#C8A25A] flex items-center justify-center shrink-0">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20,6 9,17 4,12"/>
      </svg>
    </span>
  );
}

function HipSVG() {
  return (
    <svg viewBox="0 0 100 132" fill="none" className="w-28 h-32 sm:w-32 sm:h-36">
      {/* Iliac crest arch */}
      <path d="M6 56 C4 34 18 6 50 3 C82 6 96 34 94 56"
        stroke="#C8A25A" strokeWidth="3" strokeLinecap="round"
        fill="rgba(200,162,90,0.09)"/>
      {/* Left acetabular wall */}
      <path d="M6 56 C7 70 14 80 24 86"
        stroke="#C8A25A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Right acetabular wall */}
      <path d="M94 56 C93 70 86 80 76 86"
        stroke="#C8A25A" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
      {/* Acetabular floor */}
      <path d="M24 86 C36 94 64 94 76 86"
        stroke="#C8A25A" strokeWidth="2.5" strokeLinecap="round"
        fill="rgba(200,162,90,0.07)"/>
      {/* Cartilage joint space */}
      <path d="M26 85 C38 92 62 92 74 85"
        stroke="rgba(200,162,90,0.4)" strokeWidth="1.2" strokeDasharray="4 3" fill="none"/>
      {/* Femoral head — the ball */}
      <circle cx="50" cy="88" r="26"
        stroke="#C8A25A" strokeWidth="3.2" fill="rgba(200,162,90,0.2)"/>
      {/* Superior highlight arc */}
      <path d="M36 74 A16 12 0 0 1 62 70"
        stroke="rgba(200,162,90,0.65)" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
      {/* Femoral neck — medial cortex */}
      <line x1="36" y1="110" x2="24" y2="129"
        stroke="#C8A25A" strokeWidth="3" strokeLinecap="round"/>
      {/* Femoral neck — lateral cortex */}
      <line x1="63" y1="110" x2="76" y2="126"
        stroke="#C8A25A" strokeWidth="3" strokeLinecap="round"/>
      {/* Greater trochanter */}
      <path d="M76 115 C87 108 95 113 95 125 C95 134 86 139 77 136 L76 127"
        stroke="#C8A25A" strokeWidth="2.3" strokeLinecap="round"
        fill="rgba(200,162,90,0.11)"/>
    </svg>
  );
}

function KneeSVG() {
  return (
    <svg viewBox="0 0 100 148" fill="none" className="w-28 h-32 sm:w-32 sm:h-36">
      {/* Femoral shaft */}
      <path d="M36 4 C34 4 33 7 33 13 L33 46 C30 56 26 66 22 74 L78 74 C74 66 70 56 67 46 L67 13 C67 7 66 4 64 4 Z"
        stroke="#C8A25A" strokeWidth="2.3" fill="rgba(200,162,90,0.1)"/>
      {/* Medial femoral condyle */}
      <ellipse cx="30" cy="82" rx="16" ry="13"
        stroke="#C8A25A" strokeWidth="3" fill="rgba(200,162,90,0.2)"/>
      {/* Lateral femoral condyle */}
      <ellipse cx="70" cy="82" rx="16" ry="13"
        stroke="#C8A25A" strokeWidth="3" fill="rgba(200,162,90,0.2)"/>
      {/* Intercondylar notch */}
      <path d="M46 80 C50 87 54 87 54 80"
        stroke="#C8A25A" strokeWidth="1.6" fill="rgba(200,162,90,0.06)" strokeLinecap="round"/>
      {/* Cartilage joint space */}
      <path d="M14 97 C32 94 68 94 86 97"
        stroke="rgba(200,162,90,0.45)" strokeWidth="1.3" strokeDasharray="5 3" fill="none"/>
      {/* Tibial spines */}
      <path d="M44 97 L48 89" stroke="#C8A25A" strokeWidth="2.2" strokeLinecap="round"/>
      <path d="M56 97 L52 89" stroke="#C8A25A" strokeWidth="2.2" strokeLinecap="round"/>
      {/* Tibial plateau */}
      <path d="M12 99 L88 99 L89 109 L11 109 Z"
        stroke="#C8A25A" strokeWidth="2.3" fill="rgba(200,162,90,0.16)"/>
      {/* Tibia shaft */}
      <path d="M20 109 L16 144 L62 144 L62 109 Z"
        stroke="#C8A25A" strokeWidth="2.2" fill="rgba(200,162,90,0.1)"/>
      {/* Fibula head */}
      <ellipse cx="78" cy="116" rx="8" ry="10"
        stroke="#C8A25A" strokeWidth="2.2" fill="rgba(200,162,90,0.13)"/>
      {/* Fibula shaft */}
      <path d="M74 126 L72 144 L84 144 L82 126"
        stroke="#C8A25A" strokeWidth="2" fill="rgba(200,162,90,0.08)"/>
    </svg>
  );
}

function NavRow({ onNext, canNext, onPrev, showPrev }: {
  onNext: () => void; canNext: boolean; onPrev: () => void; showPrev: boolean;
}) {
  return (
    <div className="flex items-center justify-between mt-8 pt-6 border-t border-[#E0DDD8]">
      {showPrev ? (
        <button onClick={onPrev} className="flex items-center gap-1.5 text-[#061B33]/50 hover:text-[#061B33] text-sm font-medium transition-colors">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12,19 5,12 12,5"/>
          </svg>
          Back
        </button>
      ) : <div />}
      <button
        onClick={onNext}
        disabled={!canNext}
        className="flex items-center gap-2 font-bold text-[12px] tracking-[0.1em] uppercase px-6 py-3 rounded-lg transition-all duration-200"
        style={{
          background: canNext ? "#C8A25A" : "#E5E2DC",
          color: canNext ? "#061B33" : "#aaa",
          cursor: canNext ? "pointer" : "not-allowed",
        }}
      >
        Next
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12,5 19,12 12,19"/>
        </svg>
      </button>
    </div>
  );
}

export default function PatientQuiz() {
  const [step, setStep] = useState(0);
  const [quiz, setQuiz] = useState<QuizState>(init);

  const canNext = () => {
    if (step === 0) return quiz.joint !== null;
    if (step === 1) return true;
    if (step === 2) return quiz.duration !== null;
    if (step === 3) return quiz.treatments !== null;
    return false;
  };

  const next = () => { if (step < 4) setStep((s) => s + 1); };
  const prev = () => { if (step > 0) setStep((s) => s - 1); };
  const reset = () => { setStep(0); setQuiz(init); };

  const sliderPct = (quiz.pain / 10) * 100;

  return (
    <section
      id="quiz"
      className="py-16 sm:py-20 lg:py-28"
      style={{ background: "linear-gradient(180deg,#061B33 0%,#040F1E 100%)" }}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid lg:grid-cols-[260px_1fr] gap-10 lg:gap-14 items-start">

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:pt-4"
          >
            <p className="text-[#C8A25A] text-[11px] tracking-[0.3em] uppercase font-semibold mb-4">
              Interactive Experience
            </p>
            <h2
              className="text-white font-bold leading-[1.1] mb-4"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: "clamp(1.7rem,2.6vw,2.3rem)",
              }}
            >
              Is robotic joint replacement right for me?
            </h2>
            <p className="text-white/50 text-[14px] leading-relaxed mb-8">
              Answer a few quick questions to get personalized insights.
            </p>
            {/* Step dots */}
            <div className="flex items-center gap-2">
              {["Joint","Pain","Duration","Treatments","Result"].map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-400"
                  style={{
                    width: i === step ? 28 : 8,
                    height: 8,
                    background: i <= step ? "#C8A25A" : "rgba(255,255,255,0.15)",
                  }}
                />
              ))}
            </div>
          </motion.div>

          {/* Quiz card */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">

              {/* Step 0: Joint */}
              {step === 0 && (
                <motion.div key="s0" {...slideIn}>
                  <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#F8F7F4" }}>
                    <p className="text-[#061B33] font-bold text-lg sm:text-xl mb-6">
                      01 &nbsp; Which joint is causing you pain?
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      {(["hip","knee"] as const).map((j) => (
                        <button
                          key={j}
                          onClick={() => setQuiz((q) => ({ ...q, joint: j }))}
                          className="quiz-option border-2 rounded-xl py-6 px-4 flex flex-col items-center gap-4 relative transition-all duration-200"
                          style={{
                            borderColor: quiz.joint === j ? "#C8A25A" : "rgba(200,162,90,0.25)",
                            background: quiz.joint === j
                              ? "linear-gradient(160deg,#0D2845 0%,#061B33 100%)"
                              : "linear-gradient(160deg,#0B1F38 0%,#061428 100%)",
                            boxShadow: quiz.joint === j ? "0 0 0 1px rgba(200,162,90,0.3), inset 0 0 30px rgba(200,162,90,0.06)" : "none",
                          }}
                        >
                          {quiz.joint === j && <div className="absolute top-3 right-3"><CheckCircle /></div>}
                          {j === "hip" ? <HipSVG /> : <KneeSVG />}
                          <span className="text-[#C8A25A] font-bold text-[11px] tracking-[0.2em] uppercase">{j}</span>
                        </button>
                      ))}
                    </div>
                    <NavRow onNext={next} canNext={canNext()} onPrev={prev} showPrev={false} />
                  </div>
                </motion.div>
              )}

              {/* Step 1: Pain level */}
              {step === 1 && (
                <motion.div key="s1" {...slideIn}>
                  <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#F8F7F4" }}>
                    <p className="text-[#061B33] font-bold text-lg sm:text-xl mb-6">
                      02 &nbsp; How would you rate your pain?
                    </p>
                    <div className="text-center mb-6">
                      <span
                        className="text-[#061B33] font-bold leading-none"
                        style={{ fontSize: "clamp(4rem,12vw,6rem)" }}
                      >
                        {quiz.pain}
                      </span>
                    </div>
                    <div className="px-1 mb-3">
                      <input
                        type="range" min={0} max={10} value={quiz.pain}
                        onChange={(e) => setQuiz((q) => ({ ...q, pain: Number(e.target.value) }))}
                        className="w-full"
                        style={{ "--val": `${sliderPct}%` } as React.CSSProperties}
                      />
                    </div>
                    <div className="flex justify-between text-[#061B33]/40 text-[12px] mb-2">
                      <span>No pain</span><span>Severe pain</span>
                    </div>
                    <NavRow onNext={next} canNext={true} onPrev={prev} showPrev />
                  </div>
                </motion.div>
              )}

              {/* Step 2: Duration */}
              {step === 2 && (
                <motion.div key="s2" {...slideIn}>
                  <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#F8F7F4" }}>
                    <p className="text-[#061B33] font-bold text-lg sm:text-xl mb-6">
                      03 &nbsp; How long have you been experiencing pain?
                    </p>
                    <div className="space-y-3">
                      {([
                        { val: "under3" as const, label: "< 3 months" },
                        { val: "3to12" as const, label: "3 – 12 months" },
                        { val: "over12" as const, label: "> 12 months" },
                      ]).map(({ val, label }) => (
                        <button
                          key={val}
                          onClick={() => setQuiz((q) => ({ ...q, duration: val }))}
                          className="quiz-option w-full border-2 rounded-xl px-5 py-4 text-left flex items-center justify-between transition-all"
                          style={{
                            borderColor: quiz.duration === val ? "#C8A25A" : "#E0DDD8",
                            background: quiz.duration === val ? "rgba(200,162,90,0.07)" : "transparent",
                            color: "#061B33",
                          }}
                        >
                          <span className="font-medium text-[15px]">{label}</span>
                          {quiz.duration === val && <CheckCircle />}
                        </button>
                      ))}
                    </div>
                    <NavRow onNext={next} canNext={canNext()} onPrev={prev} showPrev />
                  </div>
                </motion.div>
              )}

              {/* Step 3: Treatments */}
              {step === 3 && (
                <motion.div key="s3" {...slideIn}>
                  <div className="rounded-2xl p-6 sm:p-8" style={{ background: "#F8F7F4" }}>
                    <p className="text-[#061B33] font-bold text-lg sm:text-xl mb-6">
                      04 &nbsp; Have you tried other treatments?
                    </p>
                    <div className="space-y-3">
                      {([
                        { val: "yes" as const, label: "Yes, I've tried injections / PT" },
                        { val: "no" as const, label: "No, not yet" },
                      ]).map(({ val, label }) => (
                        <button
                          key={val}
                          onClick={() => setQuiz((q) => ({ ...q, treatments: val }))}
                          className="quiz-option w-full border-2 rounded-xl px-5 py-4 text-left flex items-center justify-between transition-all"
                          style={{
                            borderColor: quiz.treatments === val ? "#C8A25A" : "#E0DDD8",
                            background: quiz.treatments === val ? "rgba(200,162,90,0.07)" : "transparent",
                            color: "#061B33",
                          }}
                        >
                          <span className="font-medium text-[15px]">{label}</span>
                          {quiz.treatments === val && <CheckCircle />}
                        </button>
                      ))}
                    </div>
                    <NavRow onNext={next} canNext={canNext()} onPrev={prev} showPrev />
                  </div>
                </motion.div>
              )}

              {/* Step 4: Result */}
              {step === 4 && (
                <motion.div key="s4" initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.45 }}>
                  <div
                    className="rounded-2xl p-7 sm:p-10"
                    style={{
                      background: "linear-gradient(145deg,#0B2145 0%,#061530 100%)",
                      border: "1px solid rgba(200,162,90,0.22)",
                    }}
                  >
                    <div className="w-14 h-14 rounded-full bg-[#C8A25A]/15 border-2 border-[#C8A25A]/40 flex items-center justify-center mx-auto mb-6">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#C8A25A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                      </svg>
                    </div>
                    <h3
                      className="text-white font-bold text-center mb-4 leading-snug"
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: "clamp(1.3rem,2.5vw,1.8rem)",
                      }}
                    >
                      A consultation can help confirm your options.
                    </h3>
                    <p className="text-white/55 text-[14px] sm:text-[15px] leading-relaxed text-center mb-8 max-w-[400px] mx-auto">
                      Based on your answers, you may be a candidate for robotic-assisted
                      joint replacement. The next step is a personalized evaluation with Dr. Ahmed.
                    </p>
                    <div className="space-y-3 max-w-[340px] mx-auto">
                      <a
                        href="#contact"
                        className="block bg-[#C8A25A] hover:bg-[#D9B96E] text-[#061B33] font-bold px-7 py-3.5 rounded text-[13px] tracking-[0.08em] uppercase transition-all text-center"
                      >
                        Request a Consultation
                      </a>
                      <button onClick={reset} className="block w-full text-white/35 hover:text-white/60 text-[12px] transition-colors py-2 text-center">
                        Start over
                      </button>
                    </div>

                    {/* Summary */}
                    <div className="mt-8 pt-6 border-t border-white/8 grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {[
                        { label: "Joint", value: quiz.joint },
                        { label: "Pain", value: `${quiz.pain}/10` },
                        { label: "Duration", value: quiz.duration === "under3" ? "< 3 mo" : quiz.duration === "3to12" ? "3-12 mo" : "> 12 mo" },
                        { label: "Tried PT", value: quiz.treatments === "yes" ? "Yes" : "Not yet" },
                      ].map(({ label, value }) => (
                        <div key={label}>
                          <p className="text-white/30 text-[10px] uppercase tracking-widest mb-1">{label}</p>
                          <p className="text-white font-semibold text-sm capitalize">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
