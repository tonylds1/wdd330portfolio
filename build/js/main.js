import {
  getDataFromJson,
  loadTemplate,
  renderWithTemplate,
  selectElement,
} from "./util.js";

const assignments = await getDataFromJson("../json/portfolio-items.json");

function preparePortfolioItem(templateClone, data) {
  const item = templateClone.querySelector("a");
  item.href = data.url;
  item.innerText = data.label;

  return templateClone;
}

const parentElement = selectElement(".portfolio-items");
const template = await loadTemplate("./partials/portfolio-item-template.html");
assignments.forEach((assignment) => {
  renderWithTemplate(template, parentElement, assignment, preparePortfolioItem);
});
