import { PropsWithChildren } from 'react';
import { Footer } from '../footer';
import { Header } from '../header';

export const Template = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
