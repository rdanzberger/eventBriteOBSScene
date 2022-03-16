async function getEventDeets() {
    let url = 'https://www.eventbriteapi.com/v3/events/275523306627/?token=[insert oAuth Token]';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

async function renderUsers() {
    let deets = await getEventDeets();
    let html = '';
    let htmlSegment = `<div class="deets">
                            <img src="${deets.logo.url}" >
                            <h2>Description of Event: ${deets.description.text} </h2>
                            <p>Summary of event: ${deets.summary}</p>
                            <p>Link to sign up: ${deets.url}</p>
                           </div>`;
    html += htmlSegment;

    // users.forEach(user => {
    //     let htmlSegment = `<div class="user">
    //                         <h2>'Name of Char: ${user.description}' </h2>
    //                        </div>`;
    //
    //     html += htmlSegment;
    // });

    let container = document.querySelector('.container');
    container.innerHTML = html;
}

renderUsers();
