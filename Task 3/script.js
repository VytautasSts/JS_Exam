/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Informacija atvaizduojama <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Sukurta kortelė, kurioje yra pateikiama vartotojo informacija, turi 
būti stilizuota su CSS ir būti responsive;
const ENDPOINT = 'https://api.github.com/users';
-------------------------------------------------------------------------- */
document.getElementById("btn").addEventListener("click", fetchUsers);
populated = 0;
async function fetchUsers() {
    document.getElementById("message").innerText ="Loading...";
    try {
      const response = await fetch('https://api.github.com/users');
      if (response.ok) {
        const data = await response.json();
        changeView();
        for(let user in data){
            createUserCard(data[user]);
        }
      }
    } catch(error) {
      console.error(error);
    }
  };
  
  function createUserCard (user){  

    const img = document.createElement('img');
    img.src = user.avatar_url;
    img.alt = `${user.login} profile picture`;

    const login = document.createElement('h4');
    login.innerText = user.login; 

    const card = document.createElement('div');
    card.append(login, img);

    document.getElementById("output").append(card);
  }

  function changeView(){
    document.getElementById("message").style.visibility ="collapse";
    document.getElementById("output").style.textAlign = "center";
  }
