    
    $(document).on('ready', function() {
        $.ajax({
            url: '/companies',
            type: 'GET',
            success: function(companies) {
                for (var i = 0; i < companies.length; i++) {
                    $('#compList').append('<li class="companyName" data-company-id='+companies[i]._id+'>'+companies[i].name+companies[i].booth+'</li>');
                }
            }
        });
    });