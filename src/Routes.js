/* eslint-disable import/no-named-as-default */
import React from 'react'
import Dashboard from './Components/dashboard'
import createSurvey from './Components/createSurvey'
import CreateQuestion from './Components/createSurvey'
import CreateAnswer from './Components/createAnswers'
import HomePage from './Components/HomePage'
import SubmitPage from './Components/SubmitPage'
import Login from './Components/Dashboard/Account/login'
import Register from './Components/Dashboard/Account/Register'
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";


function index() {
  return (
    <BrowserRouter>
      <Switch>

        <Route exact path="/" component={HomePage} />
        <Route exact path="/submit" component={SubmitPage} />
        <Route path="/dashboard/home" component={Dashboard} />
        <Route path="/dashboard/register" component={Register} />
        <Route path="/dashboard/login" component={Login} />
        <Route path="/dashboard/createSurvey" component={createSurvey} />
        <Route path="/dashboard/createQuestion" component={CreateQuestion} />
        <Route path="/dashboard/createAnswer" component={CreateAnswer} />
        {/* <Route path="/dashboard/createQuestion" component={createQuestion} /> */}

      </Switch>
    </BrowserRouter>
  )
}

export default index
