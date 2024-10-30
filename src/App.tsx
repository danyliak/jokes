import { useJokes } from './hooks';
import { Jokes } from './Jokes';

const App = () => {
  const { jokes, loading } = useJokes(3);
  return loading ? 'loading...' : <Jokes jokes={jokes}></Jokes>;
};

export { App };
