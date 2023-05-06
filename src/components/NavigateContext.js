// NavigateContext.js
import { createContext, useContext } from 'react';

const NavigateContext = createContext(null);

export const useNavigateContext = () => {
  return useContext(NavigateContext);
};

export default NavigateContext;
