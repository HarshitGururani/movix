import './style.scss';
import HeroBanner from './heroBanner/HeroBanner';
import Trending from './trending/Trending';
import Popular from './popular/popular';
import TopRated from './topRated/TopRated';
Trending;
const Home = () => {
  return (
    <div className='home-page'>
      <HeroBanner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
};
export default Home;
