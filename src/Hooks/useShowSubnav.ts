import { useCallback, useState } from "react";

export const useShowSubnav = (initialValue: boolean) => {
  const [subnav, setSubNav] = useState(initialValue);

  const showSubnav = useCallback(() => {
    setSubNav(prevState => !prevState);
  }, []);

  return [ subnav, showSubnav ] as const;
}