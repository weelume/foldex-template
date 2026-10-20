# Foldex 使用说明

能力：主页、作品索引、6 分类、报价、评价、关于、联系与 404；中英文；桌面、平板、手机响应式；作品预览及键盘翻页。无后端、持久化或外部发送。

环境：Node 22.13.1，pnpm 12.10.1。运行 `pnpm install --frozen-lockfile`，`pnpm dev`，访问 http://127.0.0.1:43276；英文 /en。Ctrl+C 停止。`.env.example` 提供 HOSTNAME 和 PORT。

检查：`pnpm typecheck`、`pnpm lint`、`pnpm test`、`pnpm build`。`pnpm bundle` 生成共享运行包，源码提交、远端配置与发布由使用者决定。Git 仓库：https://github.com/weelume/foldex-template。

修改入口：config/brand.ts、content/、theme.css、components/、pages/，均在 src/features/site-templates/catalog/foldex。详见 docs/ARCHITECTURE.md、CUSTOMIZATION.md、VERIFICATION.md、LICENSE.md。
