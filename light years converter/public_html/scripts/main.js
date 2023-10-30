
var counter = 0;
function convert() {
  // Получение значений из полей ввода
  var lightYears = parseFloat(document.getElementById("lightYears").value);

  // Проверка, есть ли уже такое значение в таблице
  var table = document.getElementById("resultTable");
  var rows = table.getElementsByTagName("tr");
  
  for (var i = 1; i < rows.length; i++) {
    var existingLightYears = parseFloat(rows[i].cells[1].innerHTML);
    if (existingLightYears === lightYears) {
       alert("Значение уже присутствует в таблице");
      return; 
    }
  }
  // Проверка, было ли введено значение
  if (isNaN(lightYears)) {
    alert("Пожалуйста, введите значение");
    return;
  }
  // Выполнение конвертации
  var kilometers = lightYears * 9.461 * Math.pow(10, 12);
  document.getElementById("kilo").textContent = kilometers;
  counter++;
  // Добавление результатов в таблицу
  var row = table.insertRow(-1);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  cell1.innerHTML = counter;
  cell2.innerHTML = lightYears;
  cell3.innerHTML = kilometers;
}