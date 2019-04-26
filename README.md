# Frontend development excercise 2

The goal of this project is to practice in the usage of React and some libraries in order to make a sheet with millions of cells with a decent performance.

## Performances optimizations

- `immutable` package in redux reducers in order to overcome the performant issues of handling immutable data on javascript.
- `react-window` to apply the concept of windowing in order to render millions of rows without killing the browser.
- Each cell handles it's own state in order to avoid re-renders on the entire list

## Known issues and limitations

- Browsers seems to have a limit on the height an element can have, for example chrome has a limit of 33m px. So the app wouln't work with more than 1m rows since each row has a height of about 30px. Possible solutions would be to explore other ways of doing windowing.
- Sometimes the scrolling stops working on mac's trackpad.

## Commands

To run the application in development mode

```
npm install
npm start
```

To run the production build

```
npm install -g serve
npm run build
serve -s build
```
