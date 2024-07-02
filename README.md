# importRust

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/your-publisher-name.importrust)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/your-publisher-name.importrust)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/your-publisher-name.importrust)

## Overview

importRust is a VS Code extension that helps you automatically import all Rust files and packages into your current Rust file. This tool simplifies managing imports in your Rust projects, making your development process more efficient.

## Features

- Automatically scan and import all Rust files and packages.
- Works recursively to find all `.rs` files in the current directory.
- Adds `use crate::...` statements for each found module.

## Installation

1. Open the Extensions view in VS Code by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
2. Search for "importRust" and click **Install**.

## Usage

1. Open a Rust file in your project.
2. Open the Command Palette by pressing `Ctrl+Shift+P`.
3. Type `Import Rust Packages` and select the command.
4. The extension will scan your project and add the necessary `use` statements at the top of the current file.

## Extension Settings

This extension does not have any configurable settings yet.

## Known Issues

- The extension may not handle complex module structures perfectly. Contributions and bug reports are welcome!

## Contributing

If you find any issues or have suggestions for new features, please open an issue or submit a pull request in the [GitHub repository](https://github.com/x-brymo/importrust).

## License

This project is licensed under the MIT License - see the [LICENSE](https://github.com/x-brymo/importrust) file for details.

### MIT License

Copyright (c) 2024 Your Name

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Release Notes

### 0.0.1

- Initial release of importRust.

---

**Enjoy using importRust? [Rate us on the VS Code Marketplace!](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.importrust)**
