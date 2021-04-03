# [react-qr-hooks](https://github.com/cool-hooks/react-qr-hooks)

[![NPM version](https://img.shields.io/npm/v/react-qr-hooks?style=flat-square)](https://www.npmjs.com/package/react-qr-hooks)
[![NPM downloads](https://img.shields.io/npm/dm/react-qr-hooks?style=flat-square)](https://www.npmjs.com/package/react-qr-hooks)
[![NPM license](https://img.shields.io/npm/l/react-qr-hooks?style=flat-square)](https://www.npmjs.com/package/react-qr-hooks)
[![Codecov](https://img.shields.io/codecov/c/github/cool-hooks/react-qr-hooks?style=flat-square)](https://codecov.io/gh/cool-hooks/react-qr-hooks)
[![Travis](https://img.shields.io/travis/cool-hooks/react-qr-hooks/master?style=flat-square)](https://travis-ci.org/cool-hooks/react-qr-hooks)
[![Bundle size](https://img.shields.io/bundlephobia/min/react-qr-hooks?style=flat-square)](https://bundlephobia.com/result?p=react-qr-hooks)

## About

Encode & decode QR code in React

### Demo

**[Playground – play with library in CodeSandbox](https://codesandbox.io/s/react-qr-hooks-7iv35)**

### Similar Projects

- [react-use-qrcode](https://github.com/pocesar/react-use-qrcode/) by [Paulo Cesar](https://github.com/pocesar/)
- [react-qr-reader](https://github.com/JodusNodus/react-qr-reader/) by [Thomas Billiet](https://github.com/JodusNodus/)
- [qrcode](https://github.com/soldair/node-qrcode/) by [Ryan Day](https://github.com/soldair/)

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

**• Import hooks in React application file:**

```js
import { useQrEncode, useQrDecode } from 'react-qr-hooks';
```

### useQrEncode

#### Options

| Name        | Type                   | Default | Description                  |
| ----------- | ---------------------- | ------- | ---------------------------- |
| **text**    | string                 | ` `     | Text to encode               |
| **options** | QRCodeToDataURLOptions | `{}`    | Options for `qrcode` library |

#### Returned Values

| Type   | Description   |
| ------ | ------------- |
| string | Encoded value |

### useQrDecode

#### Options

| Name        | Type   | Default | Description                                                      |
| ----------- | ------ | ------- | ---------------------------------------------------------------- |
| **data**    | string | ` `     | An image from url or an `<img>` element with a src attribute set |
| **options** | object | `{}`    | Options for `qrcode-decoder` library                             |

#### Returned Values

| Type   | Description                |
| ------ | -------------------------- |
| string | value decoded from QR code |

## Example

```js
import React from 'react';
import { useQrEncode, useQrDecode } from 'react-qr-hooks';

const App = () => {
  const encoded = useQrEncode(
    'Hello world!' /* object with options (if needed) */
  );

  const decoded = useQrDecode(encoded /* object with options (if needed) */);

  return (
    <>
      <img src={encoded} alt="My QR code" />
      <p>{decoded}</p>
    </>
  );
};

export default App;
```

## License

This project is licensed under the MIT License © 2020-present Jakub Biesiada
