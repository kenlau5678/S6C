var mobile = document.querySelector(".mobile")
var PC = document.querySelector(".PC")
if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
    PC.style.display = "none"; //手机
} else {
    mobile.style.display = "none"; //电脑
}