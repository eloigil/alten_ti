This is a Technical interview project made for Alten by Eloi Gil.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

To start the project, you can run in the project directory:

### `npm install`

Will install all the dependencies of the project

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.


## NEXT TO DOs

One of the first things I'd implement to make this project a "multi-page" SPA, it would be a Router. Using the library [React Router Dom](https://reactrouter.com/web/guides/quick-start).

Another feature it would be nice to have is a web-socket connection. So instead of making http requests every 10 seconds to get the data, this communication system will let us fetch data in real time. There are some technologies that could be implemented such as Socket.io, Pusher or Firebase.

I'd also implement an edit mode with a grid customisation system so that the user could modify the size of each column or where are they displayed by dragging and dropping.
