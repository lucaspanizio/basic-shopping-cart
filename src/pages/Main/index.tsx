import React from 'react';
import { List } from '../../components/list';
import { Cart } from '../../components/cart';

export const Main: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <List />
      <Cart />
    </div>
  );
};
