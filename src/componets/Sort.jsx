import { Dropdown } from 'react-bootstrap';
import { useDispatch } from 'react-redux';

const Sort = () => {
  const dispatch = useDispatch();
  const setSort = (sortType) => {
    dispatch({ type: 'SET_SORT', payload: sortType });
  };

  return (
    <Dropdown className="sort-container">
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Сортировка
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item
          onClick={() => {
            setSort('title');
          }}>
          По заголовку
        </Dropdown.Item>
        <Dropdown.Item
          onClick={() => {
            setSort('body');
          }}>
          По записи
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default Sort;
