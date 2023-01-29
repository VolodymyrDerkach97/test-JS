// Задача на рекурсію

const people = [
  { name: "Ivan", id: "1", parentId: null },
  { name: "Anna", id: "2", parentId: "1" },
  { name: "Petro", id: "3", parentId: "1" },
  { name: "Maria", id: "4", parentId: null },
  { name: "Sergiy", id: "5", parentId: "4" },
  { name: "Yura", id: "6", parentId: "2" },
  { name: "Anastasiya", id: "7", parentId: "2" },
]; // response

// result
const result = [
  {
    name: "Ivan",
    id: "1",
    parentId: null,
    children: [
      {
        name: "Anna",
        id: "2",
        parentId: "1",
        children: [
          { name: "Yura", id: "6", parentId: "2", children: null },
          { name: "Anastasiya", id: "7", parentId: "2", children: null },
        ],
      },
      { name: "Petro", id: "3", parentId: "1", children: null },
    ],
  },
  {
    name: "Maria",
    id: "4",
    parentId: null,
    children: [{ name: "Sergiy", id: "5", parentId: "4", children: null }],
  },
];
