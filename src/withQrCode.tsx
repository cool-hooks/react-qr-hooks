import React from 'react';

import { useQrEncode } from './useQrEncode';
import { useQrDecode } from './useQrDecode';

export const withQrCode = (WrappedComponent: React.ComponentType<any>) => (
  props: React.ComponentProps<any>
) => <WrappedComponent {...props} encode={useQrEncode} decode={useQrDecode} />;
