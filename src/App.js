import React, { Suspense } from 'react';
const Bounder = React.lazy(() => import('./components/error/Bounder'))
const Container = React.lazy(() => import('./components/notes feature new/Sides/Container'));
const Header = React.lazy(() => import('./components/Header/Navbar'))


function App() {
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>} >
        <Bounder>
          <Header />
          <div className='container'>
              <Container />
            </div>
        </Bounder>
      </Suspense>
    </div>
  );
}

export default App;
