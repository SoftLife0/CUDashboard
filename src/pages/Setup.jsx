import React, {useState} from 'react'
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { Route, Switch } from 'react-router-dom';
import SchoolsForm from '../components/Setup/School';
import Layout from '../layouts/Layout';


const Setup = () => {

    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    console.log("Triggered sidebar function")
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <Layout>
        <div>
            Hi
        </div>
    </Layout>
  )
}

export default Setup