let nameInput = document.getElementById(`name-input`);

let nameOutput = document.getElementById(`name-output`);


nameInput.addEventListener(`input`,() => {
    const inputValue = nameInput.value;

    if (inputValue === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = inputValue;
      }
    });