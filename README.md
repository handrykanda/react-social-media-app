# **React + Redux + Firebase Social Media App**

## **Live Demo:**

You can check out the live demo on [Airchat web app](https://airchat-5d063.web.app).

## **Getting Started**

To get the frontend running locally:

- Clone this repo

After that create a package.json file in the root and just copy and paste this json object.

```
{
  "name": "airchat",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@material-ui/core": "^4.9.7",
    "@material-ui/icons": "^4.9.1",
    "@material-ui/lab": "^4.0.0-alpha.46",
    "@material-ui/styles": "^4.9.6",
    "@testing-library/jest-dom": "^4.2.4",
    "@testing-library/react": "^9.5.0",
    "@testing-library/user-event": "^7.2.1",
    "axios": "^0.19.2",
    "clsx": "^1.1.0",
    "jwt-decode": "^2.2.0",
    "moment": "^2.24.0",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-redux": "^7.2.0",
    "react-router-dom": "^5.1.2",
    "react-scripts": "3.4.1",
    "redux": "^4.0.5",
    "redux-thunk": "^2.3.0"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "proxy": "YOUR_BASE_URL"
}

```

Take note of "proxy" at the bottom. I know you are worried "What's the base_url for" but everything is set for you. Just click [here](https://github.com/handrykanda/react-social-media-app-backend) to setup your backend with Firebase cloud functions. Don't worry the source code is available for you. You will be up and running in a couple of minutes! You can also build your own backend if you want.
<br><br>
Before you run the following command, just create this file src/util/config.js. It should look like this: `export const BASE_URL = "YOUR_BASE_URL";`

- `npm install` to install all the required dependencies specified in the package file you just created.
- `npm start` to start the local server (this project uses create-react-app)

This will run the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser. It won't work if you didn't setup the [backend](https://github.com/handrykanda/react-social-media-app-backend) (or your own) and add "proxy" value in package.json and the config.js.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## **Making requests to the backend API**

The source code for the backend server is [here](https://github.com/handrykanda/react-social-media-app-backend).

## **Functionality overview**

This project is a social media web app. It uses Firebase Cloud Functions as the backend. You can view a live demo over [here](https://airchat-5d063.web.app).

### **General functionality:**

- Authenticate users via JWT (login/signup pages + user logout).
- GET and display list of posts.
- POST and DELETE your posts.
- Like and comment on any post.
- Change your profile picture and edit your profile details.
- View other people's profile.
- Get notifications on any like or comment on your post etc.
