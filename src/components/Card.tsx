import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

import grainImage from '@/assets/images/grain.jpg';

const Card = ({
  className = '',
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div
      className={twMerge(
        "relative z-0 overflow-hidden rounded-3xl bg-gray-800 after:pointer-events-none after:absolute after:inset-0 after:z-10 after:rounded-3xl after:outline after:outline-2 after:-outline-offset-2 after:outline-white/20 after:content-['']",
        className,
      )}
    >
      <div
        className="absolute inset-0 -z-10 opacity-5"
        style={{
          backgroundImage: `url(${grainImage.src})`,
        }}
      ></div>
      {children}
    </div>
  );
};
export default Card;
