# is-legal

`is-legal` is a package that determines if a person is of legal age.

## Installation

You can install the package using npm:

```bash
npm install is-legal
```

## Usage

```javascript
import { is } from 'is-legal';

try {
  console.log(is(20).legal()); // true
  console.log(is(15).legal()); // false
  console.log(is(-5).legal()); // Error: The age cannot be a negative number.
  console.log(is('18').legal()); // Error: The age must be a valid number.
} catch (error) {
  console.error(error.message);
}
```


## Types

The package also includes types for TypeScript.

## License

This project is licensed under the WTFPL License.
