function getUserInfo(username) {
    return fetch(`https://api.github.com/users/${username}`)
        .then((raw) => raw.json())
}
function getUserRepos(username) {
    return fetch(`https://api.github.com/users/${username}/repos`)
        .then((raw) => raw.json())
}
// getUserRepos(username)
// .then(function(data){
//     console.log(data)
// })

let btn = document.querySelector("button")
let vis = document.querySelector(".visibility")
let input = document.querySelector("input")
let resultContainer = document.getElementById("resultContainer")

btn.addEventListener("click", function (event) {
    event.preventDefault()

    let username = input.value.trim(); // input se username le liya

    if (username === "") {
        // para.innerHTML = "Please enter a GitHub username.";
        return;
    }

    getUserRepos(username)
.then(function(data){
    console.log(data)
})

    getUserInfo(username)
        .then(function (data) {
            if (data.message === "Not Found") {
                resultContainer.innerHTML = `<div class="text-center text-red-500 font-bold">User Not Found!</div>`

            } else {
                resultContainer.classList.remove("animate-pulse")

                // resultContainer.innerHTML = `
                //     <div class="flex flex-col gap-6 p-4">
                //     <div class="flex w-full flex-col gap-4 items-center">
                //         <div class="flex gap-4 flex-col items-center">
                //         <img src="${data.avatar_url}" alt="Avatar" class="rounded-full h-32 w-32 object-cover border border-gray-300"/>
                //         <div class="flex flex-col items-center justify-center">
                //             <h2 class="text-lg font-bold text-[#111518]">${data.name || data.login}</h2>
                //             <p class="text-gray-600 text-sm">${data.login}</p>
                //             <p class="text-gray-500 text-sm">${data.location || "Location not available"}</p>
                //         </div>
                //         </div>
                //     </div>

                //     <div class="flex flex-wrap gap-3 px-4 py-3">
                //         <div class="flex min-w-[111px] flex-1 flex-col gap-1 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                //         <p class="text-xl font-bold text-[#111518]">${data.public_repos}</p>
                //         <p class="text-sm text-gray-500">Repositories</p>
                //         </div>
                //         <div class="flex min-w-[111px] flex-1 flex-col gap-1 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                //         <p class="text-xl font-bold text-[#111518]">${data.followers}</p>
                //         <p class="text-sm text-gray-500">Followers</p>
                //         </div>
                //         <div class="flex min-w-[111px] flex-1 flex-col gap-1 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                //         <p class="text-xl font-bold text-[#111518]">${data.following}</p>
                //         <p class="text-sm text-gray-500">Following</p>
                //         </div>
                //     </div>

                //     <div class="px-4">
                //         <p class="text-[#111518] text-sm">${data.bio || "No bio available."}</p>
                //     </div>
                //     </div>
                // `;

                resultContainer.innerHTML = `
                    <div id="resultContainer" class="flex flex-col gap-6 p-4">
              <!-- Profile Picture & Info -->
              <div class="flex w-full flex-col gap-4 items-center">
                <div class="flex gap-4 flex-col items-center">
                  <img src = "${data.avatar_url}" alt="Avatar" class = "rounded-full h-32 w-32 object-cover border border-gray-300 "/> 
                  <div class="flex flex-col items-center justify-center">
                    <h2 class="text-lg font-bold text-[#111518]">${data.name || data.login}</h2>
                    <p class="text-gray-600 text-sm">${data.login}</p>
                    <p class="text-gray-500 text-sm">${data.location || "Location not available"}</p>
                  </div>
                </div>
              </div>

              <!-- Stats Cards -->
              <div class="flex flex-wrap gap-3 px-4 py-3 visibility">
                <div class="flex min-w-[111px] flex-1 flex-col gap-2 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                  <p class="text-xl font-bold text-[#111518]">${data.public_repos}</p>
                  <p class="text-sm text-gray-500">Repositories</p>
                </div>
                <div class="flex min-w-[111px] flex-1 flex-col gap-2 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                  <p class="text-xl font-bold text-[#111518]">${data.followers}</p>
                  <p class="text-sm text-gray-500">Followers</p>
                </div>
                <div class="flex min-w-[111px] flex-1 flex-col gap-2 rounded-lg border border-[#dbe1e6] p-3 items-center text-center">
                  <p class="text-xl font-bold text-[#111518]">${data.following}</p>
                  <p class="text-sm text-gray-500">Following</p>
                </div>
              </div>

              <!-- Bio Paragraph -->
              <div class="px-4">
                <div class="h-6 w-20 bg-gray-200 rounded mb-2 font-bold">Bio</div>
                <p class="text-[#111518] text-sm">${data.bio || "No bio available..."}</p>
              </div>
            </div>
                `
            }
            console.log(data);

        })
})


