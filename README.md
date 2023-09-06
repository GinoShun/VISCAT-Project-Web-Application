# IT-Project
COMP30022
###Environment
- **Node.js Version:** 18.16+ | **Source:** [Node.js Official Website](https://nodejs.org/en)
- **MongoDB Version:** 6.0.9+ | **Source:** [MongoDB Official Website](https://www.mongodb.com/try/download/community)
### How to Run

Follow these steps to run the project:        
 0. **Download ZIP file from github**
   ```
   cd your file location should be here   eg. cd project-main
   then press ls
   make sure it show
   backend		frontend
   ```

1. **Delete the `node_modules` folder:**
   Run the following command in the project's root directory to delete the `node_modules` folder:  **do not delete package.json**
   ```sh
   rm -rf node_modules
   rm package-lock.json(optional)
2. **then start backend and frontend fron terminal**
   ```
   cd backend
   npm install
   npm start
   ```
   skip this if nothing happend
   scenario: app crashed - waiting for file changes before starting...
   it means this port has been used
   solution:
   Find processes using port 3000
   ```
   //get PID from this Command Line
   lsof -i :3000
   //Terminate the process, change PID to a number
   kill -9 PID
   //for example
   kill -9 7689
   ```
   ```
   cd frontend
   npm install
   npm start
   ```
it is ok if there are warning, just make sure no error
If you encounter a different error than the one above, please proceed with the first step: Delete the `node_modules` folder and `package-lock.js`, **do not delete package.json**!!!!!!

   
### Directory structure

```
├── backend
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── package-lock.json
│   ├── package.json
│   ├── routes
│   └── server.js
└── frontend
    ├── package.json
    ├── public
    └── src
        ├── App.css                 //ignore
        ├── App.js                  //router总管理
        ├── Dashboard
        │   └── Dashboard.js        //ignore
        ├── api.js                   //了解一下, 连接数据库不用动
        ├── authPages 
        │   ├── LoginPage
        │   │   ├── LoginPage.js           //important   login page的总page
        │   │   ├── LoginPageFooter.js     //important   login中的submit键,方框最下方need an account的重定向 => 从/login 到 /register
        │   │   ├── LoginPageHeader.js     //important
        │   │   └── LoginPageInputs.js     //important
        │   └── RegisterPage
        │       ├── RegisterPage.js        //important   register page的总page
        │       ├── RegisterPageFooter.js  //important   register中的submit键,方框最下方already have account的重定向 => 从register 到 /login
        │       └── RegisterPageInputs.js  //important
        ├── index.css              //ignore
        ├── index.js               //ignore
        ├── reportWebVitals.js     //ignore
        ├── serviceWorker.js       //ignore
        ├── shared
        │   ├── components                   //这个文件夹属于一些login和register通用的模块
        │   │   ├── AlertNotification.js    //ignore  
        │   │   ├── AuthBox.js              //important   login和register的模版页
        │   │   ├── CustomPrimaryButton.js  //important   login和register中的submit键
        │   │   ├── InputWithLabel.js       //important   login和register中的输入,一个通用模版,详情看LoginPageInputs.js / RegisterPageInputs.js
        │   │   └── RedirectInfo.js         //important   方框最下方need an account/already have an account的重定向
        │   └── utils
        │       ├── auth.js                //ignore
        │       └── validators.js          //ignore   实时判断输入的email格式对不对,密码长度对不对
        └── store
            ├── actions
            │   ├── alertActions.js        //ignore
            │   └── authActions.js         //browsing。处理用户登录和注册的逻辑部分,以及成功后重定向到dashboard
            ├── reducers
            │   ├── alertReducer.js         //ignore
            │   └── authReducer.js         //ignore
            └── store.js                   //ignore
```
[![how to debug faster?!!!](https://i.postimg.cc/gj8MYTXc/2023-09-06-2-13-30.png)](https://postimg.cc/m1Z3jVyK)

### 代码浏览指南
1. 先从app.js 开始了解现有的router 如/login /register or /dashboard 等
2. 然后进入loginpage.js, 着重看34行的return, 了解有哪些组件,最后进入 authbox.js 了解login和register page最开始的结构是什么样的,[这里使用了mui的库](https://mui.com/material-ui/react-box/)
3. 接着回到loginpage.js 从第37行得知这是一个从LoginPageHeader.js 引入的标签,那么进入LoginPageHeader.js检查 代码结构是什么样的,以此类推
tip: authbox标签下可以使用<div></div>标签,或许可以通过这样的方式实现正式版login page 左右滑动的效果
主要就是改authpage 文件夹下和shared/component 文件夹下的文件
可以随便加function,以及标签但尽量不要删除现有的function(不包括html标签等视觉层),因为有一些fucntion会进行validate.

