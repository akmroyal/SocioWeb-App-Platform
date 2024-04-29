// Left Side bar to active effect

const menuItem = document.querySelectorAll('.item');

const changeActiveItem = () => {
    menuItem.forEach(item => {
        item.classList.remove('active');
    })
}
menuItem.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if (item.id != 'notfication') {
            document.querySelector('.notification-bar').style.display = 'none';
        } else {
            document.querySelector('.notification-bar').style.display = '';
            document.querySelector('#notfication .notification-count').style.display = 'none';
        }
    })
})


// Message Count removing after read && highligth message box after click

const messageNotification = document.querySelector('.messages-count');
const messageItems = document.querySelector('.message-item');
const messageBox = document.querySelector('.messages');

messageItems.addEventListener('click', () => {
    messageBox.style.boxShadow = '0 0 1rem 2px rgb(48 155 85)';
    messageNotification.style.display = 'none';
    setTimeout(() => {
        messageBox.style.boxShadow = 'none';
    }, 2000);
})

// Message Searching By entering in search bar : Right Side BAr

const msges = document.querySelector('.messages');
const msg = msges.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    msg.forEach(user => {
        let name = user.querySelector('h5').textContent.toLowerCase();
        if (name.indexOf(val) != -1) {
            user.style.display = 'flex';
        } else {
            user.style.display = 'none';
        }
    })
}

messageSearch.addEventListener('keyup', searchMessage);


// Theme Customization : ----------------------
// -----------------------------------

const themeBtnIcon = document.querySelector('#theme-btn');
const themeCustomizeBox = document.querySelector('.theme-blury-effect');

// Open Theme Box
const openThemeBox = () => {
    themeCustomizeBox.style.display = 'grid';
}

// Close Theme Box
const closeThemeBox = (i) => {
    if (i.target.classList.contains('theme-blury-effect')) {
        themeCustomizeBox.style.display = 'none';
    }
}
themeCustomizeBox.addEventListener('click', closeThemeBox);
themeBtnIcon.addEventListener('click', openThemeBox);

// font size customizations 

const fontSizes = document.querySelectorAll('.choose-font span');
var root = document.querySelector(':root');

fontSizes.forEach(size => {
    let fontsize;
    size.addEventListener('click', () => {
    alert("Sorry ! unable to add.");
        if (size.classList.contains('.font-size-1')) {
            fontsize = '8px';
            // root.style.setProperty()
        } else if (size.classList.contains('.font-size-2')) {
            fontsize = '10px';
        } else if (size.classList.contains('.font-size-3')) {
            fontsize = '12px';
        } else if (size.classList.contains('.font-size-4')) {
            fontsize = '14px';
        } else if (size.classList.contains('.font-size-5')) {
            fontsize = '16px';
        }
        // change font size of the root html element
        document.querySelector('html').style.fontSize = fontsize;
    })
})

// change primary color of background theme
const colorPalette = document.querySelectorAll('.color-pickers span');
colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        if (color.classList.contains('color-1')) {
            
        }
    })
})