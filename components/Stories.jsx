import StoryCard from './StoryCard';

const stories = [
  {
    name: 'Nolan Must',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk',
  },
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v',
  },
  {
    name: 'Zack Muckenberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf',
  },
  {
    name: 'Josef Kisses',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p',
  },
  {
    name: 'Will Doors',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy',
  },
];

export default function Stories() {
  return (
    <div className="flex justify-center space-x-3 mx-auto">
      {stories.map((story) => (
        <StoryCard key={story.src} name={story.name} profile={story.profile} src={story.src} />
      ))}
    </div>
  );
}
