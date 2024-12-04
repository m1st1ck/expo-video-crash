### Steps to reproduce
- clone the project
- yarn install
- npx expo prebuild --clean && npx expo run:android
- Press on "GO TO VIDEO SCREEN"
- Navigate back by pressing the back button in the header or using back gesture

### Steps that were used to generate this project
- npx create-expo-app@latest --template blank-typescript
- npx expo install expo-video
- npx expo install @react-navigation/native @react-navigation/native-stack
- npx expo install react-native-screens react-native-safe-area-context

