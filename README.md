<!-- <img alt="React Native Typescript Library Starter" src="assets/logo.png" width="1050"/> -->

<!-- [![Battle Tested ✅](https://img.shields.io/badge/-Battle--Tested%20%E2%9C%85-03666e?style=for-the-badge)](https://github.com/jeremaihloo/rn-animated-loading-button) -->

<!-- [![React Native Typescript Library Starter](https://img.shields.io/badge/-Extremely%20easy%20to%20create%20a%20React%20Native%20Component%20Library%20with%20both%20Stateful%20and%20Functional%20Component%20Examples-orange?style=for-the-badge)](https://github.com/jeremaihloo/rn-animated-loading-button) -->

[![npm version](https://img.shields.io/npm/v/rn-animated-loading-button.svg?style=for-the-badge)](https://www.npmjs.com/package/rn-animated-loading-button)
[![npm](https://img.shields.io/npm/dt/rn-animated-loading-button.svg?style=for-the-badge)](https://www.npmjs.com/package/rn-animated-loading-button)
![Platform - Android and iOS](https://img.shields.io/badge/platform-Android%20%7C%20iOS-blue.svg?style=for-the-badge)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=for-the-badge)](https://github.com/prettier/prettier)

<p align="center">
  <img alt="React Native Animated Loading Button"
        src="assets/Screenshots/typescript.jpg" />
</p>

![Screenshots](./assets/Screenshots/example.gif)

Source code copied and edit from https://github.com/philip-bui/rn-animated-loading-button , because of personal reason (custom something that it cant be normally).

# Installation

Add the dependency:

```bash
yarn add rn-animated-loading-button
```

## Peer Dependencies

<h5><i>IMPORTANT! You need install them</i></h5>

```js
"react": ">= 16.x.x",
"react-native": ">=0.63.x"
```

# Usage

## Import

```jsx
import AnimatedLoadingButton from "rn-animated-loading-button";
```

## Fundamental Usage

```jsx
<AnimatedLoadingButton
  containerStyle={styles.submitButtonContainer}
  buttonStyle={styles.submitButton}
  title="Submit"
  titleStyle={styles.submitText}
  ref={(r) => (buttonRef = r)}
  onPress={onPress}
/>

const styles = StyleSheet.create({
  submitButtonContainer: {
    height: 40,
    width: 150,
  },
  submitButton: {
    backgroundColor: '#0D6CEC',
    borderRadius: 50,
  },
  submitText: {
    fontSize: 18,
    color: '#FFFFFF',
  },
});

```

## Example Project 😍

You can checkout the example project 🥰

Simply run

- `npm i`
- `npx react-native run-ios/android`

should work of the example project.

# Configuration - Props

## Fundamentals

| Property |  Type  |  Default  | Description      |
| -------- | :----: | :-------: | ---------------- |
| title    | string | undefined | change the title |

## Customization (Optionals)

| Property           |   Type    |  Default  | Description                                                            |
| ------------------ | :-------: | :-------: | ---------------------------------------------------------------------- |
| disabled           |  boolean  |   false   | let you enable the button (must use it for button)                     |
| onPress            | function  | undefined | set your own logic for the button functionality when it is pressed     |
| containerStyle     | ViewStyle |  default  | set or override the style object for the main container                |
| titleStyle         | ViewStyle |  default  | set or override the style object for the button title                  |
| buttonStyle        | ViewStyle |  default  | set or override the style object for the button style                  |
| loadingStyle       | ViewStyle |  default  | set or override the style object for the loading style                 |
| TouchableComponent |   Image   |  default  | set your own component instead of default react-native Image component |
| useNativeDriver    |  boolean  |   false   | set your own component instead of default react-native Image component |
| TouchableComponent |   Image   |  default  | set your own component instead of default react-native Image component |
| TouchableComponent |   Image   |  default  | set your own component instead of default react-native Image component |
| TouchableComponent |   Image   |  default  | set your own component instead of default react-native Image component |
| TouchableComponent |   Image   |  default  | set your own component instead of default react-native Image component |

## Future Plans

- [x] ~~LICENSE~~
- [ ] Write an article about the lib on Medium

# Change Log

Change log will be here !

## Author

jeremaihloo, jeremaihloo1024@gmail.com

## License

React Native Typescript Library Starter is available under the MIT license. See the LICENSE file for more info.
