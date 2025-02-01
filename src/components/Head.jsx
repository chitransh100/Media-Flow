import { useDispatch, useSelector } from "../../node_modules/react-redux";
import { togglemenu } from "../store/appslice";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Youtube_search_API } from "../store/constants";
import { cacheResults } from "../store/searchslice";

const Head = () => {
  const dispatch = useDispatch();
  const [searchQuery, setsearchQuery] = useState("");
  const [suggestions, setsuggestion] = useState([]);
  const [showsuggestion, setshowsuggestion] = useState(false);

  const handlehamburger = () => {
    dispatch(togglemenu());
  };

  const searchCache = useSelector((store) => store.search);
  useEffect(() => {    
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setsuggestion(searchCache[searchQuery]);
      } else {
        getSearchResults();
      }
    }, 200);

    return () => { 
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchResults = async () => {
    console.log("API call-" + searchQuery);
    const data = await fetch(Youtube_search_API + searchQuery);
    const json = await data.json();
    setsuggestion(json[1]);
    //update cache
    dispatch(
      cacheResults({
        [searchQuery]:[json[1]],
      })
    );
  };

  
  return (
    <div className="relative z-10 border border-gray-400 shadow-lg p-2 grid grid-flow-col">
      <div className="flex col-span-1">
        <img
          className="h-8 cursor-pointer "
          onClick={() => handlehamburger()}
          alt="menu"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/800px-Hamburger_icon.svg.png"
        ></img>
        <Link to="/">
          <img
            onClick={() => handlehamburger()}
            className="h-8 mx-5"
            alt="youtube-logo"
            src="../src/assets/Leonardo_Phoenix_09_A_sleek_modern_logo_for_MediaFlow_a_video_3-removebg-preview.png"
          ></img>
        </Link>
      </div>
      <div className="col-span-10 px-10">
        <input
          placeholder="SEARCH HERE!!"
          onFocus={() => setshowsuggestion(true)}
          onBlur={() => setshowsuggestion(false)}
          onChange={(event) => setsearchQuery(event.target.value)}
          className="border pl-6 border-gray-400 p-1 rounded-l-full w-1/2 "
        ></input>
        <button className="border border-gray-400 p-1 rounded-r-full bg-gray-100  ">
          search
        </button>
        {showsuggestion && (
          <div className="fixed bg-white w-[31rem] ml-4 border-black rounded-b-[1rem] ">
            <ul className=" border-black">
              {suggestions.map((s) => (
                <li className=" cursor-pointer px-4 py-1 border hover:bg-gray-300 shadow">
                  {" "}
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div>
        <img
          className="h-8"
          src="https://e7.pngegg.com/pngimages/343/677/png-clipart-computer-icons-user-profile-login-my-account-icon-heroes-black-thumbnail.png"
          alt="user"
        />
      </div>
    </div>
  );
};
export default Head;
