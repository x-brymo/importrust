# Rust Importer

![Visual Studio Marketplace Version](https://img.shields.io/visual-studio-marketplace/v/importrust.rust-importer)
![Visual Studio Marketplace Downloads](https://img.shields.io/visual-studio-marketplace/d/your-publisher-name.rust-importer)
![Visual Studio Marketplace Rating](https://img.shields.io/visual-studio-marketplace/r/your-publisher-name.rust-importer)

## Overview

Rust Importer is a VS Code extension that helps you automatically import all Rust packages and folder classes into your current Rust file. This tool simplifies managing imports in your Rust projects, making your development process more efficient.

## Features

- Automatically scan and import all Rust packages and folder classes.
- Works recursively to find all `.rs` files in the current directory.
- Adds `use crate::...` statements for each found module.

## Installation

1. Open the Extensions view in VS Code by clicking on the Extensions icon in the Activity Bar on the side of the window or by pressing `Ctrl+Shift+X`.
2. Search for "Rust Importer" and click **Install**.

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

If you find any issues or have suggestions for new features, please open an issue or submit a pull request in the [GitHub repository](https://github.com/-xbrymo/rust-importer).

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Release Notes

### 0.0.1

- Initial release of Rust Importer.

---

**Enjoy using Rust Importer? [Rate us on the VS Code Marketplace!](https://marketplace.visualstudio.com/items?itemName=your-publisher-name.rust-importer)**

