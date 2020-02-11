My Approach:
I decided to use React for the framework to build this app along with bootstrap for some basic styling and css classes, and react-bootstrap for its already built React modal component. For managing state I decided to use XState which is a finite state machine, and react hooks for component level state. This is a very simple implementation of XState, I mainly just used it for handling and declaratively describing different states and their possible transitions but it has a lot more much more powerful features that I would use, some similar to redux. For the network requests I used the fetch api. For debouncing I used awesome-debounce-promise. For handling the async requests I used react-async-hook. The reason for using these libraries was from this stack overflow post https://stackoverflow.com/questions/23123138/perform-debounce-in-react-js. They seem to work well together for this app's needs and handled all the different oddities and edge cases well. 



Folder Structure:
I used these main folders, the components folder for all my components, the api folder for fetch requests and search functions, the hooks folder for custom hooks, and the state folder for the state machine files. I split my components folder up into sub folders for features or specific parts of the app to allow for a little more logical organization as the app grows. 



Component Structure:
I used a layout component for the basic layout, which in this version of this app is just a simple header but this can be expanded to be much more complex and the layout can be easily added to any other pages that may be added in the future. 

The App component is the main entry component and it contains the Layout component, the SearchForm component and the ArtList component. It also contains a spinner for loading, an error message for showing errors, and a no results message. These could and probably should be split into their own components but for the scope of this small app they were left in the App component.

I used two custom hooks in the App component, one for using xstate's state machine and the other for handling searching the art, debouncing, sending fetch requests, cancelling fetch requests, and updating the state machine. 

The ArtList component contains a list of Card components for showing the search results. The DetailModal component is basically a wrapper for the react-bootstrap modal and is used for showing the details of an art piece when clicked. The data is passed into each component using props. For a larger application I would likely use useContext or something similar for passing data to components to avoid prop drilling.

What I would do different or improve:
- I would use typescript, but I hadn't used it with react before and given the limited time I opted against using it for now.
- I would use a much more in depth implementation of Xstate to fully decouple the state logic or business logic from the presentation layer. For example using guards, invoking actions from state transitions, invoking side effects etc. Alternatively I would use redux for handling state.
- I would run some audits with chromes lighthouse or other audit tools to see if there were any performance issues or accessibility issues or any issues in general
- Better Error Handling
- Pagination - infinite scroll
- Implement a wrapper of the fetch api or a custom hook to allow more reusable error handling and results handling for the specifics of this app.


This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
#   m u s e u m - a r t - s e a r c h 
 
 