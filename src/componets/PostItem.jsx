import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const PostItem = ({ id, userId, title, text }) => {
  const [comments, setComments] = React.useState([]);
  const [viewComments, setViewComments] = React.useState(false);
  React.useEffect(() => {
    viewComments &&
      axios
        .get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
        .then((res) => setComments(res.data));
  }, [viewComments]);
  return (
    <div>
      <div className="post-item-container">
        <div>
          <Link to={`/user/${userId}`}>
            <img
              className="userPhoto"
              src="https://upload.wikimedia.org/wikipedia/ru/thumb/9/94/%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg/640px-%D0%93%D0%B8%D0%B3%D0%B0%D1%87%D0%B0%D0%B4.jpg"
            />
          </Link>
        </div>
        <div>
          <h4>{title}</h4>
          <p>{text}</p>
        </div>
      </div>
      <Button variant="light" onClick={() => setViewComments((act) => !act)}>
        Список комментариев
      </Button>
      <br />
      <br />
      {viewComments && (
        <ul className="list-comments-parent">
          {comments.map((el) => (
            <li className="list-comments">{el.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostItem;
