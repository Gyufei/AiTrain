import { MonadLogo } from "./monad-logo"

export default function Footer() {
  return (
    <footer className="w-full relative z-10">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <MonadLogo />
            </div>
            <div className="w-full flex flex-col gap-3">
              <span className="text-md font-normal text-white">Need Help? Check out the Testnet Onboarding Guide.</span>
              <a
                href="https://monad.xyz/post/monad-testnet-onboarding-guide"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[#6E54FF] text-white shadow-[0px_1px_0.5px_0px_rgba(255,255,255,0.33)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] hover:bg-[#836EF9] hover:shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500] w-fit"
              >
                Testnet Onboarding Guide
              </a>
            </div>
            <p className="text-sm text-neutral-400 mt-2">© 2025 Monad Foundation. All rights reserved.</p>
          </div>
          <div className="grid grid-cols-2 mt-8 lg:mt-0 sm:flex sm:flex-row gap-8 sm:gap-12 lg:gap-16 lg:justify-end">
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white">For Builders</h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://developers.monad.xyz/"
                >
                  Developer Portal
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://docs.monad.xyz/"
                >
                  Documentation
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://madness.monad.xyz/"
                >
                  Monad Madness
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://hackathon.monad.xyz/"
                >
                  evm/accathon
                </a>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white">Company</h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.monad.foundation/"
                >
                  Monad Foundation
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://monad.xyz/"
                >
                  Monad Protocol
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://jobs.ashbyhq.com/monad.foundation"
                >
                  Careers
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://monad.xyz/terms-of-service"
                >
                  Terms of Service
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://monad.xyz/privacy-policy"
                >
                  Privacy Policy
                </a>
                <button
                  className="text-left text-neutral-400 hover:text-white transition-colors duration-200"
                  type="button"
                >
                  Cookie Preferences
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="font-semibold text-white">Socials</h3>
              <div className="flex flex-col gap-2">
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://x.com/monad_xyz"
                >
                  Twitter
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/monad"
                >
                  Community Discord
                </a>
                <a
                  className="text-neutral-400 hover:text-white transition-colors duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://discord.gg/monaddev"
                >
                  Developer Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

