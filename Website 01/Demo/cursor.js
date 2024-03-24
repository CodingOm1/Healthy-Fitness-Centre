const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
    let x = e.pageX;
    cursor.style.display = "block";
    let y = e.pageY;
    cursor.style.top = y + "px";
    cursor.style.left = x + "px";

    function mousestopped(){
        cursor.style.display = "none";
    }
    clearTimeout(timeout);
    timeout = setTimeout(mousestopped, 1000);
});

document.addEventListener("mouseout", () => {
    cursor.style.display = "none";
});