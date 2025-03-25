import Image from "next/image"
import Link from "next/link"

export function TrendingSection() {
  return (
    <section className="relative py-24 lg:pb-40 flex flex-col items-center justify-start">
      <div className="mb-8 lg:mb-12">
        <h2
          className="text-white text-5xl lg:text-7xl lg:mt-6 xl:mt-12 font-medium pb-[0.15em]"
          style={{
            background: "linear-gradient(rgb(255, 255, 255) 50%, rgb(102, 102, 102) 100%) text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Trending
        </h2>
      </div>

      <div className="container relative mx-auto w-full">
        <div
          className="absolute w-[440px] h-[440px] left-1/2 -translate-x-1/2 -top-[240px] rounded-[440px] opacity-50 pointer-events-none"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(88, 74, 168, 0.5) 0%, rgba(0, 0, 0, 0.38) 100%)",
            filter: "blur(180px)",
          }}
        ></div>

        <div
          className="relative rounded-3xl w-full p-6 shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000]"
          style={{
            background: "linear-gradient(rgba(44, 49, 58, 0.15) 0%, rgba(13, 13, 13, 0.5) 100%), rgb(25, 27, 31)",
          }}
        >
          <div className="bg-[#0E100F] relative rounded-xl p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.50)_inset]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              <div className="flex flex-col justify-center lg:order-2">
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 rounded-xl overflow-hidden bg-white flex items-center justify-center">
                      <Image
                        src="/images/MagicEden Logo.jpg"
                        alt="Magic Eden Logo"
                        width={120}
                        height={120}
                        className="object-contain"
                        fetchPriority="high"
                      />
                    </div>
                    <h3 className="text-white text-3xl lg:text-4xl font-medium">NFTs on Monad</h3>
                  </div>

                  <p className="text-gray-200 text-xl leading-relaxed">
                    Win Fantasy Top tournaments for exclusive access to 20 whitelist NFT mints on Magic Eden. These
                    testnet NFTs unlock access to future mainnet mints!
                  </p>

                  <div className="flex flex-col items-start sm:flex-row lg:flex-col lg:items-start xl:flex-row gap-4 mt-4">
                    <Link
                      href="/nfts"
                      className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[#6E54FF] text-white shadow-[0px_1px_0.5px_0px_rgba(255,255,255,0.33)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] hover:bg-[#836EF9] hover:shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500]"
                    >
                      Explore NFT Collections
                    </Link>

                    <a
                      href="https://magiceden.us/monad-testnet"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[hsla(220,10%,12%,1)] text-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000] hover:bg-[hsla(220,10%,18%,1)] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500]"
                    >
                      See Mints on Magic Eden
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-center lg:order-1">
                <div className="w-full h-full flex items-center justify-center rounded-lg lg:rounded-lg overflow-hidden">
                  <Image
                    src="/images/MagicEdenFantasyTop.jpg"
                    alt="Magic Eden Fantasy Top"
                    width={600}
                    height={600}
                    className="w-full h-full object-contain"
                    fetchPriority="high"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

