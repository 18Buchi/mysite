const main = document.querySelector("main");
const input = document.querySelector("input");
const textarea = document.querySelector("textarea");
const button = document.querySelector("button");

// async function addArticle(){

// }

async function createArticles() {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const items = await res.json();

    // const items =
    //  [
    //   // { title: "title1", body: "テスト1テスト1テスト1" },
    //   // { title: "title2", body: "テスト2テスト2テスト2" },
    //   // { title: "title3", body: "テスト3テスト3テスト3" },
    //   // { title: "title4", body: "テスト4テスト4テスト4" },
    // ];
    items.forEach(function (item) {
      const article = createArticle(item);
      main.appendChild(article);
    });
  } catch (error) {
    main.textContent = "読み込みに失敗しました😞";
  }
}
function createArticle(item) {
  const article = document.createElement("article");
  // タイトルを作る
  const title = document.createElement("h2");
  title.textContent = item.title;

  // 本文を作る
  const body = document.createElement("p");
  body.textContent = item.body;

  // articleの中に、タイトルと本文をいれる
  article.appendChild(title);
  article.appendChild(body);

  return article;
  // console.log(article);

  // 最後にmainに差し込む
  // main.prepend(article);
}

// ロードしたタイミングで処理を実行するイベント
window.addEventListener("load", createArticles);

// buttonをクリックした時の処理
button.addEventListener("click", async function () {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "POST",
      body: JSON.stringify({
        title: input.value,
        body: textarea.value,
        userId: 1,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    });

    const data = await res.json();
    const article = createArticle(data);
    main.prepend(article);
  } catch (error) {
    alert("投稿に失敗しました😞");
  }
});
