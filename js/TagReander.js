const tagsData = [
    { name: "技术", link: "/tag/technology" },
    { name: "编程", link: "/tag/programming" },
    { name: "VR", link: "/tag/vr" },
    { name: "游戏开发", link: "/tag/gaming" },
    { name: "设计", link: "/tag/design" },
    { name: "教程", link: "/tag/tutorial" },
    { name: "JavaScript", link: "/tag/javascript" },
    { name: "CSS", link: "/tag/css" },
    { name: "HTML", link: "/tag/html" }
];

const tagContainer = document.querySelector('.tags');

// 渲染标签
function renderTags() {
    tagsData.forEach(tag => {
        const tagElement = document.createElement('a');
        tagElement.classList.add('tag');
        tagElement.href = tag.link;
        tagElement.textContent = tag.name;
        tagContainer.appendChild(tagElement);
    });
}

// 调用函数渲染标签
renderTags();
