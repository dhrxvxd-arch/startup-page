const shortcuts = {
  g: "https://github.com",
  a: "https://wiki.archlinux.org",
  y: "https://youtube.com",
  d: "https://discord.com/app",
  t: "https://twitch.tv",
  r: "https://reddit.com"
};

document.addEventListener("keydown", (event) => {
    if (event.ctrlKey || event.altKey || event.metaKey) return;

    const key = event.key.toLowerCase();

    if (shortcuts[key]) {
        window.location.href = shortcuts[key];
    }
});
