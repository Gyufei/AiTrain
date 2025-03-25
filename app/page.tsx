import { GettingStartedSection } from "@/components/getting-started-section"
import { TrendingSection } from "@/components/trending-section"
import { CommunitySection } from "@/components/community-section"

export default function Home() {
  return (
    <div className="page-wrap relative flex flex-col flex-nowrap w-full min-h-[100svh]">
      <div className="main-wrap relative z-10 flex flex-col items-center justify-center grow w-full">
        <GettingStartedSection />
        <TrendingSection />
        <CommunitySection />
      </div>
    </div>
  )
}

