import React from 'react';
import {AppContext} from "../App/AppProvider";

export default function ({firstVisit}) {
    return (
        <AppContext.Consumer>
            {({firstVisit}) =>
                firstVisit ?
                    <div>
                        Welcome to CryptoDash. Please Select Your Favorite Coins to Begin!{' '}
                    </div> : null
            }
        </AppContext.Consumer>
    );
}
