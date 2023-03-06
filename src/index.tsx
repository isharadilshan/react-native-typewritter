import {
  requireNativeComponent,
  UIManager,
  Platform,
  ViewStyle,
} from 'react-native';

export * from './components/TypeWriter';
export * from './hooks/useTypeWriter';

const LINKING_ERROR =
  `The package 'react-native-typewritter' doesn't seem to be linked. Make sure: \n\n` +
  Platform.select({ ios: "- You have run 'pod install'\n", default: '' }) +
  '- You rebuilt the app after installing the package\n' +
  '- You are not using Expo Go\n';

type TypewritterProps = {
  color: string;
  style: ViewStyle;
};

const ComponentName = 'TypewritterView';

export const TypewritterView =
  UIManager.getViewManagerConfig(ComponentName) != null
    ? requireNativeComponent<TypewritterProps>(ComponentName)
    : () => {
        throw new Error(LINKING_ERROR);
      };
