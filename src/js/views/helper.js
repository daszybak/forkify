export const getJSON = async function (url, config) {
  try {
    const res = await fetch(url, config);
    const data = await res.json();

    if (!res.ok) throw new Error(`${data.message} (${res.status})`);

    return data;
  } catch (err) {
    alert(err);
  }
};
