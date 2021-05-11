export class TrafficChart1 {
  public static analyticsChartData = {
    chart: {
      height: 250,
      type: 'donut',
    },
    dataLabels: {
      enabled: true,
      dropShadow: {
        enabled: false,
      }
    },
    series: [85.7, 77.56, 20.9],
    colors: ['#014c37', '#0c6180', '#444444'],
    labels: ['Single', 'Double', 'Delux'],
    legend: {
      show: true,
      position: 'bottom',
    }
  };
}
