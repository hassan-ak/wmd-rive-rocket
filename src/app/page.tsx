import RocketAniamtionAuto from '@/components/RocketAniamtionAuto';

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center space-y-5 px-20 text-sm xmd:flex-row xmd:px-5 xmd:text-base md:px-20'>
      <p className='min-w-[300px] p-5 text-justify text-gray-50 xmd:min-w-[200px] md:min-w-[350px]'>
        Experience the captivating fusion of Rive and Next.js. See for yourself
        how Rive&#39;s versatile technology can bring design to life with fluid,
        lifelike movements and dynamic visuals.
      </p>
      <div className='flex-grow'>
        <RocketAniamtionAuto></RocketAniamtionAuto>
      </div>
    </div>
  );
}
