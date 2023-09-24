import { usePathname, useRouter as useNavigation } from 'next/navigation';
import { useMemo } from 'react';

const useRouter = () => {
  const pathname = usePathname();
  const router = useNavigation();

  const data = useMemo(
    () => ({
      push: router.push,
      replace: router.replace,
      pathname,
    }),
    [pathname, router]
  );

  return data;
};

export default useRouter;
