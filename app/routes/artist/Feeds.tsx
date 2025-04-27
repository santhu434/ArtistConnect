// FeedPage.tsx
import { useState } from "react";
import { Avatar, TextField, Button } from "@mui/material";

const feedData = [
  {
    id: 1,
    artistName: "DJ Marshmello",
    artistAvatar: "https://randomuser.me/api/portraits/men/75.jpg",
    postedAt: "2 hours ago",
    contentText: "Super excited for my upcoming concert in LA 🎉",
    postImage: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 245,
    comments: [
      { user: "fan_john", userAvatar: "https://randomuser.me/api/portraits/men/32.jpg", comment: "Can't wait! 🔥", commentedAt: "30 min ago" },
      { user: "musiclover_92", userAvatar: "https://randomuser.me/api/portraits/women/45.jpg", comment: "See you there!", commentedAt: "20 min ago" }
    ]
  },
  {
    id: 2,
    artistName: "Ariana Grande",
    artistAvatar: "https://randomuser.me/api/portraits/women/76.jpg",
    postedAt: "1 day ago",
    contentText: "Behind the scenes of my new album 💖",
    postImage: "https://images.unsplash.com/photo-1619229666372-3c26c399a4cb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 1032,
    comments: [
      { user: "arianator_official", userAvatar: "https://randomuser.me/api/portraits/women/12.jpg", comment: "So proud of you 👏", commentedAt: "5 hours ago" }
    ]
  },
  {
    id: 3,
    artistName: "The Weeknd",
    artistAvatar: "https://randomuser.me/api/portraits/men/23.jpg",
    postedAt: "5 hours ago",
    contentText: "New music dropping tonight 🌌",
    postImage: "https://images.unsplash.com/photo-1600119692885-8b04faa7f329?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 875,
    comments: [
      { user: "fan_love", userAvatar: "https://randomuser.me/api/portraits/men/41.jpg", comment: "Can't wait for it!!", commentedAt: "1 hour ago" }
    ]
  },
  {
    id: 4,
    artistName: "Billie Eilish",
    artistAvatar: "https://randomuser.me/api/portraits/women/65.jpg",
    postedAt: "3 days ago",
    contentText: "Filming my new music video 🎬",
    postImage: "https://images.unsplash.com/photo-1484972759836-b93f9ef2b293?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 2301,
    comments: []
  },
  {
    id: 5,
    artistName: "Ed Sheeran",
    artistAvatar: "https://randomuser.me/api/portraits/men/22.jpg",
    postedAt: "1 week ago",
    contentText: "Studio vibes only 🎤🎶",
    postImage: "https://plus.unsplash.com/premium_photo-1661679589476-f5a18fe2833c?q=80&w=2090&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 764,
    comments: [
      { user: "musicfan123", userAvatar: "https://randomuser.me/api/portraits/women/18.jpg", comment: "Studio goals 🔥", commentedAt: "2 days ago" }
    ]
  },
  {
    id: 6,
    artistName: "Dua Lipa",
    artistAvatar: "https://randomuser.me/api/portraits/women/55.jpg",
    postedAt: "2 weeks ago",
    contentText: "Rehearsing for my world tour 🌍",
    postImage: "https://plus.unsplash.com/premium_photo-1679669249674-cc44b01cb4dc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 1500,
    comments: []
  },
  {
    id: 7,
    artistName: "Drake",
    artistAvatar: "https://randomuser.me/api/portraits/men/65.jpg",
    postedAt: "4 hours ago",
    contentText: "Big announcement coming soon 👀",
    postImage: "https://images.unsplash.com/photo-1605957088164-227c6e613547?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 2040,
    comments: []
  },
  {
    id: 8,
    artistName: "Taylor Swift",
    artistAvatar: "https://randomuser.me/api/portraits/women/5.jpg",
    postedAt: "2 days ago",
    contentText: "Thank you for all the love on my new album 💕",
    postImage: "https://images.unsplash.com/photo-1588436556073-a98e49641400?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQzfHxtdXNpYyUyMGFubm91bmNlbWVudHxlbnwwfHwwfHx8MA%3D%3D",
    likes: 8000,
    comments: [
      { user: "swiftie_lover", userAvatar: "https://randomuser.me/api/portraits/women/25.jpg", comment: "We love you!", commentedAt: "3 hours ago" }
    ]
  },
  {
    id: 9,
    artistName: "Post Malone",
    artistAvatar: "https://randomuser.me/api/portraits/men/9.jpg",
    postedAt: "3 weeks ago",
    contentText: "Summer tour dates are LIVE ☀️",
    postImage: "https://plus.unsplash.com/premium_photo-1731355236508-1daafb9dcaec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 500,
    comments: []
  },
  {
    id: 10,
    artistName: "Selena Gomez",
    artistAvatar: "https://randomuser.me/api/portraits/women/10.jpg",
    postedAt: "Yesterday",
    contentText: "Feeling grateful today 🌟",
    postImage: "https://plus.unsplash.com/premium_photo-1727976369458-3178452a0dfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    likes: 3000,
    comments: []
  }
];

