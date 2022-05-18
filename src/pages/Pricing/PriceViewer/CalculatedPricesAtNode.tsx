import { Flexbox, Select, Option, Grid, Heading } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";

import { productQuoteFilters } from "../../../constants/priceViewer";

const TnsCalculatedPricesAtNode = ():JSX.Element => {
    return (
        <CalculatedPricesMainContainer>
            <PriceTypeFilterContainer>
                <Grid>
                    <Heading type="h4">Price Type</Heading>
                    <Select
                        aria-label="Select"
                        optionLabelProp="value"
                        size="small"
                        placeholder="Please select a Price Type"
                    >
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                    </Select>
                </Grid>
            </PriceTypeFilterContainer>
            <ProductFilterContainer>
                <Grid>
                    <Heading type="h4">Product</Heading>
                    <Grid columns={4}>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Summary Class"
                            >
                                {productQuoteFilters.priceType.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Marketing Material Summary"
                            >
                                {productQuoteFilters.product.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Marketing Material Group"
                            >
                                {productQuoteFilters.source.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Global Product"
                            >
                                {productQuoteFilters.market.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Material"
                            >
                                {productQuoteFilters.period.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </ProductFilterContainer>
            <LocationFilterContainer>
                <Grid>
                    <Heading type="h4">Location</Heading>
                    <Grid columns={4}>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Region"
                            >
                                {productQuoteFilters.period.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Geography"
                            >
                                {productQuoteFilters.period.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Country"
                            >
                                {productQuoteFilters.period.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Supply Location"
                            >
                                {productQuoteFilters.period.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </LocationFilterContainer>
            <TierFilterContainer>
                <Grid>
                    <Heading type="h4">Tier</Heading>
                    <Select
                        aria-label="Select"
                        optionLabelProp="value"
                        size="small"
                        placeholder="Please select a Tier"
                    >
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                    </Select>
                </Grid>
            </TierFilterContainer>
        </CalculatedPricesMainContainer>
    )
};

export default TnsCalculatedPricesAtNode;

const PriceTypeFilterContainer = styled(Flexbox)`
    margin: 10px;
    flex:1;
`

const ProductFilterContainer = styled(Flexbox)`
    margin: 10px;
    flex:2
`;

const LocationFilterContainer = styled(Flexbox)`
    margin: 10px;
    flex:1
`;

const TierFilterContainer = styled(Flexbox)`
`;

const CalculatedPricesMainContainer = styled(Flexbox)`
    flex-direction: column;
    align-self: stretch;
    width: 100%;
    flex:1;
`;