import React from 'react'
import { useState } from 'react'
import FilterAltIcon from '@mui/icons-material/FilterAlt'
import { RawData } from './dashboardRawdata'
import { DataVisualization } from './dashboardDataVisualization'
import { Setting, SettingFilter } from './dashboardSetting'

export function MainContext ({ type }) {
    // Setting content switch part
    const [settingType, setType] = useState('manage-accounts')
    const changeSettingType = (settingType) => {
        setType(settingType)
    }
    // Main content switch part
    const windowsSwitch = (type) => {
        console.log(type)
        if (type === 'raw-data') {
            return (
                <RawData />
            )
        } else if (type === 'data-visualization') {
            return (
                <DataVisualization />
            )
        } else if (type === 'setting') {
            return <Setting Settingtype={settingType} />
        }
    }

    const FilterAlt = (type) => {
        if (type === 'raw-data' || type === 'data-visualization') {
            return (
                <div className="file-database">
                    <h1 className='datamenus' >Data menu</h1>
                    <div className="file-database-list">
                        <text className='filterName'>Today</text>
                        <div className="time-frame today"></div>
                        <text className='filterName'>Last 3 Days</text>
                        <div className="time-frame last-3-day"></div>
                        <text className='filterName'>Last 30 Days</text>
                        <div className="time-frame last-30-day"></div>
                    </div>
                </div>
            )
        }
        else if (type === 'setting') {
            return (
                <SettingFilter changeSettingType={changeSettingType} settingType={settingType} />)
        }
    }
    return (
        <div className="main-content">
            {FilterAlt(type)}
            {windowsSwitch(type)}
        </div>
    )
}