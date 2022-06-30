import {
Channel,
    MessageList,
    MessageInput,
} from 'stream-chat-react-native'; // Or stream-chat-expo



const ChannelScreen = props => {
    const { route } = props;
    const { params: { channel } } = route;

    return (
        <Channel channel={channel}>
            <MessageList />
            <MessageInput />
        </Channel>
    );
};
