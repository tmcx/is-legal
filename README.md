# is-legal

`is-legal` is a package that determines if a person is of legal age.

## Installation

You can install the package using npm:

```bash
npm install is-legal
```

## Usage

```javascript
import isLegal from 'is-legal';

try {
  console.log(isLegal(20)); // true
  console.log(isLegal(15)); // false
  console.log(isLegal(-5)); // Error: The age cannot be a negative number.
  console.log(isLegal('18')); // Error: The age must be a valid number.
} catch (error) {
  console.error(error.message);
}
```


## Types

The package also includes types for TypeScript:


## License

This project is licensed under the WTFPL License.
