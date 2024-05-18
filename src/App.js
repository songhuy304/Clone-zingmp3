import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {links}  from '~/router'
import Layout from './components/Layout';
import 'keen-slider/keen-slider.min.css'
import  {SkeletonTheme} from 'react-loading-skeleton';


function App() {
  return (
    <SkeletonTheme>
      <Router>
        <div className="App">
          <Routes>
            {links.map((route, index) => {
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                ></Route>
              );
            })}
          </Routes>
        </div>
      </Router>
    </SkeletonTheme>
  );
}

export default App;
