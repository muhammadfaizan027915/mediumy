export const sharelinks = ["facebook", "whatsapp", "twitter"];

const isMobile = () =>
  navigator.userAgent.match(/Android | BlackBerry | iPhone | iPad | iPod/i);

export const generateSharingURL = {
  facebook: (documentURL) => {
    return `http://www.facebook.com/share.php?u=${documentURL}`;
  },

  whatsapp: (documentURL) => {
    return `https://${
      isMobile() ? "api" : "web"
    }.whatsapp.com/send?text=${documentURL}`;
  },

  twitter: (documentURL) => {
    return `https://twitter.com/intent/tweet?url=${documentURL}`;
  },
};