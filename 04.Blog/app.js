function attachEvents() {
  const buttonLoadPost = document.querySelector("#btnLoadPosts");
  buttonLoadPost.addEventListener("click", loadPosts);
}

async function loadPosts() {
  const result = await (
    await fetch("http://localhost:3030/jsonstore/blog/posts")
  ).json();
}

attachEvents();
