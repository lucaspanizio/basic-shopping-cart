import { PropsWithChildren } from 'react';

import { Footer } from '@/components/template/footer';
import { Header } from '@/components/template/header';

export const Template = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
