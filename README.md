# Monika Is Not Real

一个基于 HTML5 的交互式网页应用，展示 AI 生成的动漫角色图片和对话内容。

## 功能特点

- 🖼️ 自动切换 AI 生成的动漫角色图片
- ✍️ 打字机效果的文本显示
- 🌐 支持中英文双语切换
- 🎵 背景音乐播放控制
- ⚡ 可调节打字速度
- 🔄 支持手动刷新内容
- 📱 响应式设计，适配各种设备

## 技术栈

- HTML5
- CSS3
- JavaScript (原生)
- 响应式设计
- 打字机动画效果
- 音频控制

## 项目结构

```
monika/
├── index.html          # 主页面
├── fragments.json      # 文本内容数据
├── bgm.mp3            # 背景音乐
├── images/            # 图片资源目录
│   ├── 10.webp
│   ├── 11.webp
│   └── ...
├── discord.svg        # Discord 图标
└── steam.svg         # Steam 图标
```

## 使用说明

1. 克隆仓库：
```bash
git clone git@github.com:jackyrwj/Monika.git
```

2. 打开 `index.html` 文件即可运行项目

## 功能说明

### 图片展示
- 自动循环展示 AI 生成的动漫角色图片
- 图片切换间隔为 50 秒

### 文本显示
- 使用打字机效果逐字显示文本内容
- 支持中英文双语切换
- 可调节打字速度（10ms - 500ms）

### 音乐控制
- 支持背景音乐播放/暂停
- 自动播放（需要用户交互）
- 循环播放

### 社交链接
- Twitter
- Discord
- Steam

## 开发说明

### 添加新的文本内容
在 `fragments.json` 中添加新的文本片段，格式如下：
```json
{
  "title": "中文标题",
  "title_en": "English Title",
  "content": ["中文内容1", "中文内容2"],
  "content_en": ["English content 1", "English content 2"],
  "image": "图片文件名"
}
```

### 添加新的图片
1. 将图片文件放入 `images` 目录
2. 在 `index.html` 中的 `imageList` 数组添加图片文件名

## 贡献指南

1. Fork 本仓库
2. 创建新的分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## 致谢

- 项目灵感来自 [This Waifu Does Not Exist](https://thiswaifudoesnotexist.net/)
- 模型和网站设计参考自 Gwern Branwen 的作品 