import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Layout from '../layouts/Layout';
import SchoolsForm from '../components/Setup/School'
import BankForm from '../components/Setup/Bank'


const Setup = () => {

  return (
    <Layout>
       <Switch>
        <Route path="/setup/schools" component={SchoolsForm} />
        <Route path="/setup/banks" component={BankForm} />
        {/* Add more routes as needed */}
      </Switch>
    </Layout>
  )
}

export default Setup