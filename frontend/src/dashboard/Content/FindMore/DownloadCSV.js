import React, { useState } from "react";
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Badge from '@mui/material/Badge';
import NotificationsIcon from '@mui/icons-material/Notifications';
import axios from 'axios';



const handleDownloadCSV = async () => {
    try {
      // 发送 GET 请求到后端的下载路由
      const response = await axios.get('http://localhost:5002/api/auth/exportCSV', { responseType: 'blob' });
  
      // 创建一个 Blob 对象并设置 MIME 类型
      const blob = new Blob([response.data], { type: 'text/csv' });
  
      // 创建一个下载链接并模拟点击
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'user.csv'; // 设置文件名为user.csv
      a.click();
  
      // 释放 Blob 对象
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading data:', error);
    }
  }

  

const DownloadCSV = () => {
    return (
        <>
            <MenuItem>
                <IconButton
                    size="large"
                    color="inherit"
                    onClick={handleDownloadCSV}
                >
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon 
                        sx={{
                            width: 150, // 自定义宽度
                            height: 150, // 自定义高度
                        }}
                        />
                    </Badge>
                </IconButton>
            </MenuItem>
        </>
    );
};

export default DownloadCSV;