# IT-Project
COMP30022
[使用教程视频版](https://youtu.be/LpWXKtgOasY)
### Environment
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
   scenario: app crashed - waiting for file changes before starting...
   it means this port has been used
   solution:
   Find processes using port 3000
   ```
   //skip this if nothing happend
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
        ├── App.js                  //router main
        ├── Dashboard
        │   └── Dashboard.js        //ignore
        ├── api.js                   
        ├── authPages 
        │   ├── LoginPage
        │   │   ├── LoginPage.js           //important   login page‘s main page
        │   │   ├── LoginPageFooter.js     //important   login's submit button,方框最下方need an account的重定向 => 从/login 到 /register
        │   │   ├── LoginPageHeader.js     //important
        │   │   └── LoginPageInputs.js     //important
        │   └── RegisterPage
        │       ├── RegisterPage.js        //important   register page‘s main page
        │       ├── RegisterPageFooter.js  //important   register's submit button,方框最下方already have account的重定向 => 从register 到 /login
        │       └── RegisterPageInputs.js  //important
        ├── index.css              //ignore
        ├── index.js               //ignore
        ├── reportWebVitals.js     //ignore
        ├── serviceWorker.js       //ignore
        ├── shared
        │   ├── components                   //This folder contains modules that are common to both the login and registration processes.
        │   │   ├── AlertNotification.js    //ignore  
        │   │   ├── AuthBox.js              //important   login and register demo page
        │   │   ├── CustomPrimaryButton.js  //important   login and register's sumbit button
        │   │   ├── InputWithLabel.js       //important   The input fields in the login and register sections follow a shared template. Refer to LoginPageInputs.js and RegisterPageInputs.js.
        │   │   └── RedirectInfo.js         //important   方框最下方need an account/already have an account的重定向
        │   └── utils
        │       ├── auth.js                //ignore
        │       └── validators.js          //ignore   Perform real-time validation to check if the entered email format and password length are correct.
        └── store
            ├── actions
            │   ├── alertActions.js        //ignore
            │   └── authActions.js         //browsing。Handle the logical aspects of user login and registration, and upon successful completion, redirect to the dashboard.
            ├── reducers
            │   ├── alertReducer.js         //ignore
            │   └── authReducer.js         //ignore
            └── store.js                   //ignore
```
[![how to debug faster?!!!](https://i.postimg.cc/gj8MYTXc/2023-09-06-2-13-30.png)](https://postimg.cc/m1Z3jVyK)

# Code Browsing Guide
Start by examining the existing routers in app.js, such as /login, /register, or /dashboard.
Then, navigate to loginpage.js and pay special attention to the return statement on line 34. Understand which components are present. Finally, delve into authbox.js to understand the initial structure of the login and register pages. The MUI library is used here.
Return to loginpage.js and, on line 37, you'll see that it imports a tag from LoginPageHeader.js. Go into LoginPageHeader.js to check its code structure, and continue this process.
Tip: Inside the authbox tag, you can use the <div></div> tags. This may help achieve the desired left-right sliding effect for the final version of the login page.
The main focus is on modifying files within the authpage folder and shared/component folder. Feel free to add functions and tags, but try not to delete existing functions (excluding HTML tags and visual elements) because some functions are responsible for validation.

