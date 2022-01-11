let name = "";
let url = "";

function downloadAlanWalkerTheme() {
  name = "alanWalker.theme.css";
  url = 'https://lolpowerluke.github.io/bd-themes/AlanWalkerTheme/alanWalker.theme.css';
  download();
}
function downloadSmallDMchannelList() {
  name = "smallDMchannelList.theme.css";
  url = 'https://lolpowerluke.github.io/smallDMchannelList/smallDMchannelList.css';
  download();
}
function download() {
  fetch(url)
  .then(resp => resp.blob())
  .then(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.style.display = 'none';
      a.href = url;
      a.download = name;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
  })
  .catch(() => alert('oh no!'));
}
