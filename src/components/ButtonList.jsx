import Button from "./Button.jsx";

const ButtonList = () => {
    const list = [
        "Volleyball", 
        "Soccer", 
        "Basketball", 
        "Tennis", 
        "Cricket", 
        "Baseball", 
        "Rugby", 
        "Golf", 
        "Swimming", 
        "Badminton", 
        "Table Tennis", 
        "Hockey", 
        "Boxing", 
        "Wrestling",
        "American Football",
        "Cycling",
        "Skateboarding",
        "Surfing",
        "Ice Hockey",
        "Karate",
        "Judo",
        "Archery",
        "Horse Racing",
        "Skiing",
        "Snowboarding",
        "Fencing"
    ];
    
    return (
        <div className="w-[100%] max-w-full overflow-x-auto">
            <div className="flex whitespace-nowrap space-x-4">
                {list.map((item, index) => (
                    <Button key={index} label={item} />
                ))}
            </div>
        </div>
    );
};

export default ButtonList;
