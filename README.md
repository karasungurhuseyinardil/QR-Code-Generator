# QR Code Generator App

This project is a simple and modern web application that allows users to easily **generate, customize, and download QR codes**.
The app includes advanced features such as size control, color customization, error correction level selection, and optional logo insertion.

---

## 🚀 Features

* ✏️ **Generate QR codes from text or URLs**
* 🎨 **Customizable colors**

  * Foreground color
  * Background color
* 📏 **Adjustable size (100px – 1000px)**
* 🛡️ **Error correction levels (L, M, Q, H)**
* 🖼️ **Add a centered logo to the QR code**
* 📥 **Download QR code as PNG**
* 📱 **Fully responsive design**

---

## 📂 Project Structure

```
/
├── index.html       # UI structure
├── style.css        # Styling
├── main.js          # QR generation & download logic
└── assets/          # Favicon, images
```

---

## 🛠️ Technologies Used

* **HTML5**
* **CSS3**
* **JavaScript**
* **QRious** (for generating QR codes)

---

## 🔧 Installation

No setup or dependencies are required.
Simply clone the project and open the `index.html` file in a browser.

```bash
git clone <repo-link>
cd <repo-folder>
```

---

## 📘 How to Use

1. Enter any **text or URL** in the input field.
2. Optionally customize:

   * Size
   * Error correction level
   * Foreground & background colors
   * Upload a logo
3. Click **Generate QR Code**.
4. Download the generated QR code using the **Download PNG** button.

---

## 🖼️ Logo Support

If a logo is uploaded:

* It is placed at the center of the QR code
* Scales to 20% of the QR’s size
* A background square is drawn behind it to improve readability

