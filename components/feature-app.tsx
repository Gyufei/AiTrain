'use client';

import { useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

// App data type
interface App {
  id: string;
  name: string;
  description: string;
  logo: string;
  banner: string;
  appUrl: string;
  twitterUrl: string;
}

// Sample app data
const apps: App[] = [
  {
    id: 'odyssey',
    name: 'Odyssey',
    description: 'Your gateway to privacy. Play Encrypted Rock Paper Scissors, encrypt your vote & more!',
    logo: '/images/fe13521f724898b4906ac4b6accd816b1dcb5332-400x400.png',
    banner: '/images/b1287bef7d0d31dcdbed125c0998488c645e2b2d-1500x500.png',
    appUrl: 'https://odyssey.gateway.tech/',
    twitterUrl: 'https://x.com/Gateway_xyz',
  },
  {
    id: 'bean-exchange',
    name: 'Bean Exchange',
    description: 'Trade Monanimal perps and more with leverage and compete to earn Bean Points.',
    logo: '/images/f8a135acc05e0317d8afee44f06577d44d7b78ad-400x400.jpg',
    banner: '/images/f64a74b0ad25294f85d1de21310993b22ff8d531-1500x500.jpg',
    appUrl: 'https://perp.bean.exchange',
    twitterUrl: 'https://x.com/Bean_DEX',
  },
  {
    id: 'lfj',
    name: 'LFJ',
    description: 'Find and trade any token on Monad or head to the Token Mill and create your own meme.',
    logo: '/images/42face315664c16e1b3056cd8e088d43f8405b9b-400x400.jpg',
    banner: '/images/109f4bddbef7cfe3d2820c80ea5555bc8b07a80c-1500x500.jpg',
    appUrl: 'https://pandaria.lfj.gg/',
    twitterUrl: 'https://pandaria.lfj.gg/',
  },
  {
    id: 'kuru',
    name: 'Kuru',
    description: 'Find and trade all your favorite Monad tokens on an onchain CLOB.',
    logo: '/images/f757d446ac7b2d76a15c9d2e706a6168b0498221-400x400.jpg',
    banner: '/images/650d263112c275af8ca26a7b5d4a5668ba592aee-1432x675.jpg',
    appUrl: 'https://www.kuru.io/markets',
    twitterUrl: 'https://x.com/KuruExchange',
  },
  {
    id: 'dusted',
    name: 'Dusted',
    description:
      'Connect with community members in chat rooms built around tokens you own, earn Dusted points, and win prizes from other Monad projects.',
    logo: '/images/daa2291e56371c8c5f53b50050ae36dc6bd426d3-401x401.png',
    banner: '/images/9e5229e1b6157a97013a1d4f2581f4a768b5145e-1500x500.jpg',
    appUrl: 'https://dusted.app',
    twitterUrl: 'https://x.com/dusted_app',
  },
  {
    id: 'kizzy',
    name: 'Kizzy',
    description:
      'Predict performance on your top Youtube and X influencers. Rank up, climb the leaderboard, and collect Purple K. Use code: GMONAD',
    logo: '/images/384e3a77e0c908410aa4a7e511e20b882c6f62f1-1280x1280.jpg',
    banner: '/images/3c037023d6f1221730b8d8cc52a10e23fbdacaf2-1200x675.jpg',
    appUrl: 'https://kizzy.io',
    twitterUrl: 'https://x.com/kizzymobile',
  },
  {
    id: 'curvance',
    name: 'Curvance',
    description: 'Click your way to greatness and level up with Curvance DeFi.',
    logo: '/images/99f1ab890cb46639d383709d8a501c1165868fe7-400x400.png',
    banner: '/images/f8d343b100e4300b286de96c68de47fc3734f8eb-1256x675.jpg',
    appUrl: 'https://monad.curvance.com/monad',
    twitterUrl: 'https://x.com/Curvance',
  },
  {
    id: 'rarebetsports',
    name: 'RareBetSports',
    description: 'Play daily fantasy sports to win prizes.',
    logo: '/images/9568f85e4ffbca669ee240103af7891e8aabba73-400x400.jpg',
    banner: '/images/6485157c1f85735000748b85776fdb74f3ac92e6-1200x675.jpg',
    appUrl: 'https://rarelink.rarebetsports.io/',
    twitterUrl: 'https://x.com/RareBetSports',
  },
  {
    id: 'nadfun',
    name: 'Nad.fun',
    description: 'Your one stop social meme platform - jump on Nad.fun and create your own meme now.',
    logo: '/images/ba032b7bfb820041a5dfb67c112d4e1ef2189931-400x400.jpg',
    banner: '/images/7c8a23950f4eaa5cb79e610d45d46b274027769d-1500x500.jpg',
    appUrl: 'https://testnet.nad.fun/rewards',
    twitterUrl: 'https://x.com/naddotfun',
  },
];

export default function FeaturedApps() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === 'undefined') return;

    // Get references to DOM elements
    const section = sectionRef.current;
    const scrollContainer = scrollContainerRef.current;

    if (!section || !scrollContainer) return;

    // Calculate the width of the scroll container
    const getScrollWidth = () => {
      const containerWidth = scrollContainer.scrollWidth;
      const viewportWidth = scrollContainer.offsetWidth;
      return containerWidth - viewportWidth;
    };

    // Create a context to isolate GSAP animations
    const ctx = gsap.context(() => {
      // Create the horizontal scroll animation
      const horizontalScroll = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'center center', // Start when the section is centered in the viewport
          end: () => `+=${getScrollWidth()}`, // End after scrolling the distance needed for horizontal scroll
          pin: true, // Pin the section while scrolling
          anticipatePin: 1, // Helps with smoother pinning
          scrub: 1, // Smooth scrubbing effect tied to scroll position (value of 1 adds slight smoothing)
          invalidateOnRefresh: true, // Recalculate on resize
          pinSpacing: true, // Ensures proper spacing is added for the pin duration
          markers: false, // Set to true for debugging
          onUpdate: (self) => {
            // For debugging
            // console.log("Progress:", self.progress.toFixed(3));
          },
        },
      });

      // Animate the horizontal scroll
      horizontalScroll.to(scrollContainer, {
        x: () => -getScrollWidth(), // Dynamically calculate the scroll width
        ease: 'none', // Linear animation for smooth scrolling
        duration: 1, // Duration is relative to the scrollTrigger's length
      });

      // Refresh ScrollTrigger when window is resized
      window.addEventListener('resize', () => {
        ScrollTrigger.refresh();
      });
    });

    // Cleanup function
    return () => {
      ctx.revert(); // Clean up all GSAP animations and ScrollTriggers
    };
  }, []);

  return (
    <section className="featured-apps container mx-auto relative pb-16">
      <div className="flex items-center">
        <div className="w-full max-w-none px-4 md:px-0">
          <div
            ref={sectionRef}
            className="pin-spacer"
          >
            <div className="app-list-wrapper w-full max-w-none pt-8 lg:pt-16">
              <h2
                className="text-white text-4xl md:text-6xl font-medium mb-8 tracking-tighter pb-[0.15em]"
                style={{
                  background: 'linear-gradient(rgb(255, 255, 255) 50%, rgb(102, 102, 102) 100%) text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Featured Apps
              </h2>

              <div className="relative">
                <div
                  ref={scrollContainerRef}
                  className="app-list-wrapper-inner will-change-transform touch-pan-x flex gap-4 w-full h-full transition-all duration-300 opacity-100 overflow-visible"
                  style={{
                    backfaceVisibility: 'hidden',
                    perspective: '1000px',
                    willChange: 'transform',
                  }}
                >
                  {apps.map((app) => (
                    <AppCard key={app.id} app={app} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AppCard({ app }: { app: App }) {
  return (
    <div
      className="app-card flex-shrink-0 w-[320px] min-h-[420px] overflow-hidden"
      style={{
        transform: 'translateZ(0px)',
        backfaceVisibility: 'hidden',
        perspective: '1000px',
        willChange: 'transform',
      }}
    >
      <div
        className="relative h-[480px] rounded-[24px] overflow-hidden bg-[#191B1F] shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(0,0,0,0.08),0px_0px_0px_1px_#000]"
        style={{
          background: 'linear-gradient(rgba(11, 12, 14, 0.15) 0%, rgba(0, 0, 0, 0.5) 100%), rgb(25, 27, 31)',
          transform: 'translateZ(0px)',
          backfaceVisibility: 'hidden',
          perspective: '1000px',
          willChange: 'transform',
        }}
      >
        {/* Decorative blur effect */}
        <div
          className="absolute pointer-events-none"
          style={{
            borderRadius: '502px',
            background: 'rgba(255, 255, 255, 0.1)',
            filter: 'blur(100px)',
            width: '181px',
            height: '502px',
            transform: 'rotate(33deg) translateZ(0px)',
            right: '0px',
            top: '-80px',
            backfaceVisibility: 'hidden',
            perspective: '1000px',
            willChange: 'transform',
          }}
        />

        {/* Banner image */}
        <div className="relative w-full aspect-[3/1] overflow-hidden">
          <div className="app-links absolute bottom-4 right-4 z-10 flex gap-2">
            <Link
              href={app.twitterUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white transition-colors bg-black rounded-full p-2"
            >
              {/* <Image src="/images/x-logo-white.svg" alt="X" width={20} height={20} /> */}
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" aria-hidden="true">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
              </svg>
            </Link>
          </div>
          <Image
            src={app.banner || '/placeholder.svg'}
            alt={`${app.name} banner`}
            width={800}
            height={267}
            className="object-cover aspect-[3/1] w-full"
            priority
          />
        </div>

        {/* App logo */}
        <div className="absolute top-[72px] md:top-[64px] left-4 z-10">
          <div className="relative w-[64px] h-[64px] md:w-[80px] md:h-[80px] rounded-2xl overflow-hidden border-4 border-[#1E2126] shadow-xl">
            <Image src={app.logo || '/placeholder.svg'} alt={`${app.name} logo`} fill className="object-cover" priority />
          </div>
        </div>

        {/* App content */}
        <div className="flex flex-col pt-12 px-4 pb-32 h-full">
          <h3 className="text-2xl font-semibold text-white mt-2 mb-4">{app.name}</h3>
          <div className="description-and-cta">
            <p className="text-gray-300 mb-4 text-lg">{app.description}</p>
          </div>
          <Link
            href={app.appUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center whitespace-nowrap ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-[6px] min-w-[105px] transition-all duration-350 ease-bounce-bezier bg-[#6E54FF] text-white shadow-[0px_1px_0.5px_0px_rgba(255,255,255,0.33)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] hover:bg-[#836EF9] hover:shadow-[0px_1px_1px_0px_rgba(255,255,255,0.12)_inset,0px_1px_2px_0px_rgba(26,19,161,0.50),0px_0px_0px_1px_#4F47EB] h-10 px-4 py-[6px] rounded-[100px] text-[14px] leading-[24px] font-[500] w-fit z-10 mt-auto"
          >
            Launch App
          </Link>
        </div>
      </div>
    </div>
  );
}
