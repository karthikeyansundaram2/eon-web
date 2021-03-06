Front end 

================================================================================
SET UP STARTS HERE

git clone https://github.com/bits-pgp-fse/eon-web.git
 
### `npm install`

Install all the dependencies mentioned in package.json

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

This command will run all the test cases in the 'Test' folder.
After all the test cases pass, a report will be generated and you can see on this link.

For single file:
npm test src/__tests__/loginTest.js

### `npm run lint`

This command will check if best practices are followed in code and gives error if there is some error.

For single file:
npm run lint --files src/components/login/login.js


SET UP ENDS HEE
================================================================================

Common design patterns used in WEB:

### Antd for UI designs
An enterprise-class UI design language and React UI library with a set of high-quality React components, one of best React UI libraries for enterprises.

https://ant.design/docs/react/introduce

### Highcharts for graphs
This is for analytics board of an organizer which has multiple bar graphs, line charts and pie chart.
https://www.npmjs.com/package/highcharts-react-official

### PDF Download
This is for downloading the pdf for ticket.
https://www.npmjs.com/package/@react-pdf/renderer

### react-share
This is for social media sharing.
https://www.npmjs.com/package/react-share


Storage of data in WEB:

### Redux 
Redux is a predictable state container for JavaScript apps.

It helps you write applications that behave consistently, run in different environments (client, server, and native), and are easy to test. On top of that, it provides a great developer experience, such as live code editing combined with a time traveling debugger.

https://redux.js.org/introduction/getting-started

Communication patterns to interact with external APIs:

### Redux Saga
redux-saga is a library that aims to make application side effects (i.e. asynchronous things like data fetching and impure things like accessing the browser cache) easier to manage, more efficient to execute, easy to test, and better at handling failures.

https://redux-saga.js.org/

Testing

### Enzyme
Enzyme is a JavaScript Testing utility for React that makes it easier to test your React Components' output. You can also manipulate, traverse, and in some ways simulate runtime given the output.

https://www.npmjs.com/package/enzyme


Folder structure

Components :
Components are pure screens which can be reused. 
Analytics : Screens for analytics dashboard.
Common Components:
Back button for all the screens
Range picker for date picker
Search boxes for dashboard and analytics
Dropdowns for status/event/fee
PDF generator for downloading the pdf

    Dashboard cards : Cards on dashboard with event details

    Event creation : Forms for creation of events

    Event details : Displaying the event information

    Feedback module : Feedback question forms and feedback response sceen

    Forgot password : Screen for forgot password

    Login : Screens for login

    Navbars : Side navbars and top navbars.

    Profile : User profile screen

    Registration : Screens for organizer registration and subscriber registration.

    Subscription : Screens for buying/updating/downloading tickets for an event.


Containers :
Containers contains the logic of any module which passes on the information to a component and component just renders that data.

    Analytics : Logic for fetching analytics data.
    Create event : Logic for creating an event
    Dashboard : Logic for fetching event list on the basis of search filters.
    Event detail : Logic to fetch a particular event.
    Feedback : Logic to fetch the feedback questions/answers/posting response.
    Profile : Logic to show profile information and updating the information.
    Registration : Logic to register an organizer and subscriber.


Reducers : All the reducers for storing the data in redux stores.
Sagas : API calls for all the backend interactions.
