function build_project_card(name, image, alt){
    var card = '<div class="col-md-6 mt-5">'+
                    '<div class="card project">'+
                        '<img class="card-img-top" src="' + image + '" alt="' + alt + '">'+
                        '<div class="card-body">'+
                            '<h4 class="card-text">' + name + '</h4>'+
                        '</div>'+
                    '</div>'+
                '</div>';
}