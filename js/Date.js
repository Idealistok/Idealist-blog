// 获取当前年份并更新到页脚
const currentYear = new Date().getFullYear();
document.getElementById('current-year').textContent = currentYear;

// 获取当前日期并格式化为“YYYY-MM-DD”
const currentDate = new Date().toLocaleDateString();
document.getElementById('current-date').textContent = `今天是：${currentDate}`;
