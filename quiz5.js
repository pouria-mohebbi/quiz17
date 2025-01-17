const wrapper = document.querySelector('.cards');
    const data = [
      {
        id: 1,
        title: "ravel Monkey Club #1",
        src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item-9.jpg",
        account: "Ralph Garraway",
        accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
      },
      {
        id: 2,
        title: "ravel Monkey Club #2",
        src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-21.jpg",
        account: "Ralph Garraway",
        accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
      },
      {
        id: 3,
        title: "ravel Monkey Club #3",
        src: "https://themesflat.co/html/axiesv/assets/images/box-item/image-box-10.jpg",
        account: "Ralph Garraway",
        accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
      },
      {
        id: 4,
        title: "ravel Monkey Club #4",
        src: "https://themesflat.co/html/axiesv/assets/images/box-item/card-item8.jpg",
        account: "Ralph Garraway",
        accountImage: "https://themesflat.co/html/axiesv/assets/images/avatar/avt-12.jpg",
      },
    ];

    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';

      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;

      const title = document.createElement('h3');
      title.textContent = item.title;

      const accountImage = document.createElement('img');
      accountImage.src = item.accountImage;
      accountImage.alt = item.account;
      accountImage.style.width = '30px';
      accountImage.style.borderRadius = '50%';
      
      const accountName = document.createElement('p');
      accountName.textContent = item.account;
      
      const button = document.createElement('button');
      button.className = 'cardButton';
      button.textContent = 'Show Title';
      button.addEventListener('click', () => {
        const cardSelected = document.querySelector('.cardSelected');
        cardSelected.textContent = `Selected Card Title: ${item.title}`;
      });

      card.appendChild(img);
      card.appendChild(title);
      card.appendChild(accountImage);
      card.appendChild(accountName);
      card.appendChild(button);

      wrapper.appendChild(card);
    });