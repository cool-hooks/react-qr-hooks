import { renderHook } from '@testing-library/react-hooks';

import { useQrEncode, useQrDecode } from '../src';

jest.mock('qrcode', () => ({
  toDataURL: (..._: any) => {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  },
}));

jest.mock('qrcode-decoder', () => ({
  decodeFromImage: (..._: any) => {
    return new Promise((resolve, reject) => {
      resolve('');
    });
  },
}));

describe('useQr', () => {
  it('should ', () => {
    const input = 'Hello World!';

    const { result: encoded } = renderHook(() => useQrEncode(input));

    const { result: decoded } = renderHook(() => useQrDecode(encoded.current));

    expect(encoded.current).toBe(decoded.current);
  });
});
