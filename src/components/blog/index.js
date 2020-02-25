import React from 'react';
import { navigate } from 'gatsby';
import BlogPreview from '../blog-preview';
import ReactPaginate from 'react-paginate';
import style from './blog.module.scss';

function Blog({
  posts,
  numberOfPages,
  currentPage
}) {
  const highlightedPosts = posts.slice(0, 3);
  const defaultPosts = posts.slice(3);

  return (
    <div className={style.blog}>
      <h2 className={style.blogTitle}>
        Blog Borda do Universo
      </h2>
      <div className={style.blogList}>
        {
          highlightedPosts
            .map(post => (
              <BlogPreview
                key={post.slug}
                post={post}
              />
            ))
        }
      </div>
      <p className={style.blogListSeparator}>
        Posts Antigos
      </p>
      <div className={style.blogDefaultPostsList}>
        {
          defaultPosts
            .map(post => (
              <BlogPreview
                key={post.slug}
                post={post}
                postTitleClassName={style.blogDefaultPostsListItemTitle}
                postDescriptionClassName={style.blogDefaultPostsListItemDescription}
                postOptionsWrapperClassName={style.blogDefaultPostsListItemOptions}
                postOptionsItemClassName={style.blogDefaultPostsListItemOptionsItem}
              />
            ))
        }
      </div>
      {
        numberOfPages > 1 && (
          <ReactPaginate
            initialPage={currentPage - 1}
            pageCount={numberOfPages}
            pageRangeDisplayed={5}
            marginPagesDisplayed={5}
            onPageChange={goToPage}
            containerClassName={style.blogPagination}
            pageClassName={style.blogPaginationItem}
            activeClassName={style.active}
            previousLabel=""
            nextLabel=""
          />
        )
      }
    </div>
  );

  function goToPage(page) {
    const nextPage = page.selected + 1;
    if (nextPage === currentPage) return;

    if (nextPage === 1) {
      navigate('/');
      return;
    }

    navigate(`/blog/${nextPage}`);
  }
}

export default Blog;