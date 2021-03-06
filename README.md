# React Bug Tracker Frontend Tutorial/Learning

This project is a very beginner level exposure to how to build a basic bug tracker web app in React. It does not actually come to a full completion as I had hoped it would. At the point of getting the interface to perform the clickable actions and page changes it then moves into a very brief and limited exposure to connecting the app to a MongoDB (Mongoose) database and only perfmorms the simplest of api calls/actions and never truly realizes and buildoout to a useable platform.

Nonetheless it does serve as a great first intro into React w some very foundational learning and a couple of "nice" hurdles to overcome from things that were not in existence when the tutorial was created.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Based on: ReactJS Tutorial: Bug-Tracker Full Project

https://www.youtube.com/watch?v=0K8NUSrf3LA&list=PLzpvwTzY2-Hncg6oVaqScva4XDm66EUaH

React Router-Sidebar P3 (Missing Video): https://www.youtube.com/watch?v=Fc91F7Ev_iU

Two Way Props (After P8): https://www.youtube.com/watch?v=g0dpgJi0FSY

### More info as the tutorials progress

- The dependency for redux was added: (Terminal) "npm i @reduxjs/toolkit react-redux"
- The dependency for React Router DOM was added (Terminal): "npm i react-router-dom"
- P4 Fix (In react-router-dom v6, "Switch" is replaced by routes "Routes"): https://stackoverflow.com/questions/63124161/attempted-import-error-switch-is-not-exported-from-react-router-dom#69849271
- Added the ability to click outside the ViewBug element/modal and it closes the ViewBug component: https://github.com/gbullardpurpl/react-bug-tracker/commit/1bc67a3dab76eb87d899863ca570026fb5112304
- P7 Fix (In react-router-dom v6, "useHistory" is replaced by "useNavigate"): https://stackoverflow.com/questions/62861269/attempted-import-error-usehistory-is-not-exported-from-react-router-dom
- P8 Install Postman App for API testing: https://www.postman.com/downloads/
- P8 Also go to https://www.mongodb.com/ and create the free account for the database to be used with the API.
