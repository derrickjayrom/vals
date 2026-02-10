# How to Use "Will You Be My Vals?"

This is a cute, interactive website to ask Doreen to be your Valentine.

## Features

- **Moving "No" Button**: The "No" button runs away when you try to click it.
- **Growing "Yes" Button**: Every time she tries to click "No", the "Yes" button gets bigger and more persistent.
- **Custom Artwork**: Includes a cute bear holding a heart.
- **Confetti Celebration**: Clicking "Yes" triggers a confetti shower.

## How to Customize

1.  **Edit Text**: Open `index.html` and change the text inside `<h1>` or `<h2>` tags.
2.  **Change Images**: Replace `asking_bear.png` with your own image, or add a different image for the success state in `style.css` or `index.html`.
3.  **Change No Button Texts**: Open `script.js` and modify the `noTexts` array with your own funny phrases.

## How to Run locally

Simply open `index.html` in your web browser!

Or serve it with Python:

```
python3 server.py
```

Then go to `http://localhost:8000/YourName`.
Example: `http://localhost:8000/Doreen` or `http://localhost:8000/Sarah`
