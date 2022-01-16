export function random_colors() {
    var hue = Math.floor(Math.random() * 360);
    var pastel = "hsl(" + hue + ", 100%, 80%)";
    return pastel;
}
