const server = 'https://jsonplaceholder.typicode.com/posts';

const sendData = (data, cb, falseCb) => {
  const request = new XMLHttpRequest();
  request.open('POST', server);

  request.addEventListener('readystatechange', () => {
    if (request.readyState !== 4) return;
    if (request.status === 200 || request.status === 201) {
      const response = JSON.parse(request.responseText);
      cb(response.id);
    } else {
        falseCb(request.status)
        throw new Error(request.status)
    }
  });

  request.send(data)
};

const formElems = document.querySelectorAll('.form');

const formHandler = (form) => {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = {};
    
    for (const {name, value} of form.elements) {
      if (name) {
        data[name] = value
      }
    }

    const smallElem = document.createElement('small');

    sendData(JSON.stringify(data),
    (id) => {
      smallElem.innerHTML = 'Ваша заявка №' + id +
        '!<br> В ближайщее время с вами свяжутся!';
        smallElem.style.color = 'green';
        form.append(smallElem);
    },
    (err) => {
      smallElem.textContent = 'К сожалению, технические неполадки, попробуйте отправить заявку позже';
      smallElem.style.color = 'red';
      form.append(smallElem);
    });

    form.reset();
  })
};

formElems.forEach(formHandler);

