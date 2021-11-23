import React, { FunctionComponent, ReactChild } from 'react';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';
import { Sidebar } from './Sidebar/Sidebar';

type PropsType = {
  children: ReactChild;
};
const Layout: React.FC<PropsType> = ({ children }) => {
  return (
    <div>
      <Header />
      <div>
        <Sidebar />
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};

export const withLayout = <T extends Record<string, unknown>>(Component: FunctionComponent<T>) => {
  return function withLayoutComponent(props: T) {
    return (
      <Layout>
        <Component {...props}/>
      </Layout>
    );
  };
};