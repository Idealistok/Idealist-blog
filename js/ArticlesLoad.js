// 假设我们有一些文章数据，这些数据可以通过 API 调用获得
const articlesData = [
    { title: "文章标题 1", summary: "这是文章1的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article1" },
    { title: "文章标题 2", summary: "这是文章2的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article2" },
    { title: "文章标题 3", summary: "这是文章3的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article3" },
    { title: "文章标题 4", summary: "这是文章4的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article4" },
    { title: "文章标题 5", summary: "这是文章5的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article5" },
    { title: "文章标题 6", summary: "这是文章6的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article6" },
    { title: "文章标题 7", summary: "这是文章7的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article7" },
    { title: "文章标题 8", summary: "这是文章8的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article8" },
    { title: "文章标题 9", summary: "这是文章9的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article9" },
    { title: "文章标题 10", summary: "这是文章10的摘要部分，通常是文章内容的前几行。", date: "2025-01-01", link: "/article10" }
];

let articlesToShow = 3; // 初始显示的文章数量

// 获取文章容器和加载更多按钮
const articleList = document.getElementById("article-list");
const loadMoreButton = document.getElementById("load-more");

// 渲染文章列表
function renderArticles() {
    articleList.innerHTML = ''; // 清空现有的文章
    const articlesToRender = articlesData.slice(0, articlesToShow);

    articlesToRender.forEach(article => {
        const articleCard = document.createElement('div');
        articleCard.classList.add('article-card');

        articleCard.innerHTML = `
            <h3 class="article-title">${article.title}</h3>
            <p class="article-summary">${article.summary}</p>
            <span class="article-date">发布日期：${article.date}</span>
            <a href="${article.link}" class="read-more">阅读全文</a>
        `;

        articleList.appendChild(articleCard);
    });
}

// 初始渲染文章
renderArticles();

// 点击加载更多按钮时增加显示的文章数量
loadMoreButton.addEventListener('click', () => {
    articlesToShow += 3; // 每次增加显示3篇文章
    renderArticles();

    // 如果没有更多文章了，隐藏加载更多按钮
    if (articlesToShow >= articlesData.length) {
        loadMoreButton.style.display = 'none';
    }
});
