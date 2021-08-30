import React , {useState} from 'react';
import AddUsers from './Components/User/AddUsers';
import UsersList from './Components/User/UsersList';
const App= () => {
   const [userList, setUserList] = useState([]);
   const addUsersHandler = (uName,uAge) =>{
      setUserList((prevUsers) => {

        return   [...prevUsers,
           {
          name : uName ,
           age : uAge , id :Math.random().toString}, ] ;
        
      });
   }
   
   return(
                  <div>              
                    <AddUsers onAddUsers = {addUsersHandler}/>    
                    <UsersList users = {userList}/>
                  </div>
                 
              );          
         };

export default App;
