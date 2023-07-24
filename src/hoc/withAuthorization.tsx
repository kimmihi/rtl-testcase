import type { FC } from "react";

const withAuthorization = (Component: FC<any>) => {
  const isLogged = false;
  return (props: any) => {
    return isLogged ? <Component {...props} /> : null;
  };
};

export default withAuthorization;
