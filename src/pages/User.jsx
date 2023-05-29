import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PostItem from '../componets/PostItem';
import Skeleton from '../componets/Skeleton';

const User = () => {
  const dispatch = useDispatch();
  const setParams = (params) => {
    dispatch({ type: 'SET_USER_ID', payload: params });
  };
  const params = useParams();
  React.useEffect(() => {
    setParams(params.id);
  }, []);

  const { userInfo, userPosts } = useSelector((state) => state.user);

  const posts = userPosts.map((el) => (
    <PostItem key={el.id} id={el.id} userId={el.userId} title={el.title} text={el.body} />
  ));

  const skeletonWidth = window.innerWidth - 200;
  const skeletons = [...new Array(10)].map((_, i) => (
    <Skeleton skeletonWidth={skeletonWidth} key={i} />
  ));
  return (
    <Container>
      <h1 className="title-container">Подробности о пользователе</h1>
      <p>Name: {userInfo.name}</p>
      <p>Username: {userInfo.username}</p>
      <p>Email: {userInfo.email}</p>
      <p>Phone: {userInfo.phone}</p>

      <h3 className="posts-title">Посты пользователя:</h3>
      <div>{userPosts.length === 0 ? skeletons : posts}</div>
      <Link to={'/'}>
        <Button className="button-back" variant="outline-success" size="lg">
          Назад
        </Button>
      </Link>
    </Container>
  );
};

export default User;
