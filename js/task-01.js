function countCategoriesAndItems() {
    const categoriesList = document.getElementById('categories');
    const categoriesItems = categoriesList.querySelectorAll('li.item');

   
    const numCategories = categoriesItems.length;
    console.log(`Кількість категорій: ${numCategories}`);

   
    categoriesItems.forEach((category) => {
      const categoryName = category.querySelector('h2').textContent;
      const categoryItems = category.querySelectorAll('li').length;
      console.log(`${categoryName}: ${categoryItems} елементів`);
    });
  }

  countCategoriesAndItems();
