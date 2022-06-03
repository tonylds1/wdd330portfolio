export async function getDataFromJson(path) {
  return await fetch(path).then(convertToJson);
}

export function renderWithTemplate(template, parentElement, data, callback) {
  // clone the template
  let node = template.content.cloneNode(true);

  // if there is a callback, call it on the node and the data
  if (callback) {
    node = callback(node, data);
  }
  // add it to the DOM
  parentElement.appendChild(node);
}

export async function loadTemplate(path) {
  const html = await fetch(path).then(convertToText);
  const template = document.createElement("template");
  template.innerHTML = html;
  return template;
}

export const selectElement = (selector) => {
  const element = document.querySelector(selector);
  if (element) return element;
  throw new Error(
    `Double check your '${element}' seletor and make sure it's typed correctly`
  );
};
function convertToJson(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error("Bad Response");
  }
}

function convertToText(res) {
  try {
    if (res.ok) {
      return res.text();
    } else {
      throw new Error("Bad Response");
    }
  } catch (e) {
    // console.log(e);
  }
}
