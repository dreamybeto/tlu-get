const timer = ms => new Promise(res => setTimeout(res, ms));
const get = async () => {
    const totalPages = +document.querySelector(".flowpaper_tblabel").textContent.replace(/[^0-9]/g, '');
    for (let i = 1; i <= totalPages; ++i) {
        const id = window.location.href.split('/')[7].slice(5), folder = window.location.href.split('=')[1].replace("&doc", '');
        const src = `http://tailieuso.tlu.edu.vn/flowpaper/services/view.php?doc=${id}&format=jpg&page=${i}&subfolder=${folder}`;
        const image = await fetch(src);
        const blob = await image.blob();
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${i}f`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        await timer(640);
    }
}
get();