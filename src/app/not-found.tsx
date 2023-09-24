'use client';

import { useEffect } from 'react';
import useRouter from '../custom/hooks/useRouter';

const NotFound = () => {
  const { push, pathname } = useRouter();

  useEffect(() => {
    if (pathname === '/') {
      push('/k/');
    }
  }, [push, pathname]);

  return <div>Not Found</div>;
};

export default NotFound;
