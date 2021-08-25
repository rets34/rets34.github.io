function downloadAW() {
    fetch('https://lolpowerluke.github.io/bd-themes/AlanWalkerTheme/alanWalker.theme.css')
    .then(resp => resp.blob())
    .then(blob => {
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = 'alanWalker.theme.css';
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
    })
    .catch(() => alert('oh no!'));
}