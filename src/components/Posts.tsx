import React, { ReactNode } from 'react';

interface IPosts{

  posts: any;
  loading: ReactNode;
}

const Posts = ({ posts, loading }: IPosts) => {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <ul className='list-group mb-4'>
      {posts.map((post: { id: string | number | null | undefined; title: React.ReactNode; }) => (
        <li key={post.id} className='list-group-item'>
          {post.title}
        </li>
      ))}
    </ul>
  );
};

export default Posts;
