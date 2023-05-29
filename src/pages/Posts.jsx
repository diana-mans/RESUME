import React from 'react';
import { Container } from 'react-bootstrap';
import PostItem from '../componets/PostItem';
import Skeleton from '../componets/Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import PaginationComp from '../componets/Pagination';

const Posts = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.posts.items);
  const isLoading = useSelector((state) => state.posts.isLoading);

  const setSearchValue = (value) => {
    dispatch({ type: 'SET_SEARCH_VALUE', payload: value });
  };

  React.useEffect(() => {
    setSearchValue('');
  }, []);

  const posts = items.map((el) => (
    <PostItem key={el.id} id={el.id} userId={el.userId} title={el.title} text={el.body} />
  ));

  const skeletonWidth = window.innerWidth - 200;
  const skeletons = [...new Array(10)].map((_, i) => (
    <Skeleton skeletonWidth={skeletonWidth} key={i} />
  ));
  return (
    <Container className="posts_container">
      {isLoading ? skeletons : posts}
      <PaginationComp />
    </Container>
  );
};

//items.length === 0

export default Posts;
