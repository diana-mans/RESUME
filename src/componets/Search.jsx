import React from 'react';
import { Form, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Search = () => {
  const [value, setValue] = React.useState('');
  const dispatch = useDispatch();

  const setSearchValue = (value) => {
    dispatch({ type: 'SET_SEARCH_VALUE', payload: value });
  };

  const onChangeInput = (event) => {
    const value = event.target.value;
    setValue(value);
    setSearchValue(value);
  };
  return (
    <Form className="d-flex">
      <Form.Control
        onChange={(e) => onChangeInput(e)}
        type="search"
        value={value}
        placeholder="Поиск"
        className="me-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Найти</Button>
    </Form>
  );
};

export default Search;
