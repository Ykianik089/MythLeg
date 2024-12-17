function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.right === "0px") {
        sidebar.style.right = "-300px"; // Скрыть панель
    } else {
        sidebar.style.right = "0px"; // Показать панель
    }
}
