import classes from './News.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loadNewsCountThunk } from './../../actions/homeActions';
import NewsList from './NewsList';

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.home.news);

  useEffect(() => {
    dispatch(loadNewsCountThunk());
  }, [dispatch]);

  return (
    <div className={classes.news}>
      <h3>News</h3>
      {news?.person && <NewsList news={news} />}
      {!news?.person && <p>Please, refresh the news</p>}
    </div>
  );
};

export default News;
