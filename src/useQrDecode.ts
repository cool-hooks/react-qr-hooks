import { useState, useEffect } from 'react';
import Parser from 'qrcode-image-parser';

export const useQrDecode = (data: string | WindowBase64) => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    Parser.parse(data, (err: any, parsed: any) => {
      setText(parsed);
    });
  }, [data]);

  return text;
};
