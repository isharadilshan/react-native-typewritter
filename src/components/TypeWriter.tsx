import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { TypeWriterProps, useTypeWriter } from '../hooks/useTypeWriter';

type ComponentProps = {
  /** Show / Hide the cursor */
  showCursor?: boolean;
  /** Blinking cursor according to text typing speed */
  blinkingCursor?: boolean;
  /** Cursor style */
  cursorElement?: string;
  /** Cursor color */
  cursorColor?: string;
} & TypeWriterProps;

export const TypeWriter = ({
  words = ['Hello World!', 'This is', 'a simple Typewriter'],
  loop = 1,
  typeSpeed = 80,
  deleteSpeed = 50,
  delaySpeed = 1500,
  showCursor = true,
  blinkingCursor = true,
  cursorElement = '|',
  cursorColor = '#FF0000',
  onLoopDone,
  onType,
  onDelay,
  onDelete,
}: ComponentProps): React.ReactElement => {
  const [cursor, setCursor] = useState(true);
  const [text] = useTypeWriter({
    words,
    loop,
    typeSpeed,
    deleteSpeed,
    delaySpeed,
    onLoopDone,
    onType,
    onDelay,
    onDelete,
  });

  useEffect(() => {
    // Change the state every second or the time given by User.
    const interval = setInterval(() => {
      setCursor((value) => !value);
    }, 200);
    return () => clearInterval(interval);
  }, []);

  const renderCursor = () => {
    if (showCursor && blinkingCursor) {
      return (
        <Text
          style={{ display: !cursor ? 'none' : undefined, color: cursorColor }}
        >{`${cursorElement}`}</Text>
      );
    } else if (showCursor && !blinkingCursor) {
      return <Text style={{ color: cursorColor }}>{`${cursorElement}`}</Text>;
    } else {
      return null;
    }
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <Text>{`${text} `}</Text>
      {renderCursor()}
    </View>
  );
};
