const category = require('./category'); 
const data = [
    'Прогнозы В IT',
    'Веб-Разработка',
    'Мобильная Разработка',
    'Фриланс',
    'Алгоритмы',
    'Тестирование IT Систем',
    'Разработка Игр',
    'Дизайн И Юзабилити',
    'Искуственный Интелект',
    'Машинное Обучение'
]

async function writeDataCategory(){
    const length = await category.count();
    console.log(length);
}

module.exports = writeDataCategory