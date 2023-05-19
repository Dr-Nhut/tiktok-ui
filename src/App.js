import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { publicRouter } from './routes';
import { DefaultLayout } from './components/Layout';
import { Fragment } from 'react';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {
            publicRouter.map((route, index) => {
              let Layout = DefaultLayout;
              if (route.layout) {
                Layout = route.layout;
              }
              else if (route.layout === null) {
                Layout = Fragment;
              }
              const Page = route.component;
              return <Route key={index} path={route.path} element={<Layout><Page /></Layout>} ></Route>
            })
          }
        </Routes>
      </div>
    </Router>
  );
}

export default App;
