function get_year_list(){
    let out = [];
    $.each(events, function(_, event) {
        out.push(event.year);
    });
    return out;
}

function find_event_list(year) {
    let year_object_list = events.filter(event => event.year == year);
    if(year_object_list.length === 0){
        return []
    }
    return year_object_list[0].event_list;
}

function add_card(event, container){
    let card = `<div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${event.img}" alt="${event.img_alt}">
        <div class="card-body">
        <h5 class="card-title">${event.name}</h5>
        <p class="card-text">${event.description}</p>
        <a href="${event.path}" class="btn btn-primary">Enter ${event.name}</a>
        </div>
    </div>`;

    container.append(card);
}

function update_list(year, event_container) {
    let event_list = find_event_list(year);
    event_container.empty();
    $.each(event_list, function(_, event) {
        add_card(event, event_container);
    });
}

function add_years_options(years_list, year_selector, event_container){
    $.each(years_list, function(_, year) {
        let option = `<option value="${year}">${year}</option>`;
        year_selector.append(option);
    });
    year_selector.on('change', function (_) {
        var valueSelected = this.value;
        update_list(valueSelected, event_container);
    });
}

$(function() {
    let event_container = $("#content");
    let year_selector = $("#available_years");
    year_list = get_year_list();
    add_years_options(year_list, year_selector, event_container);
});