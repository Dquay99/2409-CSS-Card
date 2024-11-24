const list_user = document.getElementById('list_user');

(async function getdata() {
    const response = await fetch("https://dummyjson.com/users");
    const data = await response.json();

    list_user.innerHTML = data.users.map((user, idx) => {
        return `
                <h1>STT : ${idx + 1}</h1>
                <div class="card" style="width: 18rem;">
                    <img src="${user.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${user.username}</h5>
                        <p class="card-text">${user.userAgent}</p>
                        <p>${user.address.address} - ${user.address.city} - ${user.address.country}</p>
                    </div>
                </div>
          `;
    });
})();