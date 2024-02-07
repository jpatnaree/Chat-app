import {
    MultiChatSocket,
    MultiChatWindow,
    useMultiChatLogic,
} from 'react-chat-engine-advanced';
import CustomHeader from '../customHeader';
import StandardMessageForm from '../customMessageForm/StandardMessageForm';

function Chat() {

    const chatProps = useMultiChatLogic(
        import.meta.env.VITE_PROJECT_ID,
        "testuser",
        "1234"
    )

  return (
    <div style={{ flexBasis: "100%" }} >
        <MultiChatSocket {...chatProps} />
        <MultiChatWindow 
            {...chatProps}
            style={{ height: "100vh" }}
            renderChatHeader={ (chat) => <CustomHeader chat={chat} /> }
            renderMessageForm={ (props) => {
                return(
                    <StandardMessageForm props={props} activeChat={chatProps.chat}  />
                )
            } }
        />
    </div>
  )
}

export default Chat