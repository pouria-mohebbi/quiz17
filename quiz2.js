function listOfColours(colours) {
    const content = document.getElementById('content');
    
    if (!content) {
      throw new Error('No content element found');
    }

    const select = document.createElement('select');
    const p = document.createElement('p');
    
    content.appendChild(select);
    content.appendChild(p);
    
    colours.forEach(color => {
      const option = document.createElement('option');
      option.value = color;
      option.textContent = color;
      select.appendChild(option);
    });

    select.addEventListener('change', () => {
      p.textContent = `You have selected: ${select.value}`;
      p.style.color = select.value;
    });
  }

  const colours = ['red', 'blue', 'green', 'yellow', 'pink', 'brown'];

  listOfColours(colours);