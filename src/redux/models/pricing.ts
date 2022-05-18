import { createModel } from "@rematch/core";
import { RootModel } from ".";
import { IPricingModel } from "../types/pricing";
import ApiService from "../../api/apiService";
import { pricingUrls } from '../../constants/apiUrls';

const initialState: IPricingModel = {
    priceViewer:{
        productQuote:{
            preconfiguredSettings:null,
            filters: null,
            validityType: null
        },
        calculatedPrices:{
            priceType:null,
            filters:null,
            tierType:null
        },
        freightQuote:{
            preconfiguredSettings:null,
            filters:null,
            validityType:null
        },
        displayOptions:{

        },
        table:{

        },
        settings:{
            availableSettings:null,
            settingDetails:null,
            transferSettings:null
        }
    }
};

export const pricing = createModel<RootModel>()({
    state: initialState,
    reducers: {
      updateProductQuoteFilters(state, payload: any) {
        return {
            ...state,
            priceViewer: {
                ...state.priceViewer,
                productQuote: {
                    ...state.priceViewer.productQuote,
                    filters: payload
                }
            }
        };
      },
      updateCalculatePriceFilters(state, payload: any) {
        return {
            ...state,
            priceViewer: {
                ...state.priceViewer,
                calculatedPrices: {
                    ...state.priceViewer.calculatedPrices,
                    filters: payload
                }
            }
        };
      },
      updateFreightQuoteFilters(state, payload: any) {
        return {
            ...state,
            priceViewer: {
                ...state.priceViewer,
                freightQuote: {
                    ...state.priceViewer.freightQuote,
                    filters: payload
                }
            }
        };
      }
    },
    effects: (dispatch) => ({
        fetchProductQuoteFilters: async (payload, state) => {
            debugger;
            const response = await ApiService.doGet(pricingUrls.priceViewer.productQuoteFilters);
            dispatch.pricing.updateProductQuoteFilters(response);
        },
        fetchCalculatedPriceFilters: async(payload, state) => {

        },
        fetchFreightQuoteFilters: async(payload, state) => {

        }
    }),
});