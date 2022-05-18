import { Flexbox, Table, Grid, Heading, RadioButton, Button } from "@sede-x/shell-ds-react-framework";
import styled from "styled-components";

const TnsPriceViewerTable = ():JSX.Element => {
    return (
        <TableMainContainer>
            <DailySpotTableContainer>
                <Table
                    size="small"
                    columns={[{
                        dataIndex: 'date',
                        key: 'date',
                        title: 'Date (UOM=ASQ)',
                        width: '50%'
                    },{
                        dataIndex: 'dailySpot',
                        key: 'dailySpot',
                        title: '11SBEMTH02_I369 (Daily Spot)[USD/barrel (US)]',
                        width: '50%'
                    }]}
                    data={[{
                        dailySpot: 'PQ - Africa_Crude_Premium_Aseng_Spot_P',
                        date: '3.81'
                    },{
                        dailySpot: 'PQ - Africa_Crude_Premium_Aseng_Spot_P',
                        date: '3.81'
                    }]}
                />
            </DailySpotTableContainer>
            <SpreadSheetDowloadContainer>
                <Grid>
                    <Heading type="h4">Spreadsheet Download</Heading>
                    <Grid columns={2}>
                        <Grid>
                            <SpreadSheetOptionsContainer>
                                <SpreadSheetOptionButton
                                    label=""
                                    size="small"
                                    name="T1"
                                    onChange={function noRefCheck(){}}
                                    value="t1"
                                />
                                <Table
                                    size="small"
                                    columns={[{
                                        dataIndex: 'date',
                                        key: 'date',
                                        title: '',
                                        width: '5%'
                                    },{
                                        dataIndex: 'quote1',
                                        key: 'quote1',
                                        title: 'Quote 1',
                                        width: '5%'
                                    },{
                                        dataIndex: 'quote2',
                                        key: 'quote2',
                                        title: 'Quote 2',
                                        width: '5%'
                                    }]}
                                    data={[{
                                        date: 'Date'
                                    },{
                                        date: 'Date'
                                    }]}
                                />
                            </SpreadSheetOptionsContainer>
                            
                        </Grid>
                        <Grid>
                            <SpreadSheetOptionsContainer>
                                <SpreadSheetOptionButton
                                    label=""
                                    name="T1"
                                    size="small"
                                    onChange={function noRefCheck(){}}
                                    value="t1"
                                />
                                <Table
                                    size="small"
                                    columns={[{
                                        dataIndex: 'date',
                                        key: 'date',
                                        title: '',
                                        width: '5%'
                                    },{
                                        dataIndex: 'date1',
                                        key: 'date1',
                                        title: 'Date',
                                        width: '5%'
                                    },{
                                        dataIndex: 'date2',
                                        key: 'date2',
                                        title: 'Date',
                                        width: '5%'
                                    }]}
                                    data={[{
                                        date: 'Quote'
                                    },{
                                        date: 'Quote'
                                    }]}
                                />
                            </SpreadSheetOptionsContainer>
                            
                        </Grid>
                    </Grid>
                    <SpreadSheetButtonContainer>
                        <Button 
                            size="small"
                            variant="filled"
                        >
                            Download in Spreadsheet Format
                        </Button>
                    </SpreadSheetButtonContainer>
                </Grid>
            </SpreadSheetDowloadContainer>
        </TableMainContainer>
    )
};

const TableMainContainer = styled(Flexbox)`
    margin: 10px;
    flex:1;
    flex-direction: column;
`;

const DailySpotTableContainer = styled(Flexbox)`
    width:100%;
    margin-bottom: 10px;
    flex:1;
`;

const SpreadSheetDowloadContainer = styled(Flexbox)`
`;

const SpreadSheetOptionButton = styled(RadioButton)`
    margin-right:10px;
`;
const SpreadSheetOptionsContainer = styled(Flexbox)`
    flex-direction: row;
    padding:0px 10px;
`;
const SpreadSheetButtonContainer = styled(Flexbox)`
    justify-content:center;
    margin-top:10px;
`;
export default TnsPriceViewerTable;