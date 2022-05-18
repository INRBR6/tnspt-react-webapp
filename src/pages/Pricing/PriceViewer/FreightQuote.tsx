import { Flexbox, Select, Option, RadioButton, Grid, Heading } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";
import { productQuoteFilters } from "../../../constants/priceViewer";

const TnsPriceViewerFreightQuote = ():JSX.Element => {
    return (
        <FreightQuoteMainContainer>
            <AvailableQuotesContainer>
                <Grid>
                    <Heading type="h4">Freight Quote Settings</Heading>
                    <Select
                        aria-label="Select"
                        optionLabelProp="value"
                        size="small"
                        placeholder="Please select a setting that you would like to load"
                    >
                        <Option value="1">Option 1</Option>
                        <Option value="2">Option 2</Option>
                        <Option value="3">Option 3</Option>
                    </Select>
                </Grid>
            </AvailableQuotesContainer>
            <QuotesFilterContainer>
                <Grid>
                    <Heading type="h4">Freight Quotes Filter</Heading>
                    <Grid columns={3}>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Cost Basis*"
                            >
                                {productQuoteFilters.priceType.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Transport Type"
                            >
                                {productQuoteFilters.product.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Source"
                            >
                                {productQuoteFilters.source.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Product"
                            >
                                {productQuoteFilters.market.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Vessel Class"
                            >
                                {productQuoteFilters.period.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Journey"
                            >
                                {productQuoteFilters.property.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                    </Grid>
                </Grid>
            </QuotesFilterContainer>
            <ValidityContainer>
                <Grid>
                    <Heading type="h4">Validity</Heading>
                    <Grid columns={3}>
                        <ValidityRadioButton
                            label="Active"
                            name="Active"
                            onChange={function noRefCheck(){}}
                            size="small"
                            value="Active"
                        />
                        <ValidityRadioButton
                            label="Expired"
                            name="Expired"
                            onChange={function noRefCheck(){}}
                            size="small"
                            value="Expired"
                        />
                        <ValidityRadioButton
                            label="Any"
                            name="Any"
                            onChange={function noRefCheck(){}}
                            size="small"
                            value="Any"
                        />
                    </Grid>
                </Grid>
            </ValidityContainer>
        </FreightQuoteMainContainer>
    )
};

const AvailableQuotesContainer = styled(Flexbox)`
    margin: 10px;
    flex:1;
`

const QuotesFilterContainer = styled(Flexbox)`
    margin: 10px;
    flex:2
`;

const ValidityContainer = styled(Flexbox)`
    margin: 10px;
    flex:1
`;

const ValidityRadioButton = styled(RadioButton)`
    span{
        font-weight:400;
        font-size:13px;
    }
`;

const FreightQuoteMainContainer = styled(Flexbox)`
    flex-direction: column;
    align-self: stretch;
    width: 100%;
    flex:1;
`;

export default TnsPriceViewerFreightQuote;