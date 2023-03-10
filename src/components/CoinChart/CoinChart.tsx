import React from 'react';
import styles from './CoinChart.module.scss';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
	Filler
);

interface Data {
	data: Number[];
}

interface Props {
	data: {
		labels: String[];
		datasets: Data[];
	};
}

const options = {
	responsive: true,
	plugins: {
		legend: {
			display: false,
		},
	},
	elements: {
		line: {
			tension: 0,
			borderWidth: 2,
			borderColor: 'rgba(47, 97, 68, 1)',
			fill: 'start',
			backgroundColor: 'rgba(47, 97, 68, 0.3)',
		},
		point: {
			radius: 5,
			hitRadius: 10,
			backgroundColor: 'rgba(47, 97, 68, 0.5)',
		},
	},
	scales: {
		xAxis: { display: false },
		yAxis: { display: true },
	},
};

const CoinChart = ({ data }: Props) => {
	return (
		<div className={styles.container}>
			<Line data={data} options={options} />
		</div>
	);
};

export default CoinChart;
