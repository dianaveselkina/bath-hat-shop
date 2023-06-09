import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as echarts from 'echarts';
import './page.css';

export const ChartReviewsPage = () => {
  useEffect(() => {
    const option = {
      title: {
        text: 'Ваши отзывы',
        left: 'center',
        textStyle: {
          fontSize: 30,
        },
      },
      tooltip: {},
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      yAxis: {
        type: 'value',
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: 'bar',
          color: '#564b0d',
        },
      ],
    };

    const chartDom = document.getElementById('chartreviews');
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  }, []);
  return (
    <div className="chart">
      <div id="chartreviews" style={{ width: '700px', height: '600px' }}></div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
