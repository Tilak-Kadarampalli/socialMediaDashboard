import Cookies from 'js-cookie'
import {Navigate} from 'react-router-dom'
import KPICard from "../KPICard"
import {HomeDiv, GreetHead, KPICards} from './styledComponents'



const KPIData = [{heading: 'Total Users', value: 2509},{heading: 'Active Users (Last 24 hrs)', value: 517},{heading: 'Total Posts', value: 4023},{heading: 'Recent Posts (Last 24 hrs)', value: 211}]


const Home = () =>{
    const logIn = Cookies.get('loggedin')
    return(

        <HomeDiv>
    
    {logIn === undefined && <Navigate to="/login" replace/>}
    <GreetHead>Welcome, Admin</GreetHead>
    <KPICards>
        {KPIData.map((eachKPI)=><li key={eachKPI.heading}>
            <KPICard details={eachKPI}/>
        </li>)}
    </KPICards>
</HomeDiv>

    )
}



export default Home