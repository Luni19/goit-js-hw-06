function countCategoriesAndItems() {
    const categoriesList = document.getElementById('categories');
    const categoriesItems = categoriesList.querySelectorAll('li.item');

    // Кількість категорій (елементів li.item)
    const numCategories = categoriesItems.length;
    console.log(`Кількість категорій: ${numCategories}`);

    // Для кожної категорії виводимо текст заголовку (h2) та кількість елементів (li) в категорії
    categoriesItems.forEach((category) => {
      const categoryName = category.querySelector('h2').textContent;
      const categoryItems = category.querySelectorAll('li').length;
      console.log(`${categoryName}: ${categoryItems} елементів`);
    });
  }

  // Викликаємо функцію для підрахунку та виведення результатів в консоль
  countCategoriesAndItems();
