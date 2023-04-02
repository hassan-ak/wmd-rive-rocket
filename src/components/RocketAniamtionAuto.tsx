'use client';
import { useRive } from '@rive-app/react-canvas';

export default function RocketAniamtionAuto() {
  const { rive, RiveComponent } = useRive({
    src: '/rocketanimation.riv',
    artboard: 'RocketAnimation',
    stateMachines: ['animationAuto'],
    autoplay: true,
  });
  return (
    <div className='flex justify-center'>
      <div className='h-[300px] w-[300px] xmd:h-[450px] xmd:w-[450px] md:h-[500px] md:w-[500px]'>
        <RiveComponent />
      </div>
    </div>
  );
}
