import { useCollection } from 'react-firebase-hooks/firestore';
import { db } from '../firebase';
import Post from './Post';

export default function Posts() {
  const [realtimePosts] = useCollection(db.collection('posts').orderBy('timestamp', 'desc'));

  return (
    <div className="feed">
      {realtimePosts?.docs.map((post) => (
        <Post
          key={post.id}
          name={post.data().name}
          message={post.data().message}
          email={post.data().email}
          timestamp={post.data().timestamp}
          image={post.data().image}
          postMedia={post.data().postMedia}
        />
      ))}
    </div>
  );
}
