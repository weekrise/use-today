# Use Today

A React hook for accessing the current date. When the date changes, the hook's value will update as well.

## Install

```bash
# yarn
yarn add use-today

# npm
npm install --save use-today
```

## Usage

```jsx
import useToday from 'use-today';

let App = () => {
  let today = useToday();

  return (
    <div>
      <h1>{today.toISOString()}</h1>
    </div>
  )
}
```

## License

MIT © [Tobias Herber](https://github.com/herber)
