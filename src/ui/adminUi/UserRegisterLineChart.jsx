import { Line } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);
const generateRandomData = (numDays) => {
    const data = [];
    for (let i = 0; i < numDays; i++) {
        data.push(Math.floor(Math.random() * 100000) + 100000);
    }
    return data;
};

const options = {
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Class strength',
            fontSize: 20,
        },
        filler: {
            propagate: false,
        },
    },
    elements: {
        line: {
            fill: true,
            backgroundColor: 'rgba(0, 0, 0, 0.2)',
        },
    },
    legend: {
        display: true,
        position: 'right',
    },
};

const userRegisterData = {
    labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
    datasets: [
        {
            label: 'Số lượng đăng kí',
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(75,192,192,0.6)',
            hoverBorderColor: 'rgba(75,192,192,1)',
            data: generateRandomData(30),
            fill: false,
        },
    ],
};
const UserRegisterLineChart = () => {
    return (
        <div className="mt-[100px] h-[400px]">
            <h3 className="font-[600] text-[22px] uppercase mt-[50px]">Số lượng đăng kí theo ngày</h3>
            <Line data={userRegisterData} options={options} />
        </div>
    );
};

export default UserRegisterLineChart;
