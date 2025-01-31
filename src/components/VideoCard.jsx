const VideoCard = ({ info }) => {
    // Destructuring snippet and statistics directly from info object if it exists
    const { snippet,statistics } = info || {};
    const { channelTitle,title, thumbnails } = snippet || {}; // Destructuring from snippet


    return (
        <div className="p-2 m-4 rounded shadow w-80">
            <img className="rounded-lg" src={thumbnails?.medium?.url || 'default-image-url.jpg'} alt="thumbnails" />
            <ul>
                <li className="font-bold ">{title}</li>
                <li className="" >{channelTitle || 'No channel title available'}</li>
                <li>{statistics?.viewCount || 'views unavailable'} views </li>
            </ul>
        </div>
    );
};

export default VideoCard;
