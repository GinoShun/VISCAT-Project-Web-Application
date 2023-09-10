// QRCodeGenerator.js

import React from 'react';
import QRCode from 'qrcode.react';

const QRCodeGenerator = ({ text }) => {
  return (
    <div>
      <h2>Generated QR Code:</h2>
      <QRCode value={text} />
    </div>
  );
};

export default QRCodeGenerator;
