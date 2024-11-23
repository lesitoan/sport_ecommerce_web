import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const generateRandomData = (numDays) => {
    const data = [];
    for (let i = 0; i < numDays; i++) {
        data.push(Math.floor(Math.random() * 100000) + 100000);
    }
    return data;
};

const state = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
        {
            label: 'Doanh thu',
            backgroundColor: 'pink',
            data: generateRandomData(30),
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Class strength',
        fontSize: 20,
    },
    legend: {
        display: true,
        position: 'right',
    },
};

const ProductsSalesChart = () => {
    return (
        <div className="mt-[100px] h-[400px]">
            <h3 className="font-[600] text-[22px] uppercase">Doanh thu theo ngày</h3>

            <Bar data={state} options={options} />
        </div>
    );
};

export default ProductsSalesChart;
