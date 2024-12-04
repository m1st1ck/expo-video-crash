import * as React from "react";
import { Button, FlatList } from "react-native";
import {
  NavigationContainer,
  useIsFocused,
  useNavigation,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useVideoPlayer, VideoView } from "expo-video";

function HomeScreen() {
  const nav = useNavigation();

  return (
    <Button
      title="Go to Video screen"
      onPress={() => {
        nav.navigate("Video");
      }}
    />
  );
}

function VideoScreen() {
  const player = useVideoPlayer(
    "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    (player) => {
      player.loop = true;
      player.play();
    }
  );

  const isFocused = useIsFocused();

  if (!isFocused) {
    return null;
  }

  return (
    <FlatList
      data={["1"]}
      keyExtractor={(item) => item}
      renderItem={() => (
        <VideoView
          style={{
            width: 350,
            height: 275,
          }}
          player={player}
          allowsFullscreen
          allowsPictureInPicture
        />
      )}
    />
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Video" component={VideoScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
