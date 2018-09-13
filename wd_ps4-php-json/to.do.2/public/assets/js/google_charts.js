google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    let data = google.visualization.arrayToDataTable([
        ['brand', 'votes'],
        ['Msi', 25],
        ['Lenovo', 6],
        ['HP', 11],
        ['Dell', 20],
        ['Acer', 4],
        ['Asus', 21],
        ['Apple', 1],
        ['Samsung', 3],
        ['Razer', 0]
    ]);

    let options = {'title':'My Average Day', 'width':550, 'height':400};

    let chart = new google.visualization.PieChart(document.getElementById('statistic'));
    chart.draw(data, options);
}