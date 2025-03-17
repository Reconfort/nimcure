'use client';
import { CustomButton } from '@/components/shared/Button';
import { useState } from 'react';
import QrCodeGenerator from './QR/QrCodeGenerator';

const QRCode = () => {
  const [url, setUrl] = useState('');
  const [qrIsVisible, setQrIsVisible] = useState(false);

  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }
    setQrIsVisible(true);
  };
  return (
    <div className='w-full center flex-col gap-3'>
      <QrCodeGenerator />
    </div>
  );
};

export default QRCode;
