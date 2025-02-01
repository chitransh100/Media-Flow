import './App.css';
import Head from './components/Head';
import Body from './components/Body';
import store from './store/store';
import { Provider } from '../node_modules/react-redux'
import { createBrowserRouter, RouterProvider } from '../node_modules/react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <>
      <Head />
      <Body/>
      </>,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "/watch",
          element: <Watchpage />,
        },
      ],
    },
  ]);

  return (
    <Provider store={store}>
      {/* RouterProvider manages routing and allows using Link inside Head */}
      <RouterProvider router={appRouter}>
      <Head />  
      </RouterProvider>
    </Provider>
  );
}

export default App;
