import React from 'react';
import List from '../components/Dashboard.jsx/List';
import Card from '../components/Dashboard.jsx/Card';
import Notificaton from '../components/Dashboard.jsx/Notificaton';
import Layout from '../layouts/Layout';

const Dashboard = () => {

  return (
   <Layout> 
        <h5>Dashboard</h5>

        <div className='row'>
          <div className="col-lg-8">
            <Card />
            <List />
          </div>

          <div className="col-lg-4">
            <Notificaton />
          </div>
        </div>
    </Layout>
  );
};

export default Dashboard;
