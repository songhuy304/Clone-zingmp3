import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {links}  from '~/router'
import Layout from './components/Layout';
import 'keen-slider/keen-slider.min.css'
import  {SkeletonTheme} from 'react-loading-skeleton';
import { AuthProvider } from '~/context';

function App() {
  return (
    <AuthProvider>
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
                  />
                );
            })}
          </Routes>
        </div>
      </Router>
      </SkeletonTheme>
    </AuthProvider>
  );
}

export default App;
