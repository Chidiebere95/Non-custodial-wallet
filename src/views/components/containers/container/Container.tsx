import { ReactNode } from 'react';
import './Container.scss';

interface Iprops {
  children: ReactNode;
}

function Container({ children }: Iprops) {
  return (
    <div className='container-wrapper'>
      <div className='container-content'>{children}</div>
    </div>
  );
}

export default Container;
