"use client"

import { useState } from "react"
import Image from "next/image"
import { Wallet, HandCoins, Trophy, Coins, Earth, Code, BookText, Users } from "lucide-react"

export function GettingStartedSection() {
  const [activeTab, setActiveTab] = useState("play")

  return (
    <section className="getting-started_wrapper container py-24" id="getting-started">
      <h2
        className="text-white text-5xl lg:text-7xl font-medium w-full text-center mb-12 lg:mb-20 pb-[0.15em]"
        style={{
          background: "linear-gradient(rgb(255, 255, 255) 50%, rgb(102, 102, 102) 100%) text",
          WebkitTextFillColor: "transparent",
        }}
      >
        Getting Started
      </h2>

      <div className="getting-started-layout flex flex-col items-center justify-between lg:flex-row lg:items-start gap-12 relative">
        <div
          className="getting-started_instructions w-full lg:w-[60%] max-w-[420px] relative px-6 py-6 overflow-hidden rounded-3xl shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000]"
          style={{ background: "linear-gradient(rgba(44, 49, 58, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%), rgb(25, 27, 31)" }}
        >
          <div
            className="absolute left-1/2 -translate-x-1/2 -top-[320px] w-[480px] h-[480px] flex-shrink-0 rounded-[480px] opacity-30 z-10 pointer-events-none"
            style={{
              aspectRatio: "1 / 1",
              background: "radial-gradient(50% 50% at 50% 50%, rgba(88, 74, 120, 0.7) 0%, rgba(0, 0, 0, 0.38) 100%)",
              filter: "blur(90px)",
            }}
          ></div>

          <div className="flex flex-col items-start lg:items-start">
            <div className="toggle-container w-full flex justify-center sm:justify-start mb-4">
              <div className="relative">
                <div
                  className="absolute inset-0 rounded-[1000px] opacity-0"
                  style={{ pointerEvents: "none", boxShadow: "none", opacity: 0 }}
                ></div>

                <div
                  className="toggle-switch_container relative flex items-center bg-[#0E100F] rounded-[1000px] p-[4px] w-[260px] md:w-[280px] shadow-[0px_2px_2px_0px_#000_inset]"
                  style={{ translate: "none", rotate: "none", scale: "none", transform: "translate(0px, 0px)" }}
                >
                  <div
                    className={`absolute h-[88%] w-[48%] rounded-[99999px] transition-all duration-300 ease-in-out shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000] bg-[hsla(220,10%,14%,1)] ${activeTab === "build" ? "left-[51%]" : "left-[1%]"}`}
                  ></div>

                  <button
                    className={`flex-1 py-1.5 px-3 rounded-full text-base md:text-lg leading-none font-medium transition-all duration-300 z-10 ${activeTab === "play" ? "text-white" : "text-white/60 hover:text-white"}`}
                    onClick={() => setActiveTab("play")}
                  >
                    Play
                  </button>

                  <button
                    className={`flex-1 py-1.5 px-3 rounded-full text-base md:text-lg leading-none font-medium transition-all duration-300 z-10 ${activeTab === "build" ? "text-white" : "text-white/60 hover:text-white"}`}
                    onClick={() => setActiveTab("build")}
                  >
                    Build
                  </button>
                </div>
              </div>
            </div>

            <div className={`user-instructions w-full max-w-[480px] ${activeTab === "play" ? "" : "hidden"}`}>
              <div className="user-instructions-header">
                <h3 className="text-white text-xl font-medium">Things to do:</h3>
              </div>
              <ul className="space-y-4 mt-6 text-white">
                <li className="flex items-center gap-3 text-lg">
                  <HandCoins className="w-5 h-5" style={{ color: "rgb(131, 110, 249)" }} />
                  <span>Get Testnet tokens</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <Trophy className="w-5 h-5" style={{ color: "rgb(131, 110, 249)" }} />
                  <span>Build your Fantasy Top deck</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <Coins className="w-5 h-5" style={{ color: "rgb(131, 110, 249)" }} />
                  <span>Make a trade</span>
                </li>
                <li className="flex items-center gap-3 text-lg">
                  <Earth className="w-5 h-5" style={{ color: "rgb(131, 110, 249)" }} />
                  <span>Explore the Monad Ecosystem</span>
                </li>
              </ul>
              <div className="flex flex-col w-full lg:w-fit mt-8 max-w-[540px]">
                <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[hsla(220,10%,12%,1)] text-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000] hover:bg-[hsla(220,10%,18%,1)] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500]">
                  Add Monad Testnet
                </button>
              </div>
            </div>

            <div className={`builder-instructions w-full max-w-[480px] ${activeTab === "build" ? "" : "hidden"}`}>
              <div className="builder-instructions-header">
                <h3 className="text-white text-xl font-medium">Things to do:</h3>
              </div>
              <ul className="space-y-4 mt-6 text-white">
                <li className="flex items-center gap-3 text-lg">
                  <HandCoins className="w-5 h-5" style={{ color: "rgb(131, 110, 249)" }} />
                  <span>Get Testnet tokens</span>
                </li>
                <li className="group relative flex text-lg bg-[#836EF9]/[0.06] hover:bg-[#836EF9]/[0.15] border border-[#836EF9]/10 hover:border-[#836EF9]/20 rounded-lg text-white/90 hover:text-white transition-all duration-300 p-0">
                  <a
                    href="https://developers.monad.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-1 px-3 min-w-full w-fit"
                  >
                    <Code
                      className="w-5 h-5 transition-all duration-300 group-hover:rotate-[20deg] group-hover:scale-110 origin-center shrink-0"
                      style={{ color: "rgb(131, 110, 249)" }}
                    />
                    <span>Check out the Developer Portal</span>
                  </a>
                </li>
                <li className="group relative flex text-lg bg-[#836EF9]/[0.06] hover:bg-[#836EF9]/[0.15] border border-[#836EF9]/10 hover:border-[#836EF9]/20 rounded-lg text-white/90 hover:text-white transition-all duration-300 p-0">
                  <a
                    href="https://docs.monad.xyz"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-1 px-3 min-w-full w-fit"
                  >
                    <BookText
                      className="w-5 h-5 transition-all duration-300 group-hover:scale-125 group-hover:-rotate-[8deg] origin-center shrink-0"
                      style={{ color: "rgb(131, 110, 249)" }}
                    />
                    <span>Learn how Monad works</span>
                  </a>
                </li>
                <li className="group relative flex text-lg bg-[#836EF9]/[0.06] hover:bg-[#836EF9]/[0.15] border border-[#836EF9]/10 hover:border-[#836EF9]/20 rounded-lg text-white/90 hover:text-white transition-all duration-300 p-0">
                  <a
                    href="https://discord.gg/monaddev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 py-1 px-3 min-w-full w-fit"
                  >
                    <Users
                      className="w-5 h-5 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:scale-110 group-hover:rotate-2 shrink-0"
                      style={{ color: "rgb(131, 110, 249)" }}
                    />
                    <span>Join the Developer community</span>
                  </a>
                </li>
              </ul>
              <div className="flex flex-col w-full lg:w-fit mt-8 max-w-[540px]">
                <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[hsla(220,10%,12%,1)] text-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000] hover:bg-[hsla(220,10%,18%,1)] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500]">
                  Add Monad Testnet
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="hidden xl:block relative">
          <div className="absolute top-1/2 -translate-x-[5%] translate-y-1/5 w-[240px] pointer-events-none opacity-50">
            <Image
              src="/images/doodles/User.svg"
              alt="User illustration"
              width={240}
              height={240}
              className="transition-all duration-500"
              fetchPriority="high"
            />
          </div>
        </div>

        <div className="faucet-wrapper w-full lg:w-[40%] flex flex-col items-center relative z-10">
          <div className="relative w-full max-w-[420px]">
            <div className="faucet-container-div relative">
              <div className="relative w-full rounded-3xl p-[1px] overflow-hidden">
                <div
                  className="faucet-container relative p-6 rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000]"
                  style={{
                    background: "linear-gradient(rgba(44, 49, 58, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%), rgb(25, 27, 31)",
                  }}
                >
                  <div
                    className="absolute left-1/2 -translate-x-1/2 -top-[320px] w-[480px] h-[480px] flex-shrink-0 rounded-[480px] opacity-30 pointer-events-none"
                    style={{
                      aspectRatio: "1 / 1",
                      background:
                        "radial-gradient(50% 50% at 50% 50%, rgba(88, 74, 120, 0.7) 0%, rgba(0, 0, 0, 0.38) 100%)",
                      filter: "blur(90px)",
                    }}
                  ></div>

                  <div className="wallet-address-container flex flex-col items-center space-y-6 max-w-[440px] w-full">
                    <div className="w-full">
                      <label className="block text-sm font-normal text-white mb-2">Enter wallet address</label>
                      <div className="relative">
                        <Wallet className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-white transition-opacity duration-350 opacity-50" />
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-[linear-gradient(180deg,_#0D0D0D_0%,_#050505_100%)] pl-10 border-none text-white placeholder:text-white/50 shadow-[inset_0px_4px_4px_rgba(0,0,0,0.50)]"
                          placeholder="0x8ce78...28161"
                          type="text"
                        />
                      </div>
                      <p className="mt-2 text-xs text-white/50">(Maximum 1 request every 12 hours)</p>
                    </div>

                    <div className="w-full">
                      <div>
                        <input type="hidden" name="cf-turnstile-response" id="cf-chl-widget-vx9or_response" value="" />
                      </div>
                    </div>

                    <button className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-[cubic-bezier(0.34,1.56,0.64,1)] bg-[#6E54FF] text-white shadow-[0px_1px_0.5px_0px_rgba(255,255,255,0.33)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] hover:bg-[#836EF9] hover:shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500] w-full">
                      <span>Get Testnet MON</span>
                    </button>

                    <p className="text-white/50 text-xs font-light !mt-4">
                      Testnet tokens are for development purposes only, they do not have real value.
                      <br />
                      <br />
                      Note: previous Discord criteria has been disabled due to rate limits.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="text-white text-center max-w-none text-xs mt-4 mx-auto font-light leading-relaxed bg-[#836EF9]/[0.08] border border-[#836EF9]/50 rounded-lg p-3">
              <span className="font-bold">Note:</span> If you're having trouble with the faucet, check your existing EVM
              addresses - there might be something there! 👀
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

