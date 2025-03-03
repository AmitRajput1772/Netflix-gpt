import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useUpcomingMovies from '../hooks/useUpcomingMovies';
import useTopRatedMovies from '../hooks/usetopratedMovies';
import { useSelector } from 'react-redux';
import GptSearch from './GptSearch';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useUpcomingMovies();
  useTopRatedMovies();
  const gptSearch = useSelector(state => state.gptSlice?.searchView);


  return (
    <div className=" bg-black">
      <Header />
      {gptSearch ? <GptSearch /> :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>

      }
      
    </div>
  )
}

export default Browse