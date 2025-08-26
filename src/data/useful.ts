export const usefulCategories = [
  {
    id: "works",
    title: "РАБОТЫ УЧЕНИКОВ",
    icon: "Image.png",
    links: [
      "https://t.me/arinabraidsPRO/58","https://t.me/arinabraidsPRO/87",
      "https://t.me/arinabraidsPRO/150","https://t.me/arinabraidsPRO/171",
      "https://t.me/arinabraidsPRO/174","https://t.me/arinabraidsPRO/183",
      "https://t.me/arinabraidsPRO/332","https://t.me/arinabraidsPRO/198",
      "https://t.me/arinabraidsPRO/470"
    ].map((url, i)=>({ title:`Работа #${i+1}`, url })),
  },
  {
    id: "intro",
    title: "ЗНАКОМСТВО",
    icon: "Users.png",
    links: [
      { title: "Пост-знакомство", url: "https://t.me/arinabraidsPRO/79" }
    ],
  },
];
