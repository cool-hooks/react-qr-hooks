# [react-qr-hooks](https://github.com/jb1905/react-qr-hooks)

[![NPM version](http://img.shields.io/npm/v/react-qr-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-qr-hooks)
[![NPM downloads](http://img.shields.io/npm/dm/react-qr-hooks.svg?style=flat-square)](https://www.npmjs.com/package/react-qr-hooks)

## About
Encode & decode QR code in React

## How to Install
First, install the library in your project by npm:
```sh
$ npm install react-qr-hooks
```

Or Yarn:
```sh
$ yarn add react-qr-hooks
```

## Getting Started
**• Import hook in React application file:**
```js
import { useQrEncode, useQrDecode } from 'react-qr-hooks';
```

### useQrEncode

#### Options
Name | Type | Default | Description
-|-|-|-
**updateOnResize** | boolean | `true` | Update sizes on window resize

#### Returned Values
Name | Type | Description
-|-|-
**vw** | number | Window viewport width
**vh** | number | Window viewport height

### useQrDecode

#### Options
Name | Type | Default | Description
-|-|-|-
**updateOnResize** | boolean | `true` | Update sizes on window resize

#### Returned Values
Name | Type | Description
-|-|-
**vw** | number | Window viewport width
**vh** | number | Window viewport height

## Example
```js
import React from 'react';
import { useQrEncode, useQrDecode } from 'react-qr-hooks';

const App = () => {
  const encoded = useQrEncode("Hello world!");

  const decoded = useQrDecode(encoded);

  return (
    <>
      <img src={encoded} alt="My QR code" />
      <p>{decoded}</p>
    </>
  );
}

export default App;
```

## License
This project is licensed under the MIT License © 2020-present Jakub Biesiada
