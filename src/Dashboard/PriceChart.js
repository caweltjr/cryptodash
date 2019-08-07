import HighchartsConfig from "./HighchartsConfig"
import React from 'react';
import {AppContext} from "../App/AppProvider";
import {Tile} from "../Shared/Tile";
import ReactHighcharts from "react-highcharts";
import HighchartsTheme from "./HighchartsTheme";

ReactHighcharts.Highcharts.setOptions(HighchartsTheme);

export default function () {
    return (
        <AppContext.Consumer>
            {({}) =>
                <Tile>
                    <ReactHighcharts config={HighchartsConfig()}/>
                </Tile>
            }
        </AppContext.Consumer>
    )
}