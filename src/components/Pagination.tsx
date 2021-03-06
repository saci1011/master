import React, { ReactNode } from 'react';

interface IPag{

  postsPerPage: number;
  totalPosts: number;
  paginate: any;
}

const Pagination = ({ postsPerPage, totalPosts, paginate }: IPag ) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <a onClick={() => paginate(number)} href='/home/' className='page-link'>
              {number}
            </a>
          </li>
        ))}
      </ul>   
    </nav>
  );
};

export default Pagination;
