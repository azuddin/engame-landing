/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    loader: "imgix",
    path: "http://noop/", // change to your assets path. ie: http://s3-url-containing-my-images.com
  },
};
