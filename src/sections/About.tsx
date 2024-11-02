import Image from 'next/image';

import Card from '@/components/Card';
import CardHeader from '@/components/CardHeader';
import SectionHeader from '@/components/SectionHeader';
import TechIcon from '@/components/TechIcon';
import ToolboxItems from '@/components/ToolboxItems';

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
        <div className="mt-20 flex flex-col gap-8">
          <Card className="h-[320px]">
            <CardHeader
              title="My Reads"
              description="Explore the books shaping my perspectives."
            />
            <div className="mx-auto mt-8 w-40">
              <Image
                src={bookImage}
                alt="Book cover"
              />
            </div>
          </Card>
          <Card className="h-[320px] p-0">
            <CardHeader
              title="My Toolbox"
              description="Explore the technologies and tools I use to craft exceptional
                digital experience."
              className="px-6 pt-6"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
            />
            <ToolboxItems
              items={toolboxItems}
              className="mt-6"
              itemsWrapperClassName="-translate-x-1/2"
            />
          </Card>
          <Card>
            <CardHeader
              title="Beyond the Code"
              description="Explore my interests and hobbies beyond the digital realm."
            />
            <div>
              {hobbies.map(hobby => (
                <div key={hobby.title}>
                  <span>{hobby.emoji}</span>
                  <span>{hobby.title}</span>
                </div>
              ))}
            </div>
          </Card>

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
