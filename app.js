const menuToggle = document.querySelector('.tooltip')
      const showcase = document.querySelector('.showcase')

      menuToggle.addEventListener('click', () => {
        menuToggle.classList.toggle('active'),
        showcase.classList.toggle('active')
      })

       //toggle theme
    const themeBtn = document.querySelector('.theme-btn');
    themeBtn.addEventListener('click', () =>{
        let element = document.body;
        element.classList.toggle('dark-mode')
    })

      