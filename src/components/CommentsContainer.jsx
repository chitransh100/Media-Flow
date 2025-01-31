const CommentsData = [
  {
    name: "chitransh kumar",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    replies: [],
  },
  {
    name: "galaxy",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    replies: [
      {
        name: "chitransh kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
      {
        name: "chitransh kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [
          {
            name: "chitransh kumar",
            text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
            replies: [
              {
                name: "chitransh kumar",
                text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                replies: [
                  {
                    name: "chitransh kumar",
                    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                    replies: [
                      {
                        name: "chitransh kumar",
                        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
                        replies: [],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        name: "chitransh kumar",
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        replies: [],
      },
    ],
  },
];

const Comments = ({ data }) => {
  const { name, text, replies } = data;
  return (
    <div className="flex shadow-sm bg-gray-100 m-4">
      <img
        className="h-12 w-12"
        alt="user"
        src="https://e7.pngegg.com/pngimages/343/677/png-clipart-computer-icons-user-profile-login-my-account-icon-heroes-black-thumbnail.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({ comment }) => {
  return (
    <div>
      {comment.map((comment, index) => {
        return (
          <div key={index}>
            <Comments  data={comment}></Comments>
            <div className="pl-5 border border-l-black ml-5">
              <CommentList comment={comment.replies}></CommentList>
            </div>
          </div>
        );
      })}{" "}
    </div>
  );
};

const CommentContainer = () => {
  return (
    <>
      <div className="my-4">
        <h1 className="text-2xl font-bold mb-2">Comments</h1>
        <CommentList comment={CommentsData}></CommentList>
      </div>
    </>
  );
};

export default CommentContainer;
