import React from 'react';
import {AppContext} from "../App/AppProvider";
import styled from 'styled-components';
import {Tile} from "../Shared/Tile";
import CoinImage from "../Shared/CoinImage";

const SpotLightName = styled.h2`
    text-align: center;
`
export default function (){
    return (
        <AppContext.Consumer>
            {({currentFavorite, coinList}) =>
                <Tile>
                    <SpotLightName>{coinList[currentFavorite].CoinName}</SpotLightName>
                    <CoinImage spotlight coin={coinList[currentFavorite]}/>
                </Tile>
            }
        </AppContext.Consumer>
    )
}

