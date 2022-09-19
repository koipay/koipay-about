import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRoutes } from './routes/routes';
import LayoutDefault from './components/layout/LayoutDefault';

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <LayoutDefault>
                    <Page />
                  </LayoutDefault>
                }
              ></Route>
            );
          })}
        </Routes>
      </Router>
    </>
  );
};

export default App;
