const ChatMessage=({name,message})=>
{
    return <div className="flex flex-row items-center hover:bg-gray-100">
        
        <img className="h-6 w-6 mr-4 ml-2" alt="user" src="https://e7.pngegg.com/pngimages/343/677/png-clipart-computer-icons-user-profile-login-my-account-icon-heroes-black-thumbnail.png"></img>
        <div className="p-2">
        <span className="font-bold mr-2">{name}</span>
        <span>{message}</span>
        </div>
        
    </div>
}

export default ChatMessage;