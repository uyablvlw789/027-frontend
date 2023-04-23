// 替换Markdown字符串中所有包含图片的路径。
// 请注意，此函数假定您的图片文件名不包含空格或其他特殊字符。如果您的文件名包含空格或其他特殊字符，则需要进行更改。
export function replaceImagePaths(markdownString) {
  const regex = /!\[.*\]\((.*)\)/g;
  const matches = markdownString.match(regex);
  // 开发模式后端url
  const devBackendPath = "http://localhost:1337";
  if (matches) {
    matches.forEach((match) => {
      const imagePath = match.replace(/!\[.*\]\(/, "").replace(")", "");
      const absolutePath = `${devBackendPath}${imagePath}`;
      markdownString = markdownString.replace(imagePath, absolutePath);
    });
  }
  return markdownString;
}
