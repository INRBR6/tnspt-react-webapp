import { routerConfig } from "./routes"

export const pricingMainMenu = [{
    title:'Home',
    toRoute:routerConfig.pricing.default
},{
    title:'Price Viewer',
    toRoute:`${routerConfig.pricing.default}${routerConfig.pricing.priceViewer.default}`
},{
    title:'Manage Price Formula',
    toRoute:routerConfig.pricing.default
},{
    title:'Manage Price Component',
    toRoute:routerConfig.pricing.default
},{
    title:'Manage YT Transfer Price',
    toRoute:routerConfig.pricing.default
},{
    title:'User Transfer Ownership',
    toRoute:routerConfig.pricing.default
},{
    title:'Manage Formula Owner Rule',
    toRoute:routerConfig.pricing.default
},{
    title:'Pricing Config Admin',
    toRoute:routerConfig.pricing.default
},{
    title:'Transfer Ownership',
    toRoute:routerConfig.pricing.default
},{
    title:'Calculate Job Scheduler',
    toRoute:routerConfig.pricing.default
},{
    title:'Formula Bulk Loader',
    toRoute:routerConfig.pricing.default
}];