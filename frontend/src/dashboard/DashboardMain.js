import './App.css'
import './frontType.css'
import React, { useState } from 'react'
import { DashboardHeader } from './dashboardHeader'
import { MainContext } from './dashboardContent/dashboardContentMain'

export function Dashboard () {
    const [type, setType] = useState('raw-data')
    console.log(type)
    const changeLayOut = (newtype) => {
        setType(newtype)
    }
    return (
        <div className="App">
            <DashboardHeader changeLayOut={changeLayOut} />
            <MainContext type={type} />
        </div>
    )
}
