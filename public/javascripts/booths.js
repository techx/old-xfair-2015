$(document).ready(function(){

    $.ajax({
        url: '/companies',
        type: 'GET',
        async: false,
        success: function(companies) {
            var boothLabel = function(i){
                for (var j = 0; j < companies.length; j++) {
                    if (companies[j].booth === i){
                        return companies[j].name
                    }
                }
                return i;
            }

            // Create a lot of svg booths
            var boothNumber = 159;
            var boothHeight = 40;
            var boothWidth = 40; 

            var svgContainer = d3.select(".layout").append("svg").attr("width", 820).attr("height", 720);

            svgContainer.append("text").text("Entrance").attr("x", 45).attr("y", 645);
            svgContainer.append("text").text("Exit").attr("x", 750).attr("y", 645);

            for (var i=1; i<=12; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 30)
                                        .attr("y", 600-boothHeight*i)
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 45)
                                        .attr("y", 625-boothHeight*i)
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=13; i<=22; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 110)
                                        .attr("y", 100+boothHeight*(i-13))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 125)
                                        .attr("y", 125+boothHeight*(i-13))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=23; i<=32; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 150)
                                        .attr("y", 460-boothHeight*(i-23))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 165)
                                        .attr("y", 485-boothHeight*(i-23))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=33; i<=42; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 230)
                                        .attr("y", 100+boothHeight*(i-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 245)
                                        .attr("y", 125+boothHeight*(i-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }



            for (var i=47; i<=56; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 270)
                                        .attr("y", 460-boothHeight*(i-47))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 285)
                                        .attr("y", 485-boothHeight*(i-47))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=57; i<=69; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 350)
                                        .attr("y", 100+boothHeight*(i-57))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 365)
                                        .attr("y", 125+boothHeight*(i-57))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=70; i<=82; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 450)
                                        .attr("y", 580-boothHeight*(i-70))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 465)
                                        .attr("y", 605-boothHeight*(i-70))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=83; i<=95; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 530)
                                        .attr("y", 100+boothHeight*(i-83))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 545)
                                        .attr("y", 125+boothHeight*(i-83))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=96; i<=108; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 570)
                                        .attr("y", 580-boothHeight*(i-96))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 580)
                                        .attr("y", 605-boothHeight*(i-96))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i=109; i<=121; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 640)
                                        .attr("y", 100+boothHeight*(i-109))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 650)
                                        .attr("y", 125+boothHeight*(i-109))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }


            for (var i=122; i<=134; i++) {
                var circle = svgContainer.append("rect")
                                        .attr("x", 680)
                                        .attr("y", 580-boothHeight*(i-122))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 690)
                                        .attr("y", 605-boothHeight*(i-122))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i = 135; i <= 145; i++) {
                var offset = 120;

                if (i > 141) {
                    offset = 180;
                }
                var circle = svgContainer.append("rect")
                                        .attr("x", 760)
                                        .attr("y", offset+boothHeight*(i-135))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i).attr("x", 770)
                                        .attr("y", offset+25+boothHeight*(i-135))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            for (var i = 146; i <= 159; i++) {
                var offset = 700;

                if (i > 153) {
                    offset = 620;
                }
                var circle = svgContainer.append("rect")
                                        .attr("x", offset-boothWidth*(i-146))
                                        .attr("y", 660)
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", i);
                var label = svgContainer.append("text").text(i)
                                        .attr("x", offset+10-boothWidth*(i-146))
                                        .attr("y", 685)
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
            }

            var circle = svgContainer.append("rect")
                                        .attr("x", 230)
                                        .attr("y", 140+boothHeight*(43-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", 43);
            var label = svgContainer.append("text").text(43).attr("x", 245)
                                        .attr("y", 165+boothHeight*(43-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)


            var circle = svgContainer.append("rect")
                                        .attr("x", 230)
                                        .attr("y", 140+boothHeight*(44-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", 44);
            var label = svgContainer.append("text").text(44).attr("x", 245)
                                        .attr("y", 165+boothHeight*(44-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)

            var circle = svgContainer.append("rect")
                                        .attr("x", 270)
                                        .attr("y", 140+boothHeight*(44-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", 45);
            var label = svgContainer.append("text").text(45).attr("x", 285)
                                        .attr("y", 165+boothHeight*(44-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)

            var circle = svgContainer.append("rect")
                                        .attr("x", 270)
                                        .attr("y", 100+boothHeight*(44-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)
                                        .attr("data-booth", 46);
            var label = svgContainer.append("text").text(46).attr("x", 285)
                                        .attr("y", 125+boothHeight*(44-33))
                                        .attr("height", boothHeight)
                                        .attr("width",boothWidth)


            $(document).on('hover', '.companyName', function() {
                var companyId = $(this).data('company-id');
                $.ajax({
                    url: '/companies/' + companyId,
                    type: 'GET',
                    success: function(company) {
                        var booth = company.booth;
                        // TODO: Find svg booth
                    }
                });
            });

            var boothList = function() {
                $(document).on('ready', function() {
                    $.ajax({
                        url: '/companies',
                        type: 'GET',
                        success: function(companies) {
                            companies.sort(function(a, b) {
                                return a.name.localeCompare(b.name);
                            });

                            for (var i = 0; i < 70; i++) {
                                $('#compList1').append("<li>"+"<span id='boothNum'>"+companies[i].booth +"</span>"+ companies[i].name+"</li>");
                            } 
                            for (var i = 70; i < companies.length; i++) {
                                $('#compList2').append("<li>"+"<span id='boothNum'>"+companies[i].booth +"</span>"+ companies[i].name+"</li>");
                            }  
                        }
                    });
                });
            }

            boothList();

            $(document).on('mouseenter', 'rect', function() {
                var boothNum = $(this).data("booth");
                $.ajax({
                    url: '/companies/'+boothNum,
                    type: 'GET',
                    success: function(company) {
                        $('.companies .row').html('<h3>'+company[0].name+"</h3>");
                    }
                })
            });

            $(document).on('mouseleave', 'rect', function() {
                boothList();
            });

        // Get form data
        var getFormData = function(form) {
            var inputs = {};
            $(form).serializeArray().forEach(function(item) {
              inputs[item.name] = item.value;
            });
            return inputs;
        };

        //use keydown for enter submission plus function(e) {if (e.keyCode === 13) {}}
        $(document).on('click', '#add-company-submit', function(evt) {
            evt.preventDefault();
            var formData = getFormData('#add-company');
            $.ajax({
                url: '/companies/'+formData.name+'/'+formData.booth,
                type: 'GET',
                data: formData,
                success: function(company) {
                    console.log(company);
                    if (company.length === 0) {
                        $.ajax({
                            url: '/companies',
                            type: 'POST',
                            data: formData,
                            success: function(company) {
                                
                            }
                        });
                    } else {
                        $.ajax({
                            url: '/companies',
                            type: 'PUT',
                            data: formData,
                            success: function(company) {
                                console.log('edited');
                            }
                        });
                    }  
                }
            });
        });
        }
    });
});
