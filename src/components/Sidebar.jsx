import { Provider, useSelector } from 'react-redux'
const Sidebar=()=>
{
    const toggle=useSelector((store)=>store.app.toggle); 
   if(!toggle) return null;
   else
    return <div className=" border border-gray-400 shadow-lg ">
        <div className="mb-3 border-b-2 border-gray-400 w-full ">
            <h1 className="text-2xl font-semibold mb-2">You</h1>
            <ul className="p-5">
                <li>Your channel</li>
                <li>history</li>
                <li>Playlist</li>
                <li>watch later</li>
                <li>liked videos</li>
            </ul>
        </div>
        <div className="mb-3 border-b-2 border-gray-400">
            <h3 className="text-2xl font-semibold mb-2">Explore</h3>
            <ul>
                <li>Trending</li>
                <li>Shopping</li>
                <li>Movies</li>
                <li>Gaming</li>
                <li>News</li>
                <li>Sports</li>
                <li>Courses</li>
                <li>Fashion & Beauty</li>
                <li>Podcasts</li>
            </ul>
        </div> 

    </div>
}

export default Sidebar;