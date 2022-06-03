import {
//   getDataFromJson,
  loadTemplate,
  renderWithTemplate,
  selectElement,
} from "./util.js";

/**
 * to-do: check if github allows file reading
 */
//const assignments = await getDataFromJson("../json/portfolio-items.json");

const assignments = [
    {
    "label": "Week01 - L01 Notes",
    "url": "week01/l01.html"
    },
    {
    "label": "Week01 - L02 Notes",
    "url": "week01/l02.html"
    },
    {
    "label": "Week02 - L03 Notes",
    "url": "week02/l03.html"
    },
    {
    "label": "Week02 - L04 Notes",
    "url": "week02/l04.html"
    },
    {
    "label": "Week03 - L05 Notes",
    "url": "week03/l05.html"
    },
    {
    "label": "Week03 - L06 Notes",
    "url": "week03/l06.html"
    },
    {
    "label": "Week04 - L07 Notes",
    "url": "week04/l07.html"
    },
    {
    "label": "Week04 - L08 Notes",
    "url": "week04/l08.html"
    },
    {
    "label": "SleepOutside: Github",
    "url": "week04/l08.html"
    },
    {
    "label": "SleepOutside: CORS",
    "url": "https://cors-anywhere.herokuapp.com/corsdemo"
    },
    {
    "label": "SleepOutside: Github",
    "url": "https://jmmonjeremy.github.io/L02_Team_Activity_1/build/"
    },
    {
    "label": "SleepOutside: Trello",
    "url": "https://trello.com/b/s2W4DiIa/sleapoutside-wdd330-team5"
    },
    {
    "label": "SleepOutside",
    "url": "https://jmmonjeremy.github.io/L02_Team_Activity_1/build/"
    },
    {
    "label": "Library Project: Github",
    "url": "https://wmsmckay.github.io/WDD330-groupProject/"
    },
    {
    "label": "Library Project: Trello",
    "url": "https://trello.com/b/Es8dcnYd/wdd330-groupproject"
    } ,
    {
    "label": "Library Project",
    "url": "https://wmsmckay.github.io/WDD330-groupProject/build/"
    }     
];
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
