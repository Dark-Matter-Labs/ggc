# EIT Climate-KIC Innovation Portfolio 2020

## About
Created for Great Green Connector event to visualise EIT Climate-KIC Innovation Portfolio 2020.

## Key features
- Made using [nivo](https://nivo.rocks/) library, which combines [d3](https://d3js.org/) and [React](https://reactjs.org/) libraries to create robust data visualisations
- Can easy scale up and handle many more amount of project nodes
- Data in JSON format
- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app)
- Currently deployed using [Netlify](https://www.netlify.com/)

## Project structure
    ├── build                   # Compiled files 
    ├── public                  # Index.html file and manifest
    ├── src                     # Source files with data and React app
    ├── package.josn            # Modules in use and scripts
    └── README.md

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

After doing `yarn build`, you can do `netlify deploy` and publish directory `./build`

## How to make changes to the data
Inside `src` folder there is `projects.json` which follows simple JSON format, easy to edit. Icons are imported as SVGs. 

This is the data structure-
```javascript
{
  id: "clustering category",
    data: [
      {
        x: x-axis unit,
        y: y-axis unit,
        icon: image source,
        name: "project name",
        iconName: "display name",
        xCategory: "x category",
        yCategory: "y category",
        description:"project description",
        link: "project link",
      },
    ]
  }
```

## How to embed inside WordPress
It can be done by creating a custom WP plugin, simple and detailed steps are [here](https://mikhailroot.ru/react-app-embedded-into-wordpress-page/)

