import HeroHeader from '@/components/HeroHeader';
import './globals.css';
import Services from '@/components/Services';
import Banner from '@/components/Banner';
import Features from '@/components/Features';
import Download from '@/components/Download';
import Opinion from '@/components/Opinion';
import GetApp from '@/components/GetApp';

export default function Home() {
  return (
    <div className='w-dvw min-h-dvh overflow-x-hidden'>
      <HeroHeader />
      <Services />
      <Banner />
      <Features />
      <Download />
      <Opinion />
      <GetApp />
    </div>
  );
}
