import { useState, useEffect } from 'react';
import QrcodeDecoder from 'qrcode-decoder';

export const useQrDecode = (data: string | WindowBase64) => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    const qr = new QrcodeDecoder();

    qr.decodeFromImage(data).then((res: any) => {
      setText(res.data);
    });
  }, [data]);

  return text;
};
