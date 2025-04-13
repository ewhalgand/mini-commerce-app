const links = [
  {
    "param": "/",
    "name": "Home",
  },
  {
    "param": "/dashboard",
    "name": "Dashboard",
  },
];

const inputComponents = [
  {
    id: "title",
    type: "text",
    name: "title",
    label: "Title",
    placeholder: "Enter a title",
  },
  {
    id: "body",
    type: "text",
    name: "body",
    label: "Description",
    placeholder: "Enter a small description",
    maxlength: "30",
  },
  {
    id: "price",
    type: "number",
    name: "price",
    label: "Price",
    step: "any",
    placeholder: "Enter a price",
  },
];

export { links, inputComponents };
