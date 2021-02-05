// Функция, возвращающая случайное число из переданного диапазона включительно min ... max

function randomInteger(min, max) {
  if ((min < 0) || (max < 0)){
    return new Error('Диапазон может быть больше или равен нулю')
  }else if (min >= max){
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  }else{
    let rand = Math.floor(Math.random() * (max - min + 1)) + min;
    return Math.round(rand);
  }
}
alert(randomInteger(1, 6));

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно

function randomDecimal(min, max, flag) {
  if ((min < 0) || (max < 0)){
    return new Error('Диапазон может быть больше или равен нулю');
  }else if (flag < 0){
    return new Error('Колличесво чисел после запятой может быть больше или равен нулю');
  }else if (min >= max){
    return new Error('Начальное значение диапазона не должно быть больше или равным конечному');
  }else{
    let rand = Math.random() * (max - min) + min;
    return rand.toFixed(flag);
  }
}
alert(randomDecimal(1, 9, 2));


//
