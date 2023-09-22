import React, { useState } from 'react'
import AppBar from './AppBar/AppBar'
import { styled } from "@mui/system"
import SideBar from './SideBar/SideBar'
import Content from './Content/Content'


const Wrapper = styled("div")({
    width: "100%",
    overflow: "auto",
    height: "100vh",
    display: "flex",
})

export function Dashboard () {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true)
    const [selectedContent, setSelectedContent] = useState('rawData')

    const handleContentChange = (content) => {
        setSelectedContent(content)
    }



    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen)
    }

    return (
        <Wrapper>
            {isSidebarOpen && <SideBar onContentChange={handleContentChange} isSidebarOpen={isSidebarOpen} />}
            <Content type={selectedContent} />
            <AppBar flag={toggleSidebar} />

        </Wrapper>
    )
}
