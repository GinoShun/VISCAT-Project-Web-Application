import './App.css'
import './frontType.css'
import React, { useState } from 'react'
import AppBar from './AppBar/AppBar'
import { styled } from "@mui/system"
import SideBar from './SideBar/SideBar'
import Content from './Content/Content'

const Wrapper = styled("div")({
    width: "100%",
    height: "100vh",
    display: "flex",
});

export function Dashboard() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true) // 添加一个状态来控制Sidebar的显示和隐藏



    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen) // 切换Sidebar的显示状态
    }

    return (
        <Wrapper>
            {isSidebarOpen && <SideBar />} {/* 根据isSidebarOpen的值来决定是否渲染Sidebar */}
            <Content />
            <AppBar flag={toggleSidebar} />
        </Wrapper>
    )
}
