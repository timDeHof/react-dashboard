const clientId = "nSo2MiQC5C7iz5uBHPFNOPs0imhsaUJr7dlL6bGAMXU";
const endpoint = `https://api.unsplash.com/photos/random/?client_id=${clientId}`;
const orientation = "&orientation=landscape";
const query = "&query=nature";

// default values for background image
export const imageData = {
  defaultUrl:
    "https://images.unsplash.com/photo-1517512006864-7edc3b933137?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NjA0MzM4NTU&ixlib=rb-1.2.1&q=80&w=1080",
  url: "",
  author: "",
  authorUrl: "",
  location: "",
};
export const getBackgroundImage = async () => {
  try {
    const res = await fetch(endpoint + orientation + query);
    const data = await res.json();
    imageData.url = data.urls.raw;
    imageData.author = data.user.username;
    document.body.style.backgroundImage = `url(${imageData.url})`;
    // document.getElementById(
    //   "author"
    // ).innerHTML = `By: <a href="https://unsplash.com/@${authorName}">${authorName}</a>`;
  } catch (error) {
    const defaultImg = imageData.defaultUrl;

    document.body.style.backgroundImage = `url(${defaultImg})`;
  }
};
