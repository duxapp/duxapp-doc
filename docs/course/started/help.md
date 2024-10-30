---
sidebar_position: 20
---

# 常见问题

## 运行命令提示没有 `package.json`

这通常出现在从git拉取项目之后，因为`package.json`是动态生成的，这个文件被 `.gitignore` 排除，不会同步到仓库中

因此你需要复制一个份 `package.back.json` 文件修改为 `package.json` 然就后能正常操作了