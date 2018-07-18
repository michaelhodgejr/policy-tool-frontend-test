import React from 'react';
import Navigation from '../components/shared/Navigation';

const MainLayout = ({children, ...rest}) => {
  return(
    <div className='layout main'>
      <Navigation />
      <hr />
      <div className='main-content'>
        { children }
      </div>
    </div>
  );
}

export default MainLayout;
