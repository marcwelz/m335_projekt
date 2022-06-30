import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from "./components/HomeScreen";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {Text} from "react-native";
import {useChatClient} from "./components/useChatClient";
import {
    OverlayProvider, Chat, ChannelList
} from 'stream-chat-react-native';
import {StreamChat} from 'stream-chat';
import {chatApiKey, chatUserId} from './ChatConfig';

export default function App() {
    const Stack = createStackNavigator();

    const chatClient = StreamChat.getInstance(chatApiKey);

    const filters = {
        members: {
            '$in': [chatUserId]
        },
    };

    const sort = {
        last_message_at: -1,
    };

    const ChannelListScreen = props => {
        return (
            <ChannelList
                onSelect={(channel) => {
                    const {navigation} = props;
                    navigation.navigate('ChannelScreen', {channel});
                }}
            />
        )
    }

    const ChannelScreen = props => {
        return null;
    }

    const NavigationStack = () => {
        const {clientIsReady} = useChatClient();

        if (!clientIsReady) {
            return <Text>Loading chat ...</Text>
        }

        return (
            <OverlayProvider>
                <Chat client={chatClient}>
                    <Stack.Navigator
                        initialRouteName="Home"
                        screenOptions={{
                            headerShown: true,
                        }}>
                        <Stack.Screen name="Home" component={HomeScreen}/>
                        <Stack.Screen name="ChannelList" component={ChannelListScreen}/>
                        <Stack.Screen name="ChannelScreen" component={ChannelScreen}/>
                    </Stack.Navigator>
                </Chat>
            </OverlayProvider>

        )
    }


    return (

        <GestureHandlerRootView style={{flex: 1}}>
            <NavigationContainer>
                <NavigationStack/>
            </NavigationContainer>
        </GestureHandlerRootView>

    );
}
