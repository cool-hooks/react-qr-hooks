import { useState, useEffect } from 'react';
import QrCode, { QRCodeSegment, QRCodeOptions } from 'qrcode';

export const useQrEncode = (
  text: string | QRCodeSegment[],
  options: QRCodeOptions = {}
) => {
  const [qrCode, setQrCode] = useState<string | null>(null);

  useEffect(() => {
    if (text) {
      const canvas = document.createElement('canvas');

      canvas.width = 1024;
      canvas.height = 1024;

      QrCode.toDataURL(canvas, text, options, (err, url) => {
        if (err) return;

        if (url) setQrCode(url);
      });
    }
  }, [text, options]);

  return qrCode;
};
