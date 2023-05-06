// usePortalNavigation.js
import { useNavigateContext } from './NavigateContext';

const usePortalNavigation = () => {
  const navigate = useNavigateContext();

  const push = (destination) => {
    navigate(destination);
  };

  return push;
};

export default usePortalNavigation;
