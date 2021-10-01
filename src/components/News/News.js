import classes from './News.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { reloadNewsThunk } from './../../actions/homeActions';
import NewsList from './NewsList';

const News = () => {
  const dispatch = useDispatch();
  const news = useSelector((state) => state.home.news);

  useEffect(() => {
    if (!('person' in news)) {
      dispatch(reloadNewsThunk());
    }
  }, [dispatch, news]);

  return (
    <div className={classes.news}>
      <h3>News</h3>
      {news?.person && <NewsList news={news} />}
      {!news?.person && <p>Please, refresh the news</p>}
    </div>
  );
};

export default News;
