const username = 'sagepoweron';
const reposList = document.getElementById("repos");

function getRepos()
{
    fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => {
        if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log('Repositories:', data);

        for (let index = 0; index < data.length; index++)
        {
            const element = data[index];
            const container = document.createElement("div");
            container.classList.add("card");
            reposList.append(container);
            
            const name = document.createElement("h3");
            name.innerText = `${element.name}` ;
            container.append(name);

            const link = document.createElement("a");
            link.innerText = element.name;
            link.href = element.url;
            container.append(link);

            if (element.description !== null)
            {
                const description = document.createElement("p");
                description.innerText = element.description;
                container.append(description);
            }
        }
    })
    .catch(error => {
        console.error('Error fetching repositories:', error);
    });
}

getRepos();