import { renderHook } from '@testing-library/react-hooks';

import { useQrEncode, useQrDecode } from '../src';

describe('useQr', () => {
  it('', () => {
    const input = 'Hello World!';

    const { result: encoded } = renderHook(() => useQrEncode(input));

    const { result: decoded } = renderHook(() => useQrDecode(encoded.current));

    expect(encoded.current).toBe(decoded.current);
  });
});
