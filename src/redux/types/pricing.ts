export interface IPricingModel {
    priceViewer: IPriceViewerState;
}

interface IPriceViewerState {
    productQuote:{
        preconfiguredSettings:any
        filters:any
        validityType: any
    },
    calculatedPrices:{
        priceType:any
        filters:any
        tierType:any
    },
    freightQuote:{
        preconfiguredSettings:any
        filters:any
        validityType:any
    },
    displayOptions:{

    },
    table:{

    },
    settings:{
        availableSettings:any
        settingDetails:any
        transferSettings:any
    }
}