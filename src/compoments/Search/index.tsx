import React, { useCallback, useRef, useState } from 'react';
import debounce from 'lodash.debounce';
import styles from './Search.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchValue } from '../../redux/filter/slice';
import { selectFilter } from '../../redux/filter/selectors';

export default function Search() {
  const [value, setValue] = useState('');
  const dispatch = useDispatch();
  const { searchValue } = useSelector(selectFilter);

  const onClickClear = () => {
    dispatch(setSearchValue(''));
    setValue('');
    inputRef.current?.focus();
  };

  //чтобы функция создалась 1 раз; useCallback возвращает функцию, а useEffect нет, поэтому здесь используем первое
  const updateSearchValue = useCallback(
    //чтобы эта штука сработала, как только действие не происходит 300 миллисекунд
    debounce((str: string) => {
      dispatch(setSearchValue(str));
    }, 300),
    [],
  );

  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };

  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <div className={styles.root}>
      <svg
        className={styles.icon}
        enableBackground="new 0 0 32 32"
        id="Editable-line"
        version="1.1"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg">
        <circle
          cx="14"
          cy="14"
          fill="none"
          id="XMLID_42_"
          r="9"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
        />
        <line
          fill="none"
          id="XMLID_44_"
          stroke="#000000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
          strokeWidth="2"
          x1="27"
          x2="20.366"
          y1="27"
          y2="20.366"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={(e) => {
          onChangeInput(e);
        }}
        className={styles.input}
        placeholder="Поиск пиццы..."
      />
      {searchValue && (
        <svg
          className={styles.close_icon}
          onClick={() => {
            onClickClear();
          }}
          enableBackground="new 0 0 100 100"
          id="Layer_1"
          version="1.1"
          viewBox="0 0 100 100"
          xmlns="http://www.w3.org/2000/svg">
          <polygon
            fill="#010101"
            points="77.6,21.1 49.6,49.2 21.5,21.1 19.6,23 47.6,51.1 19.6,79.2 21.5,81.1 49.6,53 77.6,81.1 79.6,79.2   51.5,51.1 79.6,23 "
          />
        </svg>
      )}
    </div>
  );
}
