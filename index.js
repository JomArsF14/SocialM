// SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');


// MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#messages-search');
const notificationCount = messagesNotification.querySelector('.notification-count');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme')

// remove active class from all menu items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
};

menuItems.forEach(item => {
    item.addEventListener('click',  () => {
          changeActiveItem();
          item.classList.add('active');
          if(item.id != 'notifications') {
                document.querySelector('.notifications-popup').
                style.display = 'none';
          } else {
                document.querySelector('.notifications-popup').
                style.display = 'block';
                document.querySelector('#notifications . notification-count').style.display = 'none';
          }
      })
});

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    messages.forEach(chat => {
        let name = chat.querySelectorAll('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            chat.style.display = 'flex';
        } else {
            chat.style.display = 'none';
        }
    });
};

// =================== MESSAGES ===================




if (messagesNotification && notificationCount) {
    messagesNotification.addEventListener('click', () => {
        console.log('messagesNotification clicked');
        console.log('messages:', messages);
        console.log('notificationCount:', notificationCount);

        if (messages) {
            messages.style.boxShadow = '0 0 1rem var(--color-primary)';
        }

        messagesNotification.classList.toggle('active'); // Toggle the 'active' class

        if (messagesNotification.classList.contains('active')) {
            // Button is active: hide the count
            notificationCount.style.display = 'none';
        } else {
            // Button is not active: show the count
            notificationCount.style.display = 'block';
        }

        setTimeout(() => {
            if (messages) {
                messages.style.boxShadow = 'none';
            }
        }, 2000);
    });
}

  // THEME/DISPLAY CUSTOMIZATION

// opens modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
};

// closes modal
const closeThemeModal = (e) => {
    if (e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
};




