import { useEffect, useRef } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "../../node_modules/react-redux";
import { addMessage } from "../store/ChatSlice";
import { generateName, generateString } from "../store/MessageSrc";

const LiveChat = () => {
  const dispatch = useDispatch();
  const chatMessage = useSelector((store) => store.chat.message) || [];
  const inputRef = useRef();

  useEffect(() => {
    const timer = setInterval(() => {
      dispatch(
        addMessage({
          name: generateName(),
          message: generateString(10) + "🔥🔥🔥🔥🔥",
        })
      );
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const inputMessage = inputRef.current.value.trim();
    
    if (inputMessage) {
      dispatch(
        addMessage({
          name: "Chitransh Kumar",
          message: inputMessage,
        })
      );
      inputRef.current.value = "";
    }
  };

  return (
    <div className="border border-black h-[500px] ml-6 w-full rounded-lg">
      <center className="font-bold text-xl mb-4 h-[33px]">Live Chat</center>
      <div className="overflow-scroll h-[400px] flex flex-col-reverse">
        <div>
          {chatMessage.map((c, index) => (
            <ChatMessage key={index} name={c.name} message={c.message} />
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Chat Here!!"
          className="border border-black ml-4 mt-3 w-[75%] h-[30px] p-2 rounded"
          aria-label="Type your message"
        />
        <button
          className="border border-black w-[15%] h-[30px] ml-2 rounded-lg hover:bg-red-500 hover:text-white"
          aria-label="Send message"
        >
          Send
        </button>
      </form>
    </div>
  );
};

export default LiveChat;
