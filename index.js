const tabelas = [

    {
        id:1,
        provincia:'Luanda',
        provincia_ida:'Benguela',
    },
    {
        id:2,
        provincia:'Luanda',
        provincia_ida:'Lubango',
    },
    {
        id:3,
        provincia:'Luanda',
        provincia_ida:'Moxico',
    },
    {
        id:4,
        provincia:'Luanda',
        provincia_ida:'Saurimo',
    },
    {
        id:5,
        provincia:'Luanda',
        provincia_ida:'Bie'
    },
];


const lista = document.querySelector(".lista");
const inputtext = document.querySelector("input[type='text']");
const inputdate= document.querySelector("input[type='date']");
let items = [];

inputtext.oninput =()=> {
  lista.innerHTML = "";

  items
    .filter((item) =>
      item.toLowerCase().includes(inputtext.value.toLowerCase())
    )
    .forEach((item) => addHTML(item));
};

function addHTML(item) {
  const div = document.createElement("div");
  div.innerHTML = item;
  lista.append(div);
}

fetch("reserva.html")
  .then((data) => data.json())
  .then((users) => {
    users.forEach((user) => {
      addHTML(user.origem);
      items.push(user.destino);
    });
  });