export default function FeedPage() {
    const [posts, setPosts] = useState(feedData);
    const [commentInputs, setCommentInputs] = useState<{ [key: number]: string }>({});
    const [showCommentInput, setShowCommentInput] = useState<{ [key: number]: boolean }>({});
  
    const handleAddComment = (postId: number) => {
      if (!commentInputs[postId]) return;
      const newPosts = posts.map(post => {
        if (post.id === postId) {
          return {
            ...post,
            comments: [
              ...post.comments,
              {
                user: "You",
                userAvatar: "https://randomuser.me/api/portraits/lego/1.jpg",
                comment: commentInputs[postId],
                commentedAt: "Just now"
              }
            ]
          };
        }
        return post;
      });
      setPosts(newPosts);
      setCommentInputs(prev => ({ ...prev, [postId]: "" }));
      setShowCommentInput(prev => ({ ...prev, [postId]: false })); // Hide the input after posting
    };
  
    const handleShowCommentInput = (postId: number) => {
      setShowCommentInput(prev => ({ ...prev, [postId]: true }));
    };
  
    return (
      <div className="max-w-4xl mx-auto p-4 space-y-8">
        {posts.map(post => (
          <div key={post.id} className="bg-[#292929] rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
            {/* Header */}
            <div className="flex items-center p-4">
              <Avatar src={post.artistAvatar} />
              <div className="ml-3">
                <div className="font-semibold text-white">{post.artistName}</div>
                <div className="text-xs text-gray-400">{post.postedAt}</div>
              </div>
            </div>
  
            {/* Content */}
            <div className="p-4">
              <p className="text-white mb-2">{post.contentText}</p>
              {post.postImage && (
                <img src={post.postImage} alt="Post" className="w-full h-60 object-cover rounded-md mx-auto" />
              )}
            </div>
  
            {/* Actions */}
            <div className="flex justify-around py-2 border-t text-sm text-white">
              <div>👍 {post.likes} Likes</div>
              <div>💬 {post.comments.length} Comments</div>
            </div>
  
            {/* Comments */}
            <div className="p-4 space-y-3">
              {post.comments.map((comment, index) => (
                <div key={index} className="flex items-start gap-2">
                  <Avatar src={comment.userAvatar} className="w-8 h-8" />
                  <div className="bg-[#1f1f1f] rounded-lg p-2 w-full">
                    <div className="text-sm font-semibold text-white">{comment.user}</div>
                    <div className="text-sm text-white">{comment.comment}</div>
                    <div className="text-xs text-gray-400">{comment.commentedAt}</div>
                  </div>
                </div>
              ))}
  
              {/* Show "Send Comment" Button if input is hidden */}
              {!showCommentInput[post.id] ? (
                <Button
                  variant="outlined"
                  size="small"
                  onClick={() => handleShowCommentInput(post.id)}
                  className="text-white"
                >
                  Send Comment
                </Button>
              ) : (
                // Show TextField and Post button
                <div className="flex items-center gap-2 bg-white rounded-lg p-2">
                  <TextField
                    placeholder="Write a comment..."
                    size="small"
                    value={commentInputs[post.id] || ""}
                    onChange={(e) =>
                      setCommentInputs(prev => ({ ...prev, [post.id]: e.target.value }))
                    }
                    fullWidth
                  />
                  <Button
                    variant="contained"
                    size="small"
                    onClick={() => handleAddComment(post.id)}
                  >
                    Post
                  </Button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  }