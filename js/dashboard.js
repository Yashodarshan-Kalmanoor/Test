// Create root element
// https://www.amcharts.com/docs/v5/getting-started/#Root_element
var root = am5.Root.new("chartdiv-1");
var root2 = am5.Root.new("chartdiv-2");
var root3 = am5.Root.new("chartdiv-3");


// Set themes
// https://www.amcharts.com/docs/v5/concepts/themes/
root.setThemes([
  am5themes_Animated.new(root)
]);

root2.setThemes([
  am5themes_Animated.new(root2)
]);
root3.setThemes([
  am5themes_Animated.new(root3)
]);


// Create chart
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
var chart = root.container.children.push(am5percent.PieChart.new(root, {
  layout: root.verticalLayout
}));

var chart2 = root2.container.children.push(am5percent.PieChart.new(root2, {
  layout: root2.verticalLayout
}));

var chart3 = root3.container.children.push(am5percent.PieChart.new(root3, {
  layout: root3.verticalLayout
}));


// Create series
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
var series = chart.series.push(am5percent.PieSeries.new(root, {
  valueField: "value",
  categoryField: "category"
}));

var series2 = chart2.series.push(am5percent.PieSeries.new(root2, {
  valueField: "value",
  categoryField: "category"
}));

var series3 = chart3.series.push(am5percent.PieSeries.new(root3, {
  valueField: "value",
  categoryField: "category"
}));



// Set data
// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
series.data.setAll([
  { value: 30, category: "Joined" },
  { value: 9, category: "Not accepted" },
  { value: 9, category: "Not joined" }
]);

series2.data.setAll([
  { value: 3, category: "Selected" },
  { value: 10, category: "Rejected" },
]);

series3.data.setAll([
  { value: 50, category: "Cleared 1st round" },
  { value: 30, category: "Cleared 2nd round" },
  { value: 20, category: "Cleared 3rd round" },
  { value: 10, category: "Cleared 4th round" }
]);


// Create legend
// https://www.amcharts.com/docs/v5/charts/percent-charts/legend-percent-series/
var legend = chart.children.push(am5.Legend.new(root, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15,
}));

var legend2 = chart2.children.push(am5.Legend.new(root2, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15,
}));

var legend3 = chart3.children.push(am5.Legend.new(root3, {
  centerX: am5.percent(50),
  x: am5.percent(50),
  marginTop: 15,
  marginBottom: 15,
}));

legend.data.setAll(series.dataItems);
legend2.data.setAll(series2.dataItems);
legend3.data.setAll(series3.dataItems);


// Play initial series animation
// https://www.amcharts.com/docs/v5/concepts/animations/#Animation_of_series
series.appear(1000, 100);
series2.appear(1000, 100);
series3.appear(1000, 100);