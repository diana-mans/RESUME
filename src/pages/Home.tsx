import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import qs from 'qs';
import Categories from '../compoments/Categories';
import Sort, { list } from '../compoments/Sort';
import PizzaBlock from '../compoments/PizzaBlock';
import Skeleton from '../compoments/PizzaBlock/Skeleton';
import Pagination from '../compoments/Pagination';
import { useSelector } from 'react-redux';
import { setCategoryId, setCurrentPage, setFilters } from '../redux/filter/slice';
import { selectFilter } from '../redux/filter/selectors';
import { fetchPizzas } from '../redux/pizzas/asyncActions';
import { FetchPizzasProps } from '../redux/pizzas/types';
import { selectPizzasData } from '../redux/pizzas/selectors';
import { useAppDispatch } from '../redux/store';

const Home: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const isSearch = React.useRef(false);
  const isMounted = React.useRef(false);
  const { categoryId, sort, currentPage, searchValue } = useSelector(selectFilter);
  const { items, status } = useSelector(selectPizzasData);

  const onChangeCategory = React.useCallback((idx: number) => {
    dispatch(setCategoryId(idx));
  }, []);

  const onChangePage = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const getPizzas = () => {
    const sortBy = sort.sortProperty;
    const category = categoryId > 0 ? `category=${categoryId}` : '';
    const search = searchValue ? `search=${searchValue}` : '';

    dispatch(
      //@ts-ignore
      fetchPizzas({
        currentPage,
        category,
        search,
        sortBy,
      }),
    );
  };

  React.useEffect(() => {
    //со второго рендера меняй url-адрес исходя из параметров redux
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);

  //если был первый рендер, проверяем url-параметры и сохраняем в redux
  React.useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1)) as unknown as FetchPizzasProps;
      const sort = list.find((obj) => obj.sortProperty === params.sortBy);

      dispatch(
        setFilters({
          searchValue: params.search,
          categoryId: Number(params.category),
          currentPage: params.currentPage,
          sort: sort ? sort : list[0],
        }),
      );
      isSearch.current = true; //параметры из url пришли
    }
  }, []);

  useEffect(() => {
    //если пришли параметры из url, то при первом рендере не делай fetch-запрос
    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
    window.scrollTo(0, 0);
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  const pizzas = items.map((el: any) => (
    <PizzaBlock
      key={el.id}
      id={el.id}
      title={el.title}
      price={el.price}
      image={el.imageUrl}
      sizes={el.sizes}
      types={el.types}
    />
  ));
  const skeletons = [...new Array(8)].map((_, i) => <Skeleton key={i} />);

  return (
    <div className="container">
      <div className="content__top">
        <Categories value={categoryId} onChangeCategory={onChangeCategory} />
        <Sort value={sort} />
      </div>

      {status === 'error' ? (
        <div className="content__error-info">
          <h2>Произошла ошибка 😕</h2>

          <p>К сожалению, не удалось получить питсы. Попробуйте повторить попытку позже</p>
        </div>
      ) : (
        <>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">{status === 'loading' ? skeletons : pizzas}</div>
        </>
      )}

      <Pagination currentPage={currentPage} onPageChange={onChangePage} />
    </div>
  );
};

export default Home;
