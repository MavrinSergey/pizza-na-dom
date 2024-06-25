export const usePizzaStore = defineStore('pizzaStore', () => {
  const pizzaCards: Array<IPizza> = ref([
    {
      id: '1',
      name: 'Манго',
      description:
        'Томатный соус, моцарелла, творожный сыр, пюре манго, руккола.',
      image:
        'https://static.tildacdn.com/stor3137-3066-4533-b638-666639636363/11848312.jpg',
      params: {
        small: {
          price: 485,
          sizeInSm: 25,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
        medium: {
          price: 715,
          sizeInSm: 30,
          toppings: [
            {
              name: 'моцарелла',
              price: 20,
            },
            {
              name: 'пепперони',
              price: 20,
            },
            {
              name: 'черри',
              price: 20,
            },
            {
              name: 'бекон',
              price: 20,
            },
            {
              name: 'ветчина',
              price: 20,
            },
            {
              name: 'шампиньены',
              price: 20,
            },
            {
              name: 'халопеньо',
              price: 20,
            },
            {
              name: 'соленые огурчики',
              price: 20,
            },
            {
              name: 'дор блю',
              price: 20,
            },
            {
              name: 'креветки',
              price: 20,
            },
            {
              name: 'ананасы',
              price: 20,
            },
          ],
        },
        large: {
          price: 895,
          sizeInSm: 35,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
      },
    },
    {
      id: '2',
      name: 'Терияки пицца',
      description:
        'Сливочный соус, моцарелла, нежное куриное филе, свежие шампиньоны, прованские травы, кунжут и соус Терияки',
      image:
        'https://static.tildacdn.com/stor3137-3066-4533-b638-666639636363/11848312.jpg',
      params: {
        large: {
          price: 895,
          sizeInSm: 35,
          toppings: [
            {
              name: 'моцарелла',
              price: 30,
            },
            {
              name: 'пепперони',
              price: 30,
            },
            {
              name: 'черри',
              price: 30,
            },
            {
              name: 'бекон',
              price: 30,
            },
            {
              name: 'ветчина',
              price: 30,
            },
            {
              name: 'шампиньены',
              price: 30,
            },
            {
              name: 'халопеньо',
              price: 30,
            },
            {
              name: 'соленые огурчики',
              price: 30,
            },
            {
              name: 'дор блю',
              price: 30,
            },
            {
              name: 'креветки',
              price: 30,
            },
            {
              name: 'ананасы',
              price: 30,
            },
          ],
        },
        medium: {
          price: 715,
          sizeInSm: 30,
          toppings: [
            {
              name: 'моцарелла',
              price: 20,
            },
            {
              name: 'пепперони',
              price: 20,
            },
            {
              name: 'черри',
              price: 20,
            },
            {
              name: 'бекон',
              price: 20,
            },
            {
              name: 'ветчина',
              price: 20,
            },
            {
              name: 'шампиньены',
              price: 20,
            },
            {
              name: 'халопеньо',
              price: 20,
            },
            {
              name: 'соленые огурчики',
              price: 20,
            },
            {
              name: 'дор блю',
              price: 20,
            },
            {
              name: 'креветки',
              price: 20,
            },
            {
              name: 'ананасы',
              price: 20,
            },
          ],
        },
        small: {
          price: 485,
          sizeInSm: 25,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
      },
    },
    {
      id: '3',
      name: 'Сальса',
      description:
        'Острый соус сальса, моцарелла, чеддер, нежное куриное филе, прованские травы и кукурузные чипсы начос',
      image:
        'https://optim.tildacdn.com/stor3365-3731-4962-b936-383262666637/-/format/webp/74219337.jpg',
      params: {
        large: {
          price: 895,
          sizeInSm: 35,
          toppings: [
            {
              name: 'моцарелла',
              price: 30,
            },
            {
              name: 'пепперони',
              price: 30,
            },
            {
              name: 'черри',
              price: 30,
            },
            {
              name: 'бекон',
              price: 30,
            },
            {
              name: 'ветчина',
              price: 30,
            },
            {
              name: 'шампиньены',
              price: 30,
            },
            {
              name: 'халопеньо',
              price: 30,
            },
            {
              name: 'соленые огурчики',
              price: 30,
            },
            {
              name: 'дор блю',
              price: 30,
            },
            {
              name: 'креветки',
              price: 30,
            },
            {
              name: 'ананасы',
              price: 30,
            },
          ],
        },
        medium: {
          price: 715,
          sizeInSm: 30,
          toppings: [
            {
              name: 'моцарелла',
              price: 20,
            },
            {
              name: 'пепперони',
              price: 20,
            },
            {
              name: 'черри',
              price: 20,
            },
            {
              name: 'бекон',
              price: 20,
            },
            {
              name: 'ветчина',
              price: 20,
            },
            {
              name: 'шампиньены',
              price: 20,
            },
            {
              name: 'халопеньо',
              price: 20,
            },
            {
              name: 'соленые огурчики',
              price: 20,
            },
            {
              name: 'дор блю',
              price: 20,
            },
            {
              name: 'креветки',
              price: 20,
            },
            {
              name: 'ананасы',
              price: 20,
            },
          ],
        },
        small: {
          price: 485,
          sizeInSm: 25,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
      },
    },
    {
      id: '4',
      name: 'XXXX-самая острая пицца в городе',
      description:
        'Сливочный соус, моцарелла, соус на основе острых перцев Каролина Рипер, Тринидадский Скорпион и Призрак, начос, курица и груша',
      image:
        'https://optim.tildacdn.com/stor3137-3066-4533-b638-666639636363/-/resize/312x/-/format/webp/11848312.jpg',
      params: {
        large: {
          price: 895,
          sizeInSm: 35,
          toppings: [
            {
              name: 'моцарелла',
              price: 30,
            },
            {
              name: 'пепперони',
              price: 30,
            },
            {
              name: 'черри',
              price: 30,
            },
            {
              name: 'бекон',
              price: 30,
            },
            {
              name: 'ветчина',
              price: 30,
            },
            {
              name: 'шампиньены',
              price: 30,
            },
            {
              name: 'халопеньо',
              price: 30,
            },
            {
              name: 'соленые огурчики',
              price: 30,
            },
            {
              name: 'дор блю',
              price: 30,
            },
            {
              name: 'креветки',
              price: 30,
            },
            {
              name: 'ананасы',
              price: 30,
            },
          ],
        },
        medium: {
          price: 715,
          sizeInSm: 30,
          toppings: [
            {
              name: 'моцарелла',
              price: 20,
            },
            {
              name: 'пепперони',
              price: 20,
            },
            {
              name: 'черри',
              price: 20,
            },
            {
              name: 'бекон',
              price: 20,
            },
            {
              name: 'ветчина',
              price: 20,
            },
            {
              name: 'шампиньены',
              price: 20,
            },
            {
              name: 'халопеньо',
              price: 20,
            },
            {
              name: 'соленые огурчики',
              price: 20,
            },
            {
              name: 'дор блю',
              price: 20,
            },
            {
              name: 'креветки',
              price: 20,
            },
            {
              name: 'ананасы',
              price: 20,
            },
          ],
        },
        small: {
          price: 485,
          sizeInSm: 25,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
      },
    },
    {
      id: '5',
      name: 'Макс Пейн',
      description:
        'Томатный соус, моцарелла, репчатый лук, пепперони, красный халапеньо и бургер соус.',
      image:
        'https://optim.tildacdn.com/tild3166-6665-4265-b338-336133376130/-/format/webp/photo.jpg',
      params: {
        large: {
          price: 895,
          sizeInSm: 35,
          toppings: [
            {
              name: 'моцарелла',
              price: 30,
            },
            {
              name: 'пепперони',
              price: 30,
            },
            {
              name: 'черри',
              price: 30,
            },
            {
              name: 'бекон',
              price: 30,
            },
            {
              name: 'ветчина',
              price: 30,
            },
            {
              name: 'шампиньены',
              price: 30,
            },
            {
              name: 'халопеньо',
              price: 30,
            },
            {
              name: 'соленые огурчики',
              price: 30,
            },
            {
              name: 'дор блю',
              price: 30,
            },
            {
              name: 'креветки',
              price: 30,
            },
            {
              name: 'ананасы',
              price: 30,
            },
          ],
        },
        medium: {
          price: 715,
          sizeInSm: 30,
          toppings: [
            {
              name: 'моцарелла',
              price: 20,
            },
            {
              name: 'пепперони',
              price: 20,
            },
            {
              name: 'черри',
              price: 20,
            },
            {
              name: 'бекон',
              price: 20,
            },
            {
              name: 'ветчина',
              price: 20,
            },
            {
              name: 'шампиньены',
              price: 20,
            },
            {
              name: 'халопеньо',
              price: 20,
            },
            {
              name: 'соленые огурчики',
              price: 20,
            },
            {
              name: 'дор блю',
              price: 20,
            },
            {
              name: 'креветки',
              price: 20,
            },
            {
              name: 'ананасы',
              price: 20,
            },
          ],
        },
        small: {
          price: 485,
          sizeInSm: 25,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
      },
    },
    {
      id: '6',
      name: 'Пепперони',
      description: 'Томатный соус, моцарелла, пепперони.',
      image:
        'https://optim.tildacdn.com/tild3561-6630-4162-b362-613865343931/-/format/webp/_.jpg',
      params: {
        large: {
          price: 895,
          sizeInSm: 35,
          toppings: [
            {
              name: 'моцарелла',
              price: 30,
            },
            {
              name: 'пепперони',
              price: 30,
            },
            {
              name: 'черри',
              price: 30,
            },
            {
              name: 'бекон',
              price: 30,
            },
            {
              name: 'ветчина',
              price: 30,
            },
            {
              name: 'шампиньены',
              price: 30,
            },
            {
              name: 'халопеньо',
              price: 30,
            },
            {
              name: 'соленые огурчики',
              price: 30,
            },
            {
              name: 'дор блю',
              price: 30,
            },
            {
              name: 'креветки',
              price: 30,
            },
            {
              name: 'ананасы',
              price: 30,
            },
          ],
        },
        medium: {
          price: 715,
          sizeInSm: 30,
          toppings: [
            {
              name: 'моцарелла',
              price: 20,
            },
            {
              name: 'пепперони',
              price: 20,
            },
            {
              name: 'черри',
              price: 20,
            },
            {
              name: 'бекон',
              price: 20,
            },
            {
              name: 'ветчина',
              price: 20,
            },
            {
              name: 'шампиньены',
              price: 20,
            },
            {
              name: 'халопеньо',
              price: 20,
            },
            {
              name: 'соленые огурчики',
              price: 20,
            },
            {
              name: 'дор блю',
              price: 20,
            },
            {
              name: 'креветки',
              price: 20,
            },
            {
              name: 'ананасы',
              price: 20,
            },
          ],
        },
        small: {
          price: 485,
          sizeInSm: 25,
          toppings: [
            {
              name: 'моцарелла',
              price: 10,
            },
            {
              name: 'пепперони',
              price: 10,
            },
            {
              name: 'черри',
              price: 10,
            },
            {
              name: 'бекон',
              price: 10,
            },
            {
              name: 'ветчина',
              price: 10,
            },
            {
              name: 'шампиньены',
              price: 10,
            },
            {
              name: 'халопеньо',
              price: 10,
            },
            {
              name: 'соленые огурчики',
              price: 10,
            },
            {
              name: 'дор блю',
              price: 10,
            },
            {
              name: 'креветки',
              price: 10,
            },
            {
              name: 'ананасы',
              price: 10,
            },
          ],
        },
      },
    },
  ]);

  const getPizzaById = (id: String) => {
    return pizzaCards.value.find((item) => item.id === id);
  };
  return { pizzaCards, getPizzaById };
});
