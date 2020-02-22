import { renderHook } from '@testing-library/react-hooks';

import { useQrDecode } from '../src';

const source = `https://en.wikipedia.org/wiki/QR_code#/media/File:QR_code_for_mobile_English_Wikipedia.svg`;

describe('useQrDecode', () => {
  it('should', () => {
    const { result } = renderHook(() => useQrDecode(source));

    expect(result.current).toBe(1);
  });
});
