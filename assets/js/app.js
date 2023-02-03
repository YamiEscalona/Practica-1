const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector('.name');//Le faltaba un .
const $b = document.querySelector('.blog');///Se le cambio # por .
const $l = document.querySelector('.location');

//Le faltaba la palabra async
async function displayUser(username) {
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  // Faltaba  data = await response.json(); para usar la const response
  data = await response.json(); 
  console.log(data);
  // Se cambio estas comillas ('') por estas (``) en las lineas 15,16 y 17
  $n.textContent = `${data.name}`;
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);