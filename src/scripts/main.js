'use strict';

const list = document.querySelector('ul');
const items = Array.from(list.children);

const parseSalary = (salaryString) => {
  return Number(salaryString.replace(/[$,]/g, ''));
};

const sortList = (liArray, ulLink) => {
  liArray.sort((firstElement, secondElement) => {
    const firstElementSalary = parseSalary(firstElement.dataset.salary);

    const secondElementSalary = parseSalary(secondElement.dataset.salary);

    return secondElementSalary - firstElementSalary;
  });

  ulLink.innerHTML = '';
  liArray.forEach((item) => ulLink.append(item));
};

const getEmployees = (liArray) => {
  return liArray.map((li) => ({
    name: li.textContent.trim(),
    position: li.dataset.position,
    salary: parseSalary(li.dataset.salary),
    age: Number(li.dataset.age),
  }));
};

sortList(items, list);
getEmployees(items);
