/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import SwitchTabs from '../../../components/switchTabs/SwitchTabs';
import ContentWrapper from '../../../contentWrapper/ContentWrapper';
import useFetch from '../../../hooks/useFetch';
import Carousel from '../../../components/carousel/Carousel';

const Popular = () => {
  const [endPoint, setEndPoint] = useState('movie');

  const { data, loading } = useFetch(`/${endPoint}/popular`);

  const onTabChange = (tab) => {
    setEndPoint(tab === 'Movies' ? 'movie' : 'tv');
  };

  return (
    <div className='carousalSection' id='popular'>
      <ContentWrapper>
        <span className='carousalTitle'>What's Popular</span>
        <SwitchTabs data={['Movies', 'Tv Shows']} onTabChange={onTabChange} />
      </ContentWrapper>
      <Carousel data={data?.results} loading={loading} endpoint={endPoint} />
    </div>
  );
};
export default Popular;
