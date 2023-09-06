# IT-Project
COMP30022
###Environment
- **Node.js Version:** 18.16+ | **Source:** [Node.js Official Website](https://nodejs.org/en)
- **MongoDB Version:** 6.0.9+ | **Source:** [MongoDB Official Website](https://www.mongodb.com/try/download/community)
### How to Run

Follow these steps to run the project:

1. **Delete the `node_modules` folder:**
   Run the following command in the project's root directory to delete the `node_modules` folder:
   ```sh
   rm -rf node_modules
2. **then start backend and frontend fron terminal**
   ```
   cd backend
   npm install
   npm start
   ```
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

