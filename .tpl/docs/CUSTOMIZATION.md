# 修改指南

品牌改 config/brand.ts；正文、报价改 content/copy.ts；作品与分类改 content/projects.ts；样式改 theme.css。所有入口基于 basePath 拼接，语言切换保持页面、查询参数与锚点。图片与字体保存在 public/templates/foldex，来源见 asset-sources.json。增加页面时同步 meta.ts 与 template.json。截图使用三种真实视口，禁止仅缩放截图。
