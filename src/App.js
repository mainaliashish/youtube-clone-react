import './App.css';
import HeaderComponent from './components/HeaderComponent';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import appRouter from './router/appRouter';
import { RouterProvider } from 'react-router-dom';

function App() {
  return (
    <Provider store={appStore}>
      <div>
        <HeaderComponent />
        <RouterProvider router={appRouter} />
      </div>
    </Provider>
  );
}

export default App;
