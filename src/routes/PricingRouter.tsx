import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { TnsPricingHomePage, TnsPriceViewerPage } from '../pages';
import { routerConfig } from '../constants/routes';

const TnsPricingRouter = (): JSX.Element => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={path}>
                <TnsPricingHomePage />
            </Route>
            <Route path={`${path}${routerConfig.pricing.priceViewer.default}`}>
                <TnsPriceViewerPage />
            </Route>
        </Switch>
    )
};

export default TnsPricingRouter;