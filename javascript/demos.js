const username = 'sagepoweron';
const demosList = document.getElementById("demos");

function getDemos()
{
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        //console.log('Repositories:', data);

        for (let index = 0; index < data.length; index++)
        {
            const element = data[index];

            if (element.description !== "Demo") continue;

            const container = document.createElement("div");
            container.classList.add("card");
            demosList.append(container);
            
            const name = document.createElement("h3");
            name.innerText = `${capitalizeFirstLetter(element.name)}` ;
            container.append(name);

            const link = document.createElement("a");
            link.innerText = element.html_url;
            link.href = element.html_url;
            container.append(link);
        }
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);
    });
}

getDemos();

function capitalizeFirstLetter(str)
{
  return str.charAt(0).toUpperCase() + str.slice(1);
}