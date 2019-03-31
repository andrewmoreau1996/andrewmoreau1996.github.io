function build_project_card(name, image, alt, id){
    //here the id will be the index in the projects array     
    var card = '<div class="col-md-6 mt-5">'+
                    '<div class="card project" id="' + id + '">'+
                        '<img class="card-img-top" src="' + image + '" alt="' + alt + '">'+
                        '<div class="card-body">'+
                            '<h4 class="card-text">' + name + '</h4>'+
                        '</div>'+
                    '</div>'+
                '</div>';
    return card;
}