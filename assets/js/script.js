$(".nav-link").on("click", function (e) {
    e.preventDefault();
    const url = this.href;
    const urlArr = url.split("/");
    let title;

    const lastPathName = urlArr[urlArr.length - 1];

    window.history.pushState("page2", title, url);

    if (lastPathName !== "posts") {
        title = `Admin | String ${lastPathName}`;
    } else {
        title = `Admin | Home`;
    }
    document.title = title;

    // load data from ajax
    $.ajax({
        type: "GET",
        url: "/posts/hiburan",
    }).done((data) => {
        console.log(data);
    });
});

// $(document).ready(function () {
//     $.ajax({
//         type: "GET",
//         url: "/posts/hiburan",
//     }).done((data) => {
//         console.log(data);
//     });
// });
// function xhr_get(url) {
//     return $.ajax({
//         type: "GET",
//         url: url,
//     });
// }
