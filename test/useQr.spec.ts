import { renderHook } from '@testing-library/react-hooks';

import { useQrEncode, useQrDecode } from '../src';

describe('useQr', () => {
  it('should return single `to` value', () => {
    const input = 'Hello World!';

    const { result } = renderHook(() => useQrEncode(input));

    expect(result.current).toBe(null);
  });
});
