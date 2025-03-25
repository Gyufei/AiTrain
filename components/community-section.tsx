import Image from "next/image"

export function CommunitySection() {
  return (
    <section className="community_wrapper py-24 lg:pb-40 undefined">
      <div className="community_container container relative">
        <div
          className="hidden lg:block absolute -z-10 -top-12 -left-20 w-[240px] h-[240px] pointer-events-none opacity-0 blur-[10px] will-change-[opacity,filter,transform]"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "rotate(-15deg)",
            filter: "blur(0px)",
            opacity: 0.5,
          }}
        >
          <Image src="/images/doodles/Blob 1.svg" alt="Blob doodle" width={240} height={240} fetchPriority="high" />
        </div>

        <div
          className="hidden lg:block absolute -z-10 bottom-12 -right-20 w-[240px] h-[240px] pointer-events-none opacity-0 blur-[10px] will-change-[opacity,filter,transform]"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "rotate(15deg)",
            filter: "blur(0px)",
            opacity: 0.5,
          }}
        >
          <Image src="/images/doodles/Blob 2.svg" alt="Blob doodle" width={240} height={240} fetchPriority="high" />
        </div>

        <div
          className="hidden lg:block absolute -z-10 top-12 -right-24 w-[240px] h-[240px] pointer-events-none opacity-0 blur-[10px] will-change-[opacity,filter,transform]"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "rotate(20deg)",
            filter: "blur(0px)",
            opacity: 0.5,
          }}
        >
          <Image src="/images/doodles/Chog 1.svg" alt="Chog doodle" width={240} height={240} fetchPriority="high" />
        </div>

        <div
          className="hidden lg:block absolute -z-10 bottom-12 -left-24 w-[240px] h-[240px] pointer-events-none opacity-0 blur-[10px] will-change-[opacity,filter,transform]"
          style={{
            translate: "none",
            rotate: "none",
            scale: "none",
            transform: "rotate(-20deg)",
            filter: "blur(0px)",
            opacity: 0.5,
          }}
        >
          <Image
            src="/images/doodles/Molandak Blob 1.svg"
            alt="Molandak Blob doodle"
            width={240}
            height={240}
            fetchPriority="high"
          />
        </div>

        <div className="community_layout max-w-7xl mx-auto">
          <h2
            className="text-5xl lg:text-7xl text-white font-medium text-center mb-12 pb-[0.15em]"
            style={{
              background: "linear-gradient(rgb(255, 255, 255) 50%, rgb(102, 102, 102) 100%) text",
              WebkitTextFillColor: "transparent",
            }}
          >
            The Monad Communities
          </h2>

          <div
            className="relative w-full mb-12 rounded-3xl overflow-hidden"
            style={{
              boxShadow:
                "rgba(255, 255, 255, 0.12) 0px 1px 1px 0px inset, rgba(0, 0, 0, 0.08) 0px 1px 2px 0px, rgb(0, 0, 0) 0px 0px 0px 1px",
              aspectRatio: "1200 / 514.29",
            }}
          >
            <Image
              src="/images/CommunityPhoto.png"
              alt="Monad Communities"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 1200px"
              fetchPriority="high"
              priority
            />
          </div>

          <div className="flex flex-col lg:flex-row gap-6 items-center lg:items-stretch justify-center">
            <CommunityCard
              title="Monad Twitter"
              description="Stay up to date with the latest on the Monad ecosystem. Learn about the technology, initiatives and more."
              buttonText="Follow on X"
              buttonLink="https://twitter.com/monad_xyz"
              logoSrc="/images/x-logo.svg"
            />

            <CommunityCard
              title="Community Discord"
              description="Make friends, share art and memes, learn about Web3, and land new opportunities in our Monad Community Discord!"
              buttonText="Join now"
              buttonLink="https://discord.gg/monad"
              logoSrc="/images/discord-logo.svg"
            />

            <CommunityCard
              title="Developer Discord"
              description="Connect with fellow builders, land new opportunities, and grow your skills in our Developer-focused Monad Discord."
              buttonText="Join now"
              buttonLink="https://discord.gg/monaddev"
              logoSrc="/images/code-logo.svg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

interface CommunityCardProps {
  title: string
  description: string
  buttonText: string
  buttonLink: string
  logoSrc: string
}

function CommunityCard({ title, description, buttonText, buttonLink, logoSrc }: CommunityCardProps) {
  return (
    <div className="bg-panel w-full max-w-[320px] min-h-[244px] flex justify-center">
      <div className="relative w-full max-w-[420px] rounded-[24px] p-[1px] overflow-hidden">
        <div
          className="absolute w-[440px] h-[440px] left-1/2 -translate-x-1/2 -top-[240px] rounded-[440px] opacity-50"
          style={{
            background: "radial-gradient(50% 50% at 50% 50%, rgba(88, 74, 168, 0.5) 0%, rgba(0, 0, 0, 0.38) 100%)",
            filter: "blur(180px)",
          }}
        ></div>

        <div
          className="content-container h-full relative rounded-[24px] w-full p-6 flex flex-col gap-1 items-start justify-start bg-[#1E2126] shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000]"
          style={{ background: "linear-gradient(rgba(11, 12, 14, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%), rgb(24, 26, 31)" }}
        >
          <h3 className="text-xl text-white font-medium mb-2">{title}</h3>
          <p className="text-white/60 text-sm mb-6 flex-grow">{description}</p>

          <a
            href={buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[hsla(220,10%,12%,1)] text-white shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000] hover:bg-[hsla(220,10%,18%,1)] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500] w-fit"
          >
            {buttonText}
          </a>

          <div className="absolute bottom-[-16px] right-0">
            <Image src={logoSrc || "/placeholder.svg"} alt={title} width={120} height={120} className="opacity-70" />
          </div>
        </div>
      </div>
    </div>
  )
}

