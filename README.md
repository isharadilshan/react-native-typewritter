# React Native Typewriter

> A simple component for adding a nice typewriter effect to your react native project.

## Install

#### npm

```sh
npm i react-native-typewriter
```

#### Yarn

```sh
yarn add react-native-typewriter
```

---

## Usage

There are two ways to use `Typewriter`:

## 1. Component

```jsx
import React from 'react'
import { View } from 'react-native'
import { Typewriter } from 'react-native-typewriter'

const MyComponent = () => {
  return (
    <View>
      <Typewriter {/* Props */} />
    </View>
  )
}
```

### Component Props

| Prop             |       Type        | Options  | Description                                                                                |      Default       |
| ---------------- | :---------------: | -------- | ------------------------------------------------------------------------------------------ | :----------------: |
| `words`          |       array       | Required | Array of strings holding the words                                                         | `['Hello', '...']` |
| `typeSpeed`      |      number       | Optional | Character typing speed in Milliseconds                                                     |        `80`        |
| `deleteSpeed`    |      number       | Optional | Character deleting speed in Milliseconds                                                   |        `50`        |
| `delaySpeed`     |      number       | Optional | Delay time between the words in Milliseconds                                               |       `1000`       |
| `loop`           | number \| boolean | Optional | Control how many times to run. `0 \| false` to run infinitely                              |        `1`         |
| `showCursor`     |      boolean      | Optional | Show / Hide a cursor                                                                       |       `true`       |
| `cursorStyle`    |      string       | Optional | Change the cursor element available if `cursor` is `enabled`                               |        `\|`        |
| `cursorBlinking` |      boolean      | Optional | Enable cursor blinking animation                                                           |       `true`       |
| `cursorColor`    |      string       | Optional | Hex code for color of cursor                                                               |     `#FF0000`      |
| `onLoopDone`     |     function      | Optional | Callback function that is triggered when loops are completed. available if `loop` is `> 0` |        `-`         |
| `onType`         |     function      | Optional | Callback function that is triggered while typing with typed words `count` passed           |        `-`         |
| `onDelay`        |     function      | Optional | Callback function that is triggered on typing delay                                        |        `-`         |
| `onDelete`       |     function      | Optional | Callback function that is triggered while deleting                                         |        `-`         |

---

### Usage Example

```jsx
import React from 'react'
import { Typewriter } from 'react-native-typewriter'

const MyComponent = () => {

  const handleType = (count: number) => {
    // access word count number
    console.log(count)}
  }

  const handleDone = () => {
    console.log(`Done after 5 loops!`)
  }

  return (
    <View>
      <Typewriter
        words={['Eat', 'Sleep', 'Code', 'Repeat!']}
        loop={5}
        showCursor={true}
        cursorStyle='_'
        typeSpeed={70}
        deleteSpeed={50}
        delaySpeed={1000}
        onLoopDone={handleDone}
        onType={handleType}
      />
    </View>
  )
}
```

## 2. Hook

Hook returns `text` along with some useful `flags`:

| Prop       |  Type   | Description                         |
| ---------- | :-----: | ----------------------------------- |
| `isType`   | boolean | Check if currently typing           |
| `isDelete` | boolean | Check if currently deleting         |
| `isDelay`  | boolean | Check if currently on delay         |
| `isDone`   | boolean | Check if all running loops are done |

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTypewriter } from 'react-native-typewriter';

const MyComponent = () => {
  /**
   * @returns
   * text: [string] typed text
   * NEW helper: {} helper flags
   */
  const [text, helper] = useTypewriter({
    /* Config */
  });

  /* Hook helper */
  const { isType, isDelete, isDelay, isDone } = helper;

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
```

### Hook Config

| Prop          |       Type        | Options  | Description                                                                                |      Default       |
| ------------- | :---------------: | -------- | ------------------------------------------------------------------------------------------ | :----------------: |
| `words`       |       array       | Required | Array of strings holding the words                                                         | `['Hello', '...']` |
| `typeSpeed`   |      number       | Optional | Character typing speed in Milliseconds                                                     |        `80`        |
| `deleteSpeed` |      number       | Optional | Character deleting speed in Milliseconds                                                   |        `50`        |
| `delaySpeed`  |      number       | Optional | Delay time between the words in Milliseconds                                               |       `1500`       |
| `loop`        | number \| boolean | Optional | Control how many times to run. `0 \| false` to run infinitely                              |        `1`         |
| `onLoopDone`  |     function      | Optional | Callback function that is triggered when loops are completed. available if `loop` is `> 0` |        `-`         |
| `onType`      |     function      | Optional | Callback function that is triggered while typing                                           |        `-`         |
| `onDelete`    |     function      | Optional | Callback function that is triggered while deleting                                         |        `-`         |
| `onDelay`     |     function      | Optional | Callback function that is triggered on typing delay                                        |        `-`         |

### Hook Usage Example

```jsx
import React from 'react';
import { View, Text } from 'react-native';
import { useTypewriter } from 'react-native-typewriter';

const MyComponent = () => {
  const [text] = useTypewriter({
    words: ['Hello', 'From', 'Typewriter', 'Hook!'],
    loop: 0,
  });

  return (
    <View>
      <Text>{text}</Text>
    </View>
  );
};
```

### License

MIT
