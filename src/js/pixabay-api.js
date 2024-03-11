export const searchParams  =  {
    key: "11070675-9db3ad99120a3eae94c3d42ec",
    q: "",
    image_type: "photo",
    orientation: "horizontal",
    safesearch: "true",
    pretty: "true",
}

export function fetchPhoto(params) {
  const spinner = document.querySelector('.loader')
  spinner.style.display = "block";
  if (params.q === "") {
        spinner.style.display = "none";
        return
    }
  return fetch(
    `https://pixabay.com/api/?${new URLSearchParams(params)}`
  ).then((response) => {
    spinner.style.display = "none";
    if (!response.ok) {
      throw new Error(response.status);
      }
    return response.json();
  });
}