import { useState, useEffect } from 'react';
import Parser from 'qrcode-image-parser';

export const useDecode = (data: string | WindowBase64) => {
  const [text, setText] = useState<string | null>(null);

  useEffect(() => {
    Parser.parse(data, (err: any, parsed: any) => {
      console.log(err, parsed);

      setText(parsed);
    });
  }, [data]);

  return text;
};
