import { Suspense } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom';
import { routerConfig } from '../constants/routes';
import TnsHeader from '../components/TnsHeader';
import TnsFooter from '../components/TnsFooter';
import TnsContentArea from '../components/TnsContentArea';
import { TnsHomePage, TnsPricingPage } from '../pages'

const TnsRouter = (): JSX.Element => {
    return (
        <Router>
            <TnsHeader />
            <TnsContentArea>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <Route exact path={routerConfig.home}>
                            <TnsHomePage />
                        </Route>
                        <Route path={routerConfig.pricing.default}>
                            <TnsPricingPage />
                        </Route>
                        <Route path='*'>
                            <span>404</span>
                        </Route>
                    </Switch>
                </Suspense>
            </TnsContentArea>
            {/* <TnsFooter /> */}
        </Router>
    )
}

export default TnsRouter