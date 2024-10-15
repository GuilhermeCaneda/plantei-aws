import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";

import React, { ReactNode } from "react";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const { isSignedIn } = useUser();

  // Se o usuário não estiver logado, redirecione para a página de login
  if (!isSignedIn) {
    return <Navigate to="/sign-in" />;
  }

  // Se o usuário estiver logado, renderize a rota normalmente
  return children;
};

export default PrivateRoute;
