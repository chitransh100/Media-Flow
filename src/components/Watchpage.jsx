import { useEffect } from "../../node_modules/react";
import { useDispatch } from "../../node_modules/react-redux";
import { closeMenu } from "../store/appslice";
import { useParams, useSearchParams } from "../../node_modules/react-router-dom";
import CommentContainer from "./CommentsContainer";
import LiveChat from "./LiveChats";
const Watchpage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  const [searchparams] = useSearchParams();
  console.log(searchparams.get("v"));
  return (
    <div className="p-2 mx-10 my-8 flex w-full">
      <div>
        <iframe
          className="rounded-lg"
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchparams.get("v")}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
        <CommentContainer></CommentContainer>
      </div>
      <LiveChat />
      {/* <div className="border border-black h-[500px] ml-6  w-full rounded-lg ">
        <center className="font-bold text-xl mb-4 h-[33px]">Live Chat</center>
        <div className=" overflow-scroll h-[440px] flex flex-col-reverse  ">
        <LiveChat />
        </div>
        <input></input> */}
        
      </div>
    
  );
};
export default Watchpage;
