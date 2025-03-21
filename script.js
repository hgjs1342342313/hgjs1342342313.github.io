// 示例项目数据
const projects = [
    {
        title: '项目一',
        description: '这是一个示例项目描述',
        link: '#'
    },
    {
        title: '项目二',
        description: '这是另一个示例项目描述',
        link: '#'
    },
    // 可以添加更多项目
];

// 加载项目
function loadProjects() {
    const projectGrid = document.querySelector('.project-grid');
    if (!projectGrid) return;

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <a href="${project.link}" class="project-link">了解更多</a>
        `;
        projectGrid.appendChild(projectCard);
    });
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();
}); 