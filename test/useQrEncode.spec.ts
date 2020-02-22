import { renderHook } from '@testing-library/react-hooks';

import { useQrEncode } from '../src';

describe('useQrEncode', () => {
  it('should', () => {
    const { result } = renderHook(() => useQrEncode('Hello world!'));

    expect(result.current).toBe(null);
  });
});
