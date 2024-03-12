import axios from "axios";
import iziToast from "izitoast";

axios.defaults.baseURL = 'https://pixabay.com/api';

export const searchParams  =  {
  key: "11070675-9db3ad99120a3eae94c3d42ec",
  q: "",
  image_type: "photo",
  orientation: "horizontal",
  safesearch: "true",
  pretty: "true",
  page: 1,
  per_page: 15,
}

export async function fetchPhoto(params) {
  const spinner = document.querySelector('.loader')
  spinner.classList.remove('is-hidden')
  if (params.q === "") {
        spinner.classList.add('is-hidden')
        return
  }

  const { data } = await axios.get(`?${new URLSearchParams(params)}`)
  spinner.classList.add('is-hidden')
  return data
}

