import { PropsWithChildren } from 'react';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

export const Template = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
