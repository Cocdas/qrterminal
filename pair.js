fetch('/qr.txt')
  .then(response => response.text())
  .then(qrCode => {
    const qrDiv = document.getElementById('qr-code');
    qrDiv.innerHTML = `<img src="https://api.qrserver.com/v1/create-qr-code/?data=${qrCode}&size=300x300" alt="QR Code">`;
  })
  .catch(err => {
    console.error('Failed to load QR code:', err);
  });
