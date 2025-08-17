// services file is where the back end activity is

//BASE_URL is literally the base url
// imports localhost:/ then adds the '/tracks'
const BASE_URL = `${import.meta.env.VITE_BACK_END_SERVER_URL}/tracks`;

// rendering into a web page
const index = async () => {
  try {
    const res = await fetch(BASE_URL);
    return res.json();
  } catch (err) {
    console.log(err);
  }
};

// logs all of the tracks
// console.log(await index());

const create = async (formData) => {
try {
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  });

  return res.json();

} catch(err) {
  console.log(err);
}

}


export {
    index,
    create,
};