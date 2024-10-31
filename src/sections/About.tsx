import Image from 'next/image';

import Card from '@/components/Card';
import SectionHeader from '@/components/SectionHeader';

import ChromeIcon from '@/assets/icons/chrome.svg';
import CSSIcon from '@/assets/icons/css3.svg';
import GithubIcon from '@/assets/icons/github.svg';
import HTMLIcon from '@/assets/icons/html5.svg';
import ReactIcon from '@/assets/icons/react.svg';
import JavascriptIcon from '@/assets/icons/square-js.svg';
import StarIcon from '@/assets/icons/star.svg';
import bookImage from '@/assets/images/book-cover.png';

const toolboxItems = [
  {
    title: 'JavaScript',
    icon: <JavascriptIcon />,
  },
  {
    title: 'HTML5',
    icon: <HTMLIcon />,
  },
  {
    title: 'CSS3',
    icon: <CSSIcon />,
  },
  {
    title: 'React',
    icon: <ReactIcon />,
  },
  {
    title: 'Chrome',
    icon: <ChromeIcon />,
  },
  {
    title: 'Github',
    icon: <GithubIcon />,
  },
];

export const AboutSection = () => {
  return (
    <div>
      <SectionHeader
        eyebrow="About me"
        title="A Glipse Into My World"
        description="Learn more about who I am, what I do, and what inspires me"
      />
      <div>
        <Card>
          <div>
            <StarIcon />
            <h3>My Reads</h3>
            <p>Explore the books shaping my perspectives.</p>
          </div>
          <Image
            src={bookImage}
            alt="Book cover"
          />
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
              <div
                key={item.title}
              >
                <span>{item.icon}</span>
                <span>{item.title}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};
