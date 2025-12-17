"use client"

import { Heart, Music, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { colors } from "@/lib/utils"

export function OurStory() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="story"
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(circle at 30% 70%, rgba(170, 29, 29, 0.03) 0%, transparent 70%),
          radial-gradient(circle at 70% 30%, rgba(106, 106, 106, 0.02) 0%, transparent 70%),
          linear-gradient(135deg, #fff2cf 0%, #fff2cf 25%, #fff2cf 50%, #fff2cf 75%, #fff2cf 100%)
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle vintage paper texture overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            background: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 3px,
                rgba(0,0,0,0.005) 3px,
                rgba(0,0,0,0.005) 6px
              ),
              repeating-linear-gradient(
                -45deg,
                transparent,
                transparent 3px,
                rgba(0,0,0,0.005) 3px,
                rgba(0,0,0,0.005) 6px
              )
            `
          }}
        ></div>

        {/* Refined floating musical notes */}
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-pulse hidden sm:block"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              fontSize: `${Math.random() * 15 + 18}px`,
              color: colors.primary,
              opacity: 0.08,
              filter: `drop-shadow(0 0 6px rgba(170,29,29,0.1))`,
              textShadow: `0 0 8px rgba(170,29,29,0.15)`
            }}
          >
            {i % 3 === 0 ? "♪" : i % 3 === 1 ? "♫" : "♬"}
          </div>
        ))}

        {/* Elegant corner decorations */}
        <div
          className="absolute top-10 left-10 w-20 h-20 rounded-full animate-pulse opacity-15"
          style={{
            background: `conic-gradient(from 0deg, ${colors.primary}15, transparent, ${colors.primary}15)`,
            border: `1px solid ${colors.primary}20`
          }}
        ></div>

        <div
          className="absolute bottom-10 right-10 w-16 h-16 rounded-full animate-pulse opacity-12"
          style={{
            background: `conic-gradient(from 45deg, ${colors.secondary}15, transparent, ${colors.secondary}15)`,
            border: `1px solid ${colors.secondary}20`,
            animationDelay: "2s"
          }}
        ></div>
      </div>
       <div className="text-center relative flex justify-center">
              {/* Vintage decorative frame */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-32 h-1 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>

              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--background)]/80 via-[var(--background)]/70 to-[var(--background)]/80 px-5 py-3 rounded-full mb-6 border border-[var(--primary)]/50 shadow-lg backdrop-blur-sm">
                <Music className="h-5 w-5 text-[var(--primary)]" />
                <span className="text-[var(--foreground)] font-semibold text-base tracking-wide">Our Story</span>
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
              </div>
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 w-48 h-1 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div> */}
            </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div
            className={`order-2 lg:order-1 transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"
              }`}
          >
            <div className="relative group">
              {/* Refined vintage frame effect */}
              <div
                className="absolute -inset-2 sm:-inset-3 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700"
                style={{
                  background: `
                    linear-gradient(135deg, rgba(170,29,29,0.08) 0%, rgba(106,106,106,0.04) 50%, rgba(170,29,29,0.08) 100%)
                  `,
                  filter: 'blur(15px)'
                }}
              ></div>

              {/* Enhanced image with lighter styling */}
              <div
                className="relative rounded-2xl overflow-hidden"
                style={{
                  border: `2px solid ${colors.primary}20`,
                  boxShadow: `
                    0 10px 25px rgba(0,0,0,0.08),
                    0 0 15px rgba(170,29,29,0.05),
                    inset 0 1px 0 rgba(255,255,255,0.5)
                  `
                }}
              >
                <img
                  src="/piano-teacher-with-student-in-warm-vintage-music-r.jpg"
                  alt="Piano Teacher"
                  className="w-full h-64 sm:h-80 lg:h-96 xl:h-[500px] object-cover transform group-hover:scale-[1.03] transition-all duration-700"
                  style={{
                    filter: 'sepia(0.08) contrast(1.02) brightness(1.05) saturate(1.05)'
                  }}
                />

                {/* Lighter vintage overlay gradients */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: `
                      linear-gradient(135deg, rgba(170,29,29,0.04) 0%, transparent 40%, transparent 60%, rgba(106,106,106,0.02) 100%),
                      radial-gradient(circle at center, transparent 50%, rgba(139,69,19,0.02) 85%)
                    `
                  }}
                ></div>

                {/* Refined corner decorations */}
                <div
                  className="absolute top-4 left-4 w-6 h-6 rounded-full opacity-40"
                  style={{
                    background: `radial-gradient(circle, ${colors.primary}25, transparent)`,
                    border: `1px solid ${colors.primary}40`
                  }}
                ></div>

                <div
                  className="absolute bottom-4 right-4 w-5 h-5 rounded-full opacity-35"
                  style={{
                    background: `radial-gradient(circle, ${colors.secondary}25, transparent)`,
                    border: `1px solid ${colors.secondary}40`
                  }}
                ></div>
              </div>
            </div>
          </div>

          <div
            className={`order-1 lg:order-2 transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"
              }`}
          >
            <div className="text-center mb-6 sm:mb-12 md:mb-16 relative">
              {/* Vintage decorative frame */}
              {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-4 w-32 h-1 bg-gradient-to-r from-transparent via-amber-600/40 to-transparent"></div>

              <div className="inline-flex items-center space-x-3 bg-gradient-to-r from-[var(--background)]/80 via-[var(--background)]/70 to-[var(--background)]/80 px-5 py-3 rounded-full mb-6 border border-[var(--primary)]/50 shadow-lg backdrop-blur-sm">
                <Music className="h-5 w-5 text-[var(--primary)]" />
                <span className="text-[var(--foreground)] font-semibold text-base tracking-wide">Our Story</span>
                <div className="w-2 h-2 bg-[var(--primary)] rounded-full animate-pulse"></div>
              </div> */}
              {/* <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 translate-y-4 w-48 h-1 bg-gradient-to-r from-transparent via-amber-600/30 to-transparent"></div> */}
            </div>


            <div className="space-y-4 sm:space-y-6 leading-relaxed text-base sm:text-lg">
              <p
                className={`transition-all duration-700 delay-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{
                  color: colors.foreground,
                  textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.03)',
                  lineHeight: '1.7'
                }}
              >
                I'm Lakmal, a pianist and music teacher with a lifelong passion for helping others discover the joy of
                music.
              </p>

              <p
                className={`transition-all duration-700 delay-700 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{
                  color: colors.foreground,
                  textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.03)',
                  lineHeight: '1.7'
                }}
              >
                While guiding my students to find their first or next piano, I visited countless shops and noticed the
                same problem a lack of trust, guidance, and reliable instruments. This inspired me to create Kyle &
                Kylie Pianoforte in 2015.
              </p>

              <p
                className={`transition-all duration-700 delay-900 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{
                  color: colors.foreground,
                  textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.03)',
                  lineHeight: '1.7'
                }}
              >
                Since then, we've proudly delivered over{" "}
                <strong className="text-primary font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                  400 carefully selected, dependable pianos
                </strong>{" "}
                to homes, schools, and venues across Sri Lanka.
              </p>

              <div
                className={`backdrop-blur-sm p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg transition-all duration-500 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                  }`}
                style={{
                  transitionDelay: "1100ms",
                  background: `
                    linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,250,245,0.9) 100%),
                    radial-gradient(circle at top right, rgba(170,29,29,0.02) 0%, transparent 70%)
                  `,
                  border: `1.5px solid ${colors.primary}15`,
                  boxShadow: `
                    0 8px 20px rgba(0,0,0,0.06),
                    0 0 15px rgba(170,29,29,0.03),
                    inset 0 1px 0 rgba(255,255,255,0.6)
                  `
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 12px 30px rgba(0,0,0,0.08),
                    0 0 20px rgba(170,29,29,0.05),
                    inset 0 1px 0 rgba(255,255,255,0.7)
                  `;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = `
                    0 8px 20px rgba(0,0,0,0.06),
                    0 0 15px rgba(170,29,29,0.03),
                    inset 0 1px 0 rgba(255,255,255,0.6)
                  `;
                }}
              >
                <h3
                  className="font-bookman text-lg sm:text-xl lg:text-2xl font-semibold mb-4 sm:mb-6 text-balance"
                  style={{
                    color: colors.primary,
                    textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.08)'
                  }}
                >
                  Our mission is simple:
                </h3>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { icon: Music, text: "Help you find a reliable piano that matches your needs", delay: "1300ms", color: colors.primary },
                    { icon: Users, text: "Offer honest, expert guidance", delay: "1500ms", color: colors['chart-2'] },
                    { icon: Heart, text: "Be with you through every step of your musical journey", delay: "1700ms", color: colors.primary },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`flex items-start space-x-3 sm:space-x-4 group transition-all duration-500 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"
                        }`}
                      style={{ transitionDelay: item.delay }}
                    >
                      <div
                        className="p-2 rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0"
                        style={{
                          background: `
                            linear-gradient(135deg, ${item.color} 0%, rgba(170,29,29,0.85) 100%),
                            radial-gradient(circle at top left, rgba(255,255,255,0.25) 0%, transparent 70%)
                          `,
                          boxShadow: `
                            0 3px 10px rgba(170,29,29,0.15),
                            0 0 8px rgba(170,29,29,0.08),
                            inset 0 1px 0 rgba(255,255,255,0.4)
                          `
                        }}
                      >
                        <item.icon
                          className="h-4 w-4 sm:h-5 sm:w-5"
                          style={{ color: colors['primary-foreground'] }}
                        />
                      </div>
                      <span
                        className="group-hover:scale-[1.01] transition-all duration-300 flex-1 text-sm sm:text-base"
                        style={{
                          color: colors.foreground,
                          textShadow: '0.5px 0.5px 1px rgba(0,0,0,0.03)',
                          lineHeight: '1.6'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = colors.primary;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = colors.foreground;
                        }}
                      >
                        {item.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
