import {Routes as Router,Route} from 'react-router-dom';
import Login from "./screens/auth/login/login";


type Props = {};


const Routes = (props: Props) => {
    return(
        <Router>
            <Route path="/" element={<Login />}/>
        </Router>
    )
};

export default Routes;