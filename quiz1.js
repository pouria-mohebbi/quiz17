function todoList(todos) {
    const content = document.getElementById('content');
    
    if (!content) {
      throw new Error('No content element found');
    }

    const ul = document.createElement('ul');
    content.appendChild(ul);
    
    todos.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item.todo;
      
      li.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
      
      ul.appendChild(li);
    });
  }

  const todos = [
    { todo: 'wash the dishes' },
    { todo: 'walk the dog' },
    { todo: 'learn javascript' },
    { todo: 'go shopping' }
  ];

  todoList(todos);