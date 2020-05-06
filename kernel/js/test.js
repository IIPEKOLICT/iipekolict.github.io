function showItemByLd(itemId,firstClass,secondClass) { // универсальная для показа элементов с определенным id
  var itemById = document.getElementById(itemId); // находим элемент, id которого был в качестве параметра
  itemById.classList.toggle(firstClass);
  itemById.classList.toggle(secondClass);
  // переключение класса (если есть - удаляется, в противном случае добавляется)
  // в разметке обязательно должен быть только один из классов, иначе не заработает
}
