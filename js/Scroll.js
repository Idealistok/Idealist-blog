let lastScrollTop = 0; // 上一次滚动的 Y 坐标
const navbar = document.querySelector('.navigate');

window.addEventListener('scroll', function () {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // 向下滚动时，隐藏导航栏
        navbar.classList.add('hide');
    } else {
        // 向上滚动时，显示导航栏
        navbar.classList.remove('hide');
    }

    // 更新 lastScrollTop 位置
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // 防止滚动到负值
});
