/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import ContentWrapper from '../../../contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Trending = () => {
  const [endPoint, setEndPoint] = useState('day');

  const { data, loading } = useFetch(`/trending/all/${endPoint}`);

  const onTabChange = (tab) => {
    setEndPoint(tab === 'Day' ? 'day' : 'week');
  };

  return (
    <div className='carousalSection'>
      <ContentWrapper>
        <span className='carousalTitle'>Trending</span>
        <SwitchTabs data={['Day', 'Week']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} />
    </div>
  );
};
export default Trending;
