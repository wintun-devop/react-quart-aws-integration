
import { Box } from '@mui/material';
import MainTab from '../../components/main-tab';
import Header from '../../components/header';


type Props = {}

const Dashboard = (props) =>{
    return(
       <Box>
            <Header />
            <MainTab />
       </Box>
    )

}

export default Dashboard;