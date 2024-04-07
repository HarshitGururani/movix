/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import './style.scss';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ContentWrapper from '../../../contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import { useSelector } from 'react-redux/es/hooks/useSelector';
import Img from '../../../lazyLoadImage/Img';

const HeroBanner = () => {
  const [background, setBackground] = useState('');
  const [query, setQuery] = useState('');
  const navigate = useNavigate();
  // const { url } = useSelector((state) => state.home);
  const { data, loading } = useFetch('/movie/popular');
  const url = `https://image.tmdb.org/t/p/original`;

  useEffect(() => {
    const bg =
      url + data?.results?.[Math.floor(Math.random() * 20)]?.backdrop_path;
    setBackground(bg);
  }, [data]);
  console.log(background);
  const searchQueryHandler = (e) => {
    if (e.key === 'Enter' && query.length > 0) {
      navigate(`/search/${query}`);
    }
  };

  return (
    <div className='heroBanner'>
      {!loading && (
        <div className='backdrop-img'>
          <Img src={background} />
        </div>
      )}

      <div className='opacity-layer'></div>

      <ContentWrapper>
        <div className='hero-banner-content'>
          <span className='title'>Welcome</span>
          <span className='subtitle'>
            Millions of movies, Tv shows and people to discover, Explore now
          </span>
          <div className='search-input'>
            <input
              type='text'
              placeholder='Search for movie or tv show...'
              onKeyUp={searchQueryHandler}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button>Search</button>
          </div>
        </div>
      </ContentWrapper>
    </div>
  );
};
export default HeroBanner;
