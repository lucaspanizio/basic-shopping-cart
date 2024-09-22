import { CSSProperties } from 'react';
import './styles.css';

interface ISkeletonProps {
  variant: 'card' | 'text' | 'circle';
  width?: CSSProperties['width'];
}

export const Skeleton = ({ variant, width = '100%' }: ISkeletonProps) => {
  return <div className={`skeleton ${variant}`} style={{ width }} />;
};
