$(function () {
    const dataChart = [];
    getData();

    google.charts.load('current', {'packages': ['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
        let data = google.visualization.arrayToDataTable(dataChart);
        let options = {'title': 'Statistic', 'width': 550, 'height': 400};
        let chart = new google.visualization.PieChart(document.getElementById('statistic'));
        chart.draw(data, options);
    }

    function getData() {
        const url = 'handler.php';
        const voted = new FormData();
        voted.append('voted', 'true');

        fetch(url, {method: 'POST', body: voted})
            .then(response => response.json())
            .then(function (data) {
                dataChart.push(['Brand', 'Voted']);
                for (let key in data) {
                    dataChart.push([key, data[key]]);
                }
            });
    }
});