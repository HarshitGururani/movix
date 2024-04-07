/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-key */
import './style.scss';
import { useSelector } from 'react-redux/es/hooks/useSelector';
const Genres = ({ data }) => {
  const { genres } = useSelector((state) => state.home);
  return (
    <div className='genres'>
      {data?.map((g) => {
        if (!genres[g]?.name) return;
        return (
          <div className='genre' key={g}>
            {genres[g]?.name}
          </div>
        );
      })}
    </div>
  );
};
export default Genres;
