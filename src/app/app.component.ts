import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

    columnDefs: ColDef[] = [
        { field: '__EMPTY' },
        { field: 'BTC' },
        { field: 'ETH' },
        { field: 'SOL' },
        { field: 'USD C' },
        { field: '__EMPTY_1' },
        { field: '__EMPTY_2' },
        { field: '__EMPTY_3' },
        { field: '__EMPTY_4' },
        { field: '__EMPTY_5' },
        { field: '__EMPTY_6' },
        { field: '__EMPTY_7' },
        { field: '__EMPTY_8' }
    ];

    rowData = [
        {
          "ETH": "16.00",
          "SOL": "1263.35",
          "USD C": "29373.00"
        },
        {
          "BTC": "-",
          "SOL": "78.97",
          "USD C": "1836.00"
        },
        {
          "BTC": "-",
          "ETH": "-",
          "USD C": "23.25"
        },
        {
          "BTC": "-",
          "ETH": "-",
          "SOL": "-"
        },
        {
          "__EMPTY": ""
        },
        {
          "__EMPTY": ""
        },
        {
          "__EMPTY": ""
        },
        {
          "__EMPTY_8": "Things to improve :"
        },
        {
          "__EMPTY": "",
          "USD C": "(needs a correlation check-up)",
          "__EMPTY_8": "Add Lambda and Color"
        },
        {
          "__EMPTY": "",
          "BTC": "BTC/USDC",
          "ETH": "ETH/USDC",
          "SOL": "SOL/USDC",
          "USD C": "BTC/ETH",
          "__EMPTY_1": "BTC/SOL",
          "__EMPTY_2": "ETH/SOL",
          "__EMPTY_8": "adjust for american style options"
        },
        {
          "BTC": "40%",
          "ETH": "40%",
          "SOL": "40%",
          "USD C": "30%",
          "__EMPTY_1": "30%",
          "__EMPTY_2": "30%",
          "__EMPTY_8": "adjust for underlying options futures prices"
        },
        {
          "BTC": "35%",
          "ETH": "35%",
          "SOL": "35%",
          "USD C": "28%",
          "__EMPTY_1": "28%",
          "__EMPTY_2": "28%",
          "__EMPTY_8": "add other pairs"
        },
        {
          "BTC": "30%",
          "ETH": "30%",
          "SOL": "30%",
          "USD C": "25%",
          "__EMPTY_1": "25%",
          "__EMPTY_2": "25%",
          "__EMPTY_8": "imporve vol 3D vol panes"
        },
        {
          "BTC": "25%",
          "ETH": "25%",
          "SOL": "25%",
          "USD C": "23%",
          "__EMPTY_1": "23%",
          "__EMPTY_2": "23%",
          "__EMPTY_8": "double-check all implied vols "
        },
        {
          "BTC": "20%",
          "ETH": "20%",
          "SOL": "20%",
          "USD C": "20%",
          "__EMPTY_1": "20%",
          "__EMPTY_2": "20%",
          "__EMPTY_8": "add Open Interest"
        },
        {
          "BTC": "15%",
          "ETH": "15%",
          "SOL": "15%",
          "USD C": "18%",
          "__EMPTY_1": "18%",
          "__EMPTY_2": "18%",
          "__EMPTY_8": "add tools for each seperate type of client"
        },
        {
          "__EMPTY": "",
          "__EMPTY_8": "link spot prices to automatic market input"
        },
        {
          "__EMPTY": "",
          "__EMPTY_8": "improve the links of the blue cells"
        },
        {
          "__EMPTY": "",
          "__EMPTY_8": "add USD values to all non-USDC-pairs for better understanding (USD equivalents)"
        },
        {
          "__EMPTY_8": "verify USD / USDC parity  = 0,999??"
        },
        {
          "BTC": "3.00%",
          "__EMPTY_8": "to adjust for final choice real maturity dates"
        },
        {
          "BTC": "3.25%",
          "__EMPTY_8": "to check standard deviations with market history windows"
        },
        {
          "BTC": "3.50%",
          "__EMPTY_8": "to check futures prices and their standard deviations"
        },
        {
          "BTC": "3.75%",
          "__EMPTY_8": "to amplify the hedging tools - for each type of position"
        },
        {
          "__EMPTY": ""
        },
        {
          "__EMPTY": "",
          "__EMPTY_7": "Spot/Strike"
        },
        {
          "BTC": "BTC/USDC",
          "ETH": "ETH/USDC",
          "SOL": "SOL/USDC",
          "USD C": "BTC/ETH",
          "__EMPTY_1": "BTC/SOL",
          "__EMPTY_2": "ETH/SOL",
          "__EMPTY_5": "Time to Maturity",
          "__EMPTY_6": "Vol Hist approx",
          "__EMPTY_7": "Moneyness"
        },
        {
          "BTC": "2000",
          "ETH": "100",
          "SOL": "2",
          "USD C": "1",
          "__EMPTY_1": "100",
          "__EMPTY_2": "5",
          "__EMPTY_4": "1",
          "__EMPTY_5": "0.003",
          "__EMPTY_6": "0.4",
          "__EMPTY_7": "0.92",
          "__EMPTY_8": "32000.00"
        },
        {
          "BTC": "4",
          "ETH": "2",
          "SOL": "0",
          "USD C": "0",
          "__EMPTY_1": "2",
          "__EMPTY_2": "1",
          "__EMPTY_4": "7",
          "__EMPTY_5": "0.019",
          "__EMPTY_6": "0.4"
        },
        {
          "__EMPTY": "",
          "__EMPTY_4": "14",
          "__EMPTY_5": "0.039",
          "__EMPTY_6": "0.35"
        },
        {
          "__EMPTY": "",
          "BTC": "16000.00",
          "ETH": "1200.00",
          "SOL": "10.00",
          "USD C": "9.00",
          "__EMPTY_1": "600.00",
          "__EMPTY_2": "45.00",
          "__EMPTY_4": "30",
          "__EMPTY_5": "0.083",
          "__EMPTY_6": "0.3"
        },
        {
          "__EMPTY": "",
          "BTC": "18000.00",
          "ETH": "1300.00",
          "SOL": "12.00",
          "USD C": "10.00",
          "__EMPTY_1": "700.00",
          "__EMPTY_2": "50.00",
          "__EMPTY_4": "45",
          "__EMPTY_5": "0.125",
          "__EMPTY_6": "0.25"
        },
        {
          "__EMPTY": "",
          "BTC": "20000.00",
          "ETH": "1400.00",
          "SOL": "14.00",
          "USD C": "11.00",
          "__EMPTY_1": "800.00",
          "__EMPTY_2": "55.00",
          "__EMPTY_4": "60",
          "__EMPTY_5": "0.167",
          "__EMPTY_6": "0.2"
        },
        {
          "__EMPTY": "",
          "BTC": "22000.00",
          "ETH": "1500.00",
          "SOL": "16.00",
          "USD C": "12.00",
          "__EMPTY_1": "900.00",
          "__EMPTY_2": "60.00",
          "__EMPTY_4": "90",
          "__EMPTY_5": "0.250",
          "__EMPTY_6": "0.15"
        },
        {
          "__EMPTY": "",
          "BTC": "24000.00",
          "ETH": "1600.00",
          "SOL": "18.00",
          "USD C": "13.00",
          "__EMPTY_1": "1000.00",
          "__EMPTY_2": "65.00"
        },
        {
          "__EMPTY": "",
          "BTC": "26000.00",
          "ETH": "1700.00",
          "SOL": "20.00",
          "USD C": "14.00",
          "__EMPTY_1": "1100.00",
          "__EMPTY_2": "70.00"
        },
        {
          "__EMPTY": "",
          "BTC": "28000.00",
          "ETH": "1800.00",
          "SOL": "22.00",
          "USD C": "15.00",
          "__EMPTY_1": "1200.00",
          "__EMPTY_2": "75.00",
          "__EMPTY_5": "hedging volatilty"
        },
        {
          "BTC": "30000.00",
          "ETH": "1900.00",
          "SOL": "24.00",
          "USD C": "16.00",
          "__EMPTY_1": "1300.00",
          "__EMPTY_2": "80.00",
          "__EMPTY_5": "arbitraging vol"
        },
        {
          "__EMPTY": "",
          "BTC": "32000.00",
          "ETH": "2000.00",
          "SOL": "26.00",
          "USD C": "17.00",
          "__EMPTY_1": "1400.00",
          "__EMPTY_2": "85.00",
          "__EMPTY_5": "option skew trading"
        },
        {
          "__EMPTY": "",
          "BTC": "34000.00",
          "ETH": "2100.00",
          "SOL": "28.00",
          "USD C": "18.00",
          "__EMPTY_1": "1500.00",
          "__EMPTY_2": "90.00",
          "__EMPTY_5": "delta vega gamma arb"
        },
        {
          "__EMPTY": "",
          "BTC": "36000.00",
          "ETH": "2200.00",
          "SOL": "30.00",
          "USD C": "19.00",
          "__EMPTY_1": "1600.00",
          "__EMPTY_2": "95.00"
        },
        {
          "__EMPTY": "",
          "BTC": "38000.00",
          "ETH": "2300.00",
          "SOL": "32.00",
          "USD C": "20.00",
          "__EMPTY_1": "1700.00",
          "__EMPTY_2": "100.00"
        },
        {
          "__EMPTY": "",
          "BTC": "40000.00",
          "ETH": "2400.00",
          "SOL": "34.00",
          "USD C": "21.00",
          "__EMPTY_1": "1800.00",
          "__EMPTY_2": "105.00"
        },
        {
          "__EMPTY": "",
          "BTC": "42000.00",
          "ETH": "2500.00",
          "SOL": "36.00",
          "USD C": "22.00",
          "__EMPTY_1": "1900.00",
          "__EMPTY_2": "110.00"
        },
        {
          "__EMPTY": "",
          "BTC": "44000.00",
          "ETH": "2600.00",
          "SOL": "38.00",
          "USD C": "23.00",
          "__EMPTY_1": "2000.00",
          "__EMPTY_2": "115.00"
        },
        {
          "__EMPTY": ""
        },
        {
          "__EMPTY": "",
          "BTC": "today",
          "ETH": "8/11/23"
        },
        {
          "BTC": "1 Day",
          "ETH": "8/12/23"
        },
        {
          "BTC": "7 Days",
          "ETH": "8/18/23"
        },
        {
          "BTC": "14 Days",
          "ETH": "8/25/23"
        },
        {
          "BTC": "1 Month",
          "ETH": "9/10/23"
        },
        {
          "BTC": "2 Months",
          "ETH": "10/10/23"
        },
        {
          "BTC": "3 Months",
          "ETH": "11/9/23"
        },
        {
          "__EMPTY": ""
        }
      ]

}
