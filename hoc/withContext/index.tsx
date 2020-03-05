import {
  useContext,
  useMemo,
} from 'react';

const withContext = (Context, deps) => {
  return (Component) => {
    return props => {
      const context = useContext(Context);
      const values = deps.map(dep => context[dep]);  
      return useMemo(() => { 
        const entries = deps.map(dep => [dep, context[dep]])
        const contextProps = Object.fromEntries(entries);
        return (
          <Component { ...contextProps } { ...props } />
        );
      }, values);
    };
  };
};

export default withContext;