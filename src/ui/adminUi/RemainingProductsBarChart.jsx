import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

const generateRandomData = (numbers) => {
    const data = [];
    for (let i = 0; i < numbers; i++) {
        data.push(Math.floor(Math.random() * 100) + 100);
    }
    return data;
};

const state = {
    labels: [
        'Bóng đá',
        'Giày đá bóng',
        'Áo đấu',
        'Quần đấu',
        'Găng tay',
        'Balo',
        'Phụ kiện',
        'Mũ',
        'Tất',
        'Băng cổ tay',
    ],
    datasets: [
        {
            label: 'Tồn kho',
            backgroundColor: Array.from({ length: 10 }, () => `#${Math.floor(Math.random() * 16777215).toString(16)}`),
            data: generateRandomData(10),
        },
    ],
};

const options = {
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Số lượng hàng tồn kho',
        fontSize: 20,
    },
    legend: {
        display: true,
        position: 'right',
    },
};

const RemainingProductsBarChart = () => {
    return (
        <div className="mt-[100px] h-[400px]">
            <h3 className="font-[600] text-[22px] uppercase">Số lượng hàng tồn kho</h3>

            <Bar data={state} options={options} />
        </div>
    );
};

export default RemainingProductsBarChart;
