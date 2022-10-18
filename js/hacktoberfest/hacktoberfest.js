function add_card(event, container){
    let card = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${event.img}" alt="${event.img_alt}">
        <div class="card-body">
        <h5 class="card-title">Hacktoberfest ${event.year}</h5>
        <p class="card-text">${event.description}</p>
        <a href="${event.path}" class="btn btn-primary">Enter Hacktoberfest ${event.year}</a>
        </div>
    </div>`;

    container.append(card);
}

function add_events(event_container) {
    $.each(events, function(_, event){
        add_card(event, event_container);
    });
}

$(function() {
    let event_container = $("#content");
    add_events(event_container);
});