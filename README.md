# 把个人主页发布到 GitHub Pages

按你的 GitHub 账号 `jin2319546842-max` 操作。上传包是当前无横幅、无项目配图的版本，可直接发布，无需安装软件、使用终端或编译。

## 1 解压上传包

解压本轮提供的 `GitHub-Pages-上传包.zip`。解压后直接看到：

```text
index.html
style.css
app.js
content.js
.nojekyll
assets/
README.md
```

`assets` 里面有网页图标和更新后的 Word 简历。上传的是这些文件及整个 `assets` 文件夹，**不要上传 ZIP 本身，也不要把外层文件夹一起拖进去。** `index.html` 必须位于仓库根目录，`assets` 要保留文件夹结构。

## 2 创建个人主页仓库

1. 登录账号 `jin2319546842-max`，打开 [新建仓库](https://github.com/new)。
2. Owner 选 `jin2319546842-max`。
3. Repository name 填 `jin2319546842-max.github.io`。
4. Visibility 选择 **Public**。
5. 开启 **Add README**，然后点击 **Create repository**。

仓库名与账号名对应，才能得到不带项目路径的个人主页地址。参考 [GitHub 官方说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)。如果已经有同名仓库，直接进入该仓库继续下一步。

## 3 上传网页文件

1. 进入新仓库，点击 **Add file → Upload files**。
2. 将解压后看到的 `index.html`、`style.css`、`app.js`、`content.js`、`.nojekyll` 和完整的 `assets` 文件夹拖到上传区域。README 保留 GitHub 创建的那份即可。
3. 检查上传列表：根目录有 `index.html`，简历位于 `assets/Tianle-Jin-CV.docx`。
4. 提交说明可填 `Publish personal homepage`。若可直接提交，选择提交到 **main** 并点击 **Commit changes**；若显示 **Propose changes**，提交后创建 Pull request，再点击 **Merge pull request → Confirm merge**，把文件合并到 main。

GitHub 支持直接拖入文件或文件夹，参考 [官方上传文件说明](https://docs.github.com/en/repositories/working-with-files/managing-files/adding-a-file-to-a-repository)。

包内 `.nojekyll` 建议一起上传，用于跳过 Jekyll 处理。若漏掉，可通过 **Add file → Create new file** 新建名为 `.nojekyll` 的空文件后提交。参考 [官方静态文件发布说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#static-site-generators)。

## 4 开启 Pages

1. 点击仓库上方 **Settings**，再点左侧 **Pages**。
2. 在 **Build and deployment** 中，Source 选 **Deploy from a branch**。
3. Branch 选 **main**，文件夹选 **/ (root)**。
4. 点击 **Save**。

创建仓库后可直接打开 [Pages 设置页面](https://github.com/jin2319546842-max/jin2319546842-max.github.io/settings/pages)。

## 5 打开网站

等待 GitHub 构建发布。通常需要几分钟，官方说明可能需要最多约 10 分钟。Pages 页面出现 **Visit site** 后点击即可。参考 [官方发布耗时说明](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site#viewing-your-published-site)。

完成后的目标网址是：

**[https://jin2319546842-max.github.io/](https://jin2319546842-max.github.io/)**

这个地址要在完成创建仓库、上传和 Pages 发布后才生效；本轮没有代你创建 GitHub 仓库。发布成功后，别人无需登录即可打开。

如打不开，检查：仓库名是否一致；index.html 是否在根目录；Pages 是否选择 main 和 /(root)；Actions 中 Pages 构建是否完成。参考 [GitHub 官方发布源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)。

## 以后更新

- 修改简介、项目或联系方式：编辑 `content.js`，zh 和 en 分别为中英文内容。
- 更新简历：替换 `assets/Tianle-Jin-CV.docx`，保持文件名。
- 更新后提交到同一个 main 分支，Pages 会自动重新发布。

现有 [公开站点](https://tianle-jin-research-2026.rosy-whale-0275.chatgpt.site/) 也可继续使用。
