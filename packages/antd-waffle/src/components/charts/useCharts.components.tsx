import { useEffect } from 'react';
import * as echarts from 'echarts';

const UseChart = (chartRef, options) => {
  let myChart = null;
  const renderChart = () => {
    const chart = echarts.getInstanceByDom(chartRef.current);
    if (chart) {
      myChart = chart;
    } else {
      myChart = echarts.init(chartRef.current);
    }
    myChart.setOption(options);
  };

  useEffect(() => {
    renderChart();
  }, [options])

  useEffect(() => {
    return () => {
      myChart && myChart.dispose();
    }
  }, []);
  return;
}

export default UseChart;