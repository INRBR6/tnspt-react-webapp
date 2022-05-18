import { store } from "../store";

const { dispatch } = store;

const dispatchProductQuoteFiltersFetch = () => dispatch.pricing.fetchProductQuoteFilters(null);

const dispatchFreightQuoteFiltersFetch = () => dispatch.pricing.fetchProductQuoteFilters(null);

const dispatchCalculatedPriceFilterFetch = () => dispatch.pricing.fetchCalculatedPriceFilters(null);

export {
    dispatchProductQuoteFiltersFetch,
    dispatchFreightQuoteFiltersFetch,
    dispatchCalculatedPriceFilterFetch
}