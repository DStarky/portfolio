import Image from 'next/image';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';
import TechIcon from '@/components/TechIcon';

import ChromeIcon from '@/assets/icons/chrome.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';

const toolboxItems = [
  {
    title: 'JavaScript',
    iconType: JavascriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HTMLIcon,
  },
  {
    title: 'CSS3',
    iconType: CSSIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
  },
  {
    title: 'Photography',
    emoji: '📷',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
  },
  {
    title: 'Music',
    emoji: '🎧',
  },
  {
    title: 'Fitness',
    emoji: '🏋️‍♀️',
  },
  {
    title: 'Reading',
    emoji: '📚',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
  },
];

export const AboutSection = () => {
  return (
    <div className="py-20">
      <div className="container">
        <SectionHeader
          eyebrow="About me"
          title="A Glipse Into My World"
          description="Learn more about who I am, what I do, and what inspires me"
        />
        <div className="mt-20">
          <Card className="h-[320px]">
            <div className="flex flex-col">
              <div className="inline-flex items-center gap-2">
                <StarIcon className="size-9 text-emerald-300" />
                <h3 className="font-serif text-3xl">My Reads</h3>
              </div>
              <p className="mt-2 text-sm text-white/60">
                Explore the books shaping my perspectives.
              </p>
            </div>
            <div className="mx-auto mt-8 w-40">
              <Image
                src={bookImage}
                alt="Book cover"
              />
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>My Toolbox</h3>
              <p>
                Explore the technologies and tools I use to craft exceptional
                digital experience.
              </p>
            </div>
            <div>
              {toolboxItems.map(item => (
                <div key={item.title}>
                  <TechIcon component={item.iconType} />
                  <span>{item.title}</span>
                </div>
              ))}
            </div>
          </Card>
          <Card>
            <div>
              <StarIcon />
              <h3>Beyond the Code</h3>
              <p>Explore my interests and hobbies beyond the digital realm.</p>
            </div>
          </Card>
          <div>
            {hobbies.map(hobby => (
              <div key={hobby.title}>
                <span>{hobby.emoji}</span>
                <span>{hobby.title}</span>
              </div>
            ))}
          </div>
          <Card>
            <Image
              src={mapImage}
              alt="Map"
            />
            <Image
              src={smileMemoji}
              alt="Smiling Memoji"
            />
          </Card>
        </div>
      </div>
    </div>
  );
};
