import React, { useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import * as echarts from 'echarts';
import './page.css';
import { useDispatch, useSelector } from 'react-redux';
import { getChartData } from '../components/Store/Slices/productsSlice';

export const ChartReviewsPage = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((s) => s.products);
  const chartData = useMemo(() => {
    const category = products.map((e) => e.name);
    const reviews = products.map((e) => e.reviews.length);

    return {
      category,
      reviews,
    };
  }, [products]);

  useEffect(() => {
    if (products?.length) {
      dispatch(getChartData());
    }
  }, [dispatch, products]);

  useEffect(() => {
    const option = {
      title: {
        text: 'Количество ваших отзывов',
        left: 'center',
        textStyle: {
          fontSize: 30,
        },
      },

      tooltip: {},
      grid: {
        width: '70%',
      },
      xAxis: {
        type: 'category',
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          rotate: 30,
          fontSize: 10,
          fontWeight: 'bold',
        },
        data: chartData.category,
      },
      yAxis: {
        type: 'value',
      },

      series: [
        {
          data: chartData.reviews,
          type: 'bar',
          color: '#564b0d',
          barWidth: '20%',
        },
      ],
    };

    const chartDom = document.getElementById('chartreviews');
    const myChart = echarts.init(chartDom);
    option && myChart.setOption(option);
  }, [chartData]);
  return (
    <div className="chart">
      <div id="chartreviews" style={{ width: '1600px', height: '700px' }}></div>
      <Link to="/">
        <button className="button__main">На главную</button>
      </Link>
    </div>
  );
};
