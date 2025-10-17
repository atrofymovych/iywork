import CountdownTimer from './components/CountdownTimer';
import { FlickeringGrid } from '@/components/ui/shadcn-io/flickering-grid';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#1a3d28] to-[#1b4423] relative flex items-center justify-center antialiased overflow-hidden">
      <FlickeringGrid 
        className="absolute inset-0 z-0"
        squareSize={4}
        gridGap={6}
        color="rgb(255, 255, 255)"
        maxOpacity={0.3}
        flickerChance={0.3}
      />
      <main className="relative z-10">      
        <h1>IY WORK • Вже скоро</h1>
        <CountdownTimer />
      </main>
    </div>
  );
}

