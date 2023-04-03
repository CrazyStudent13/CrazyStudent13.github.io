/*
 * @Author: crazystudent13 1076535690@qq.com
 * @Date: 2023-03-05 13:26:08
 * @LastEditors: crazystudent13 1076535690@qq.com
 * @LastEditTime: 2023-03-05 15:59:00
 * @Description:
 */
function copyurl() {
  let url = window.location.href;
  let tipText = "复制成功"
  let div = document.createElement("div");

  const input = document.createElement("input");
  document.body.appendChild(input);
  input.setAttribute("value", url);
  input.select();
  if (document.execCommand("copy")) {
    document.execCommand("copy");
  }
  document.body.removeChild(input);

  // Setup
  div.setAttribute("class", "tips-success animate__animated  animate__fadeIn");
  div.innerHTML = tipText;

  // 提示成功
  document.body.appendChild(div);

  setTimeout(() => {
    div.setAttribute(
      "class",
      "tips-success animate__animated animate__fadeOut"
    );
  }, 3000);

  setTimeout(() => {
    div.remove();
  }, 3500);
}
