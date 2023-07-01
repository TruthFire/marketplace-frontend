import { ReactNode } from 'react';

interface ContainerProps {
  children: ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <div className='mx-auto max-w-7xl sm:px-6 lg:px-8'>{children}</div>;
};

export default Container;
