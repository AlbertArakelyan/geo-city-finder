# Geo City Finder 🌐

> A lightweight JavaScript library for identifying cities based on geographical coordinates and determining if provided coordinates match those of a city with high accuracy.

## Table of Contents

- [🚀 Features](#-features)
- [📦 Installation](#-installation)
- [💡 Usage](#-usage)
- [🙏 Contributing](#-contributing)
- [📄 License](#-license)

---

## 🚀 Features

[//]: # (- Accurately detect if city matches provided geographical coordinates.)
- Accurately determine if the city matches the given geographical coordinates.

---

## 📦 Installation

Add `Geo City Finder` to your project with npm:

```bash
npm install geo-city-finder
```

Or use yarn:

```bash
yarn add geo-city-finder
```

---

## 💡 Usage

```js
import { getCoordinatesMatch } from 'geo-city-finder';

// Find if is user from current city
const cityCoordinates = {
  accuracy: 2546.076925492267,
  latitude: 40.1872,
  longitude: 44.5152,
};

getCoordinatesMatch(cityCoordinates).then((result) => {
  // Compares user coordinates with city coordinates...
  console.log(result); // true or false
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

[//]: # (  Please ensure that your PR adheres to the project's coding conventions and includes relevant tests.)

- **Spread the Word:** If you find this library helpful, consider sharing it with others or giving it a star on GitHub.

## 📄 License

Licensed under the MIT License.

---

## 🌱 Future Plans

- create a playground
- prepare a built-in city list
- improve code, add tests, all docstrings etc.

---

Made with ❤️ by [Albert Arakelyan](https://github.com/AlbertArakelyan)

* [LinkedIn Profile](https://www.linkedin.com/in/albert-arakelyan/)
* [GitHub Profile](https://github.com/ALbert2504)
* [Portfolio Website](https://albertarakelyan.vercel.app/)
