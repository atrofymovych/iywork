import CountdownTimer from './components/CountdownTimer';
import { BackgroundGradientAnimation } from '@/components/ui/shadcn-io/background-gradient-animation';

export default function Home() {
  return (
    <BackgroundGradientAnimation
      gradientBackgroundStart="rgb(35, 65, 45)"
      gradientBackgroundEnd="rgb(40, 80, 50)"
      firstColor="40, 150, 60"
      secondColor="60, 200, 80"
      thirdColor="100, 220, 120"
      fourthColor="50, 180, 70"
      fifthColor="80, 190, 90"
      pointerColor="90, 200, 110"
      interactive={true}
    >
      <main>      
        <h1>IY WORK • Вже скоро</h1>
        <CountdownTimer />
      </main>
    </BackgroundGradientAnimation>
  );
}

