import { createContext,ReactNode,useState } from "react";


type Props = {
    children?: ReactNode
}

type IAuthContext = {
    authenticated: boolean;
    setAuthenticated: (newState: boolean) => void;
    authData:object;
    setAuthData:(newState: object) => void;
}
  
const initialValue = {
    authenticated: false,
    setAuthenticated: () => {},
    authData:{},
    setAuthData:()=>{}
}
  
  const AuthContext = createContext<IAuthContext>(initialValue)

  const AuthProvider = ({children}: Props) => {
    //Initializing an auth state with false value (unauthenticated)
    const [ authenticated, setAuthenticated ] = useState(initialValue.authenticated)
    const [authData,setAuthData]=useState(initialValue.authData)
    // const navigate = useNavigate()

    return (
      <AuthContext.Provider value={{authenticated, setAuthenticated,authData,setAuthData}}>
        {children}
      </AuthContext.Provider>
    )
  }

  export {  AuthContext, AuthProvider }

