import TnsProductQuotePage from '../pages/Pricing/PriceViewer/ProductQuote';
import TnsCalculatedPricesAtNode from '../pages/Pricing/PriceViewer/CalculatedPricesAtNode';
import TnsPriceViewerFreightQuote from '../pages/Pricing/PriceViewer/FreightQuote';
import TnsPriceViewerDisplayOptions from '../pages/Pricing/PriceViewer/DisplayOptions';
import TnsPriceViewerTable from '../pages/Pricing/PriceViewer/Table';
import TnsPriceViewerSettings from '../pages/Pricing/PriceViewer/Settings'

export const priceViewerSections = [{
    title:'Product Quote',
    PageComponent:TnsProductQuotePage
},{
    title:'Calculated Prices At Node',
    PageComponent:TnsCalculatedPricesAtNode
},{
    title:'Freight Quote',
    PageComponent:TnsPriceViewerFreightQuote
},{
    title:'Display Options',
    PageComponent:TnsPriceViewerDisplayOptions
},{
    title:'Table',
    PageComponent:TnsPriceViewerTable
},{
    title:'Settings',
    PageComponent:TnsPriceViewerSettings
}];

export const productQuoteFilters = {
    priceType:[{
        id:1,
        name:'Crude Differential'
    },{
        id:2,
        name:'Marker'
    },{
        id:3,
        name:'Product Differential'
    },{
        id:4,
        name:'SEOP Assessment'
    },{
        id:5,
        name:'SOPE Assessment'
    }],
    product:[{
        id:1,
        name:'Acetone'
    }],
    source:[{
        id:1,
        name:'ADNOC-Abu Dhabi National Oil Company'
    }],
    market:[{
        id:1,
        name:'AFEI'
    }],
    period:[{
        id:1,
        name:'BOM'
    }],
    property:[{
        id:1,
        name:'A-Ask'
    }]
};