const selectCars = (cars) => {
  const select = document.querySelector("select");
  const model = document.querySelector(".model ");
  const price = document.querySelector(".price ");

  for (let car of cars) {
    // создание элементов
    const newOption = document.createElement("option");
    newOption.textContent = car["brand"];
    select.append(newOption);
  }

  //вывод элементов при изменении
  select.addEventListener("change", () => {
    for (let car of cars) {
      if (select.options[select.selectedIndex].textContent == car["brand"]) {
        model.textContent = `тачка ${car["brand"]} ${car["model"]}`;
        price.textContent = ` стоимость ${car["price"]}`;
      }
    }
  });
};

//получение элементов из db.json
const getData = async () => {
  await fetch("db.json", {})
    .then((response) => response.json())
    .then((data) => {
      let cars = [];
      cars = data["cars"];
      selectCars(cars);
    })
    .catch((error) => {
      console.log("ошибка при получении");
    });
};
getData();
