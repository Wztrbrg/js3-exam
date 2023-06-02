import { search } from "../service/searchService";

//John vill som {role} kunna söka bland böcker
test("Check if search function works", async () => {
  const res = await search("Anna");
  let annaExist = false;

  for (let i = 0; i < res.length; i++) {
    if (res[i].title === "Anna Karenina") {
      annaExist = true;
    }
  }
  expect(annaExist).toBeTruthy();
});
