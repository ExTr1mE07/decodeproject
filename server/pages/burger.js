alert("sddf")
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("myblog_burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})
