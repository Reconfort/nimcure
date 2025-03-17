'use client';
import React, { useRef, useState } from 'react';
import * as htmlToImage from 'html-to-image';
import QRCode from 'react-qr-code';
import { CustomButton } from '@/components/shared/Button';

const QrCodeGenerator = () => {
  const [url, setUrl] = useState('');
  const [qrIsVisible, setQrIsVisible] = useState(false);
  const handleQrCodeGenerator = () => {
    if (!url) {
      return;
    }
    setQrIsVisible(true);
  };

  //   Download QR Code
  const qrCodeRef = useRef<HTMLDivElement | null>(null);
  const downloadQRCode = () => {
    if (!qrCodeRef.current) return;

    htmlToImage
      .toPng(qrCodeRef.current)
      .then(function (dataUrl) {
        const link = document.createElement('a');
        link.href = dataUrl;
        link.download = 'qr-code.png';
        link.click();
      })
      .catch(function (error) {
        console.error('Error generating QR code:', error);
      });
  };
  return (
    <div className='qrcode__container'>
      <div className='qrcode__container--parent' ref={qrCodeRef}>
        {!qrIsVisible && (
          <div className='qrcode__input'>
            <input
              type='text'
              placeholder='Enter a URL'
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />

            <CustomButton
              title={`Generate Code`}
              action={handleQrCodeGenerator}
              className='!w-full !text-sm !bg-[#1F5AF4] !text-white hover:bg-blue-50 !mt-[24px]'
            />
          </div>
        )}
        {qrIsVisible && (
          <div className='qrcode__download scale-90 lg:scale-75'>
            <div className='qrcode__image'>
              <QRCode value={url} size={300} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default QrCodeGenerator;
