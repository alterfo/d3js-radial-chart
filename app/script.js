d3.json('data.json', function(e, data) {
    if (e) {
        data = [{
            "data": {
                "Windows": 5,
                "Unix": 7,
                "Scripting": 6,
                "EM Tools": 5,
                "English": 2,
                "Soft Skills": 8,
                "Leader": 1,
                "Health": 3,
                "Mana": 8,
                "Advanced skills": 4
            }
        }];
        // throw e;
    }


    var chart = radialBarChart()
        .barHeight(300)
        .domain([0, 10])
        .tickCircleValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

    d3.select('#chart')
        .datum(data)
        .call(chart);

});