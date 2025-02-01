import { useEffect, useState } from "../../node_modules/react";
import { YouTube_API } from "../store/constants";
import VideoCard from "./VideoCard";
import { Link } from "../../node_modules/react-router-dom";

const VideoContainer=()=>
{
    const [video,setvideo]=useState([])
    useEffect(()=>{
        getvideo();
    },[])

    const getvideo=async()=>
    {
        const data=await fetch(YouTube_API);
        const json=await data.json();
        // console.log(json);

        setvideo(json.items);

    }

    return <div className="flex flex-wrap">
        {
            video.map((item,index)=>
                <Link key={item?.id} to={"/watch?v="+item?.id}>
                    <VideoCard  info={item} />
                    
                </Link>
                
            )
        }
    </div>
}

export default VideoContainer;
