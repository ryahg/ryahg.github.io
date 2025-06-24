var posts=["2025/06/07/ryahg-s-first-blog/","2025/06/24/停更通知📢/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };