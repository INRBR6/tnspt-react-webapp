import { routerConfig } from "./routes";

const headerPromoTitle = 'T&S Pricing Tool';

const headerConfig = [{
    titleName: 'Pricing',
    linkTo: routerConfig.pricing.default
},{
    titleName: 'ETL Suspense',
    linkTo: routerConfig.home
},{
    titleName: 'Workflow Initiator',
    linkTo: routerConfig.home
},{
    titleName: 'WFM',
    linkTo: routerConfig.home
},{
    titleName: 'TDM',
    linkTo: routerConfig.home
},{
    titleName: 'BO Reports',
    linkTo: routerConfig.home
},{
    titleName: 'RDM',
    linkTo: routerConfig.home
},{
    titleName: 'PSG',
    linkTo: routerConfig.home
}];

export { headerPromoTitle, headerConfig };