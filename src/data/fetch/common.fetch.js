export async function fetchAllCategories() {
  const res = await fetch(`${process.env.REACT_APP_API_URL}/categories/?_expand=parentCategory`);
  const data = await res.json();

  return data;
}
