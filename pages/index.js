import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header/Header";
import { collection, getDocs, getFirestore, orderBy, query } from 'firebase/firestore'
import app from '../shared/firebaseConfig'
import { useEffect, useState } from 'react'
import ProjectList from '../components/Profile/ProjectList'

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const db=getFirestore(app)
  const [projects,setProjects]=useState([]);

  useEffect(() => {
    getAllProjects();
  }, [])
  
  const getAllProjects = async() =>{
    const q = query(collection(db, "Projects"),
    orderBy("id","desc")
    );
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      setProjects(projects=>[...projects,doc.data()]);
    });
  }


  return (
    <div className='p-5'>
      <h2 className='text-[25px] mb-[-15px]'>All Latest Projects</h2>
      {projects?
      <ProjectList userProject={projects} />:null}
    
    </div>
  );
}
