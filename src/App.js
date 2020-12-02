import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import { MyHistoryPage, CostAnalysisPage } from 'pages'

const browserHistory = createBrowserHistory()

function App() {
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={'/'} component={() => <></>} />
        <Route path={'/my_history'} component={MyHistoryPage} />
        <Route path={'/cost_analysis'} component={CostAnalysisPage} />
        <Redirect path={'*'} to={'/'} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
