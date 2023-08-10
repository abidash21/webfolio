import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';

import ProjectList from '@/components/Profile/ProjectList';
import UserInfo from '@/components/Profile/UserInfo';
import app from '../../shared/firebaseConfig.js';

const Profile = () => {

  const {data:session} = useSession();
  const db=getFirestore(app);
  const [userProject,setUserProject]=useState([]);

  useEffect(()=>{
    if(session){
        setUserProject([]); 
        getUserProjects();
     }
    },[session]);

  const getUserProjects = async () => {
    if (session){
      const q = query(collection(db, "Projects"), where("userEmail", "==", session.user.email));
      const querySnapshot = await getDocs(q);
      querySnapshot.forEach((doc) => {
        let data=doc.data();
        setUserProject(userProject=>
          [...userProject,data])
      });
      
    }
  }

  console.log(userProject);
  return (
    <div className='px-10'>
      <UserInfo />

      <ProjectList userProject={userProject}/>
    </div>
  )
}

export default Profile;
