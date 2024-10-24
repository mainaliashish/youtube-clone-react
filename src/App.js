import './App.css';
import HeaderComponent from './components/HeaderComponent';
import BodyComponent from './components/BodyComponent';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';


function App() {
  return (
    <Provider store={appStore}>
      <div>
        <HeaderComponent />
        <BodyComponent />
      </div>
    </Provider>
  );
}

export default App;
