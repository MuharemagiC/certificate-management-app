import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

export const useNavigation = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback((path: string) => { navigate(path) }, [navigate]);

  return [handleNavigation] as const;
}