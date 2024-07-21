import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SchoolsForm from '../components/Setup/School'


const Setup = () => {

  return (
    <Layout>
       <Switch>
        <Route path="/setup/schools" component={SchoolsForm} />
        {/* Add more routes as needed */}
      </Switch>
    </Layout>
  )
}

export default Setup