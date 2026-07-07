import { PropsWithChildren } from 'react';

import { Footer } from '@/components/template/footer';
import { Header } from '@/components/template/header';

export const Template = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};
