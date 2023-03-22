// function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }



async function loadJson(url) {
    try {
        const response = await fetch(url);
        if (response.status == 200) {
            let json = await response.json(); 
            return json;
        }

        throw new Error(response.status);

    } catch (error) {
        console.log((error.message));
    }
}

loadJson('no-such-user.json') 
    .catch(alert); 