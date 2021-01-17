
import './App.css';
import store from './reducers/Store';
import{Provider} from 'react-redux'
import { Home } from './components/Home';
import {BrowserRouter,Route} from 'react-router-dom'

function App() {
  return (
   <Provider store={store}>
     <BrowserRouter>
     <div className="container">
    <Route path="/" component={Home} />
    </div>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
