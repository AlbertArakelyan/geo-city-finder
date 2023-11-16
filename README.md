# geo-city-finder

A lightweight JavaScript library for finding cities based on geographical coordinates with high accuracy.

## Table of Contents

- [🚀 Features](#-features)
- [📦 Installation](#-installation)
- [💡 Usage](#-usage)
- [🙏 Contributing](#-contributing)
- [📄 License](#-license)

## 🚀 Features

- Accurately find cities based on geographical coordinates.

---

## 📦 Installation

```bash
npm install geo-city-finder
```

---

## 💡 Usage

```js
import geoCityFinder from 'geo-city-finder';

// Find if is user from current city
const myCityCoordinates = {
  accuracy: 2546.076925492267,
  latitude: 40.1872,
  longitude: 44.5152,
};

geoCityFinder(myCityCoordinates).then((result) => {
  console.log(result);
});
```

---

## 🙏 Contributing

Got ideas or found a bug? We appreciate your contributions! Here's how you can get involved:

- **Open an Issue:** If you have a new feature idea, want to report a bug, or have a general question, [open an issue](https://github.com/AlbertArakelyan/geo-city-finder/issues).

- **Send a Pull Request (PR):** Contributions are welcome! If you'd like to contribute code, follow these steps:
    - Fork the repository.
    - Create a new branch for your feature or bug fix.
    - Make your changes and submit a pull request.

  Please ensure that your PR adheres to the project's coding conventions and includes relevant tests.

- **Spread the Word:** If you find this library helpful, consider sharing it with others or giving it a star on GitHub.

---

## 📄 License

Licensed under the MIT License.

---

Made with ❤️ by Albert Arakelyan

