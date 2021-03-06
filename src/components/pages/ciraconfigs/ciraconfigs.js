/*********************************************************************
* Copyright (c) Intel Corporation 2020
* SPDX-License-Identifier: Apache-2.0
**********************************************************************/

import React from 'react';
import { CiraEditor, RpsProvider } from 'ui-toolkit'
import Config from 'app.config'

export class CiraConfigs extends React.Component {
    render() {
        const data = {
            rpsKey: Config.rpsApiKey,
            mpsKey: Config.mpsApiKey
        }
        return(<RpsProvider data={data}>
               <CiraEditor rpsServer={Config.serviceUrls.rps} mpsServer={Config.serviceUrls.mps} />
               </RpsProvider>
        )
    }
}