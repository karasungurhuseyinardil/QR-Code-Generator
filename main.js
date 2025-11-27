document.querySelector("#generate-qr-btn").addEventListener('click', handleGenerateQrButtonClick);
document.querySelector("#download-btn").addEventListener('click', handleDownload);
document.querySelector("#input").addEventListener('keydown', (e) => {
    if (e.key === 'Enter') handleGenerateQrButtonClick();
});

function handleGenerateQrButtonClick() {
    const input = document.querySelector("#input");
    const value = input.value.trim();
    
    if (!value) {
        alert("Please enter text or URL");
        input.focus();
        return;
    }


    const btn = document.querySelector("#generate-qr-btn");
    const originalText = btn.innerText;
    btn.innerText = "Generating...";
    btn.disabled = true;


    const size = parseInt(document.querySelector("#size").value, 10) || 250;
    const level = document.querySelector("#level").value;
    const foreground = document.querySelector("#fg-color").value;
    const background = document.querySelector("#bg-color").value;
    const logoInput = document.querySelector("#logo-input");

    const qrCanvas = document.querySelector('#qr');
    

    const qr = new QRious({
        element: qrCanvas,
        value: value,
        size: size,
        level: level,
        foreground: foreground,
        background: background
    });


    if (logoInput.files && logoInput.files[0]) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = new Image();
            img.src = e.target.result;
            img.onload = function() {
                const ctx = qrCanvas.getContext('2d');
                const logoSize = size * 0.2;
                const logoPos = (size - logoSize) / 2;
                
                ctx.fillStyle = background;
                ctx.fillRect(logoPos, logoPos, logoSize, logoSize);
                
                ctx.drawImage(img, logoPos, logoPos, logoSize, logoSize);
                
                finalizeGeneration();
            };
        };
        reader.readAsDataURL(logoInput.files[0]);
    } else {
        finalizeGeneration();
    }

    function finalizeGeneration() {
        qrCanvas.style.display = "block";
        document.querySelector("#download-btn").style.display = "block";
        btn.innerText = originalText;
        btn.disabled = false;
        
        if (window.innerWidth < 600) {
            qrCanvas.scrollIntoView({ behavior: 'smooth' });
        }
    }
}

function handleDownload() {
    const canvas = document.querySelector('#qr');
    const url = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.href = url;
    a.download = 'qrcode.png';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}