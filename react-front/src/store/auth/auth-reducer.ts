import { Reducer } from "react";
import { AuthAction } from "./auth-action";


export interface AuthState {
    authenticated: boolean;
    authToken?: string;
    userId?: string;
    name?: string;
    email?: string;
}

export const defaultAuthState: AuthState = {
    authenticated: false,
}

const authReducer: Reducer<AuthState, AuthAction> = (state, action) => {
    // user successfully authenticated
    if (action.type === "LOG_IN") {
      localStorage.setItem("user", JSON.stringify(action.payload));
      return {
        ...state,
        isLoggedIn: true,
        authToken: action.payload.authToken,
        userId: action.payload.userId,
        name: action.payload.name,
        email: action.payload.email,
      };
    }
  
    // log out user
    if (action.type === "LOG_OUT") {
      localStorage.removeItem("user");
      return defaultAuthState;
    }
  
    return defaultAuthState;
  };
  
  export default authReducer;

  