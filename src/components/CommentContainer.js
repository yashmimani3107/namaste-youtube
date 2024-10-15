import React from 'react';

// Mock Data for comments
const commentsData = [
  {
    id: 1,
    name: 'User1',
    text: 'This is a great video!',
    replies: [
      {
        id: 2,
        name: 'User2',
        text: 'I totally agree!',
        replies: []
      }
    ]
  },
  {
    id: 3,
    name: 'User3',
    text: 'Nice explanation!',
    replies: []
  },
  {
    id: 4,
    name: 'User4',
    text: 'This helped me a lot, thanks!',
    replies: [
      {
        id: 5,
        name: 'User5',
        text: 'Glad it was helpful!',
        replies: []
      }
    ]
  }
];

// Single Comment Component
const Comment = ({ name, text, replies }) => {
  return (
    <div className='p-2 m-2 border rounded bg-gray-100'>
      <p className='font-bold'>{name}</p>
      <p>{text}</p>
      {/* If there are replies, render them */}
      {replies.length > 0 && (
        <div className='pl-4 mt-2 border-l'>
          {replies.map((reply) => (
            <Comment key={reply.id} {...reply} />
          ))}
        </div>
      )}
    </div>
  );
};

// Comment Container Component
const CommentContainer = () => {
  return (
    <div className='p-5'>
      <h2 className='font-bold text-lg mb-4'>Comments</h2>
      {/* Render each comment */}
      {commentsData.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
};

export default CommentContainer;
