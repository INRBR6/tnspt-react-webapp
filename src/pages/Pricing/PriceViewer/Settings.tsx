import { Flexbox, Select, Option, Grid, Heading, TextInput, TextArea, Checkbox } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";
import { productQuoteFilters } from "../../../constants/priceViewer";

const TnsPriceViewerSettings = ():JSX.Element => {
    return (
        <SettingsMainContainer>
            <AvailableSettingsContainer>
                <Grid>
                    <Heading type="h4">Available Settings</Heading>
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
            </AvailableSettingsContainer>
            <SettingsFilterContainer>
                <Grid>
                    <Heading type="h4">Setting Details</Heading>
                    <Grid>
                        <TextInput
                            placeholder="Name"
                        />
                    </Grid>
                    <Grid>
                        <TextArea 
                            placeholder="Comments" 
                        />
                    </Grid>
                </Grid>
            </SettingsFilterContainer>
            <ValidityContainer>
                <Grid>
                    <Heading type="h4">Tranfer Settings</Heading>
                    <Grid columns={2}>
                        <Grid>
                            <Select
                                size="small"
                                placeholder="Transfer Settings to"
                            >
                                {productQuoteFilters.property.map(filter =>
                                    <Option key={filter.id} value={filter.name}>{filter.name}</Option> 
                                )}
                            </Select>
                        </Grid>
                        <Grid>
                            <Checkbox
                                label="Transfer All"
                                onChange={function noRefCheck(){}}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </ValidityContainer>
        </SettingsMainContainer>
    )
};

const AvailableSettingsContainer = styled(Flexbox)`
    margin: 10px;
    flex:1;
`

const SettingsFilterContainer = styled(Flexbox)`
    margin: 10px;
    flex:2;
`;

const ValidityContainer = styled(Flexbox)`
    margin: 10px;
    flex:1
`;

const SettingsMainContainer = styled(Flexbox)`
    flex-direction: column;
    align-self: stretch;
    width: 100%;
    flex:1;
`;

export default TnsPriceViewerSettings;