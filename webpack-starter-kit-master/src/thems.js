
  const body = document.querySelector('body');
  let input = document.querySelector('input[type="checkbox"]');
  
const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

  const theme = body.classList.add(Theme.LIGHT);

  if(localStorage.getItem('theme')) {
    body.classList.value = localStorage.getItem('theme');
} 

if(body.classList.value === Theme.DARK) {
  input.setAttribute('checked', 'checked')
}


  input.addEventListener('change', (element) =>{
    if (element.target && body.classList[0] === Theme.LIGHT) {
      body.classList.remove(Theme.LIGHT);
      body.classList.add(Theme.DARK);
  } else {
    body.classList.remove(Theme.DARK);
    body.classList.add(Theme.LIGHT);
  }
  
  localStorage.setItem('theme', body.classList);
  });

  