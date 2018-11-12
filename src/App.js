import hi, { Line } from 'react-chartjs-2';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';


let data = {
    labels: [],
    datasets: [
        {
            label: 'Unique daily users',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: []
        }
    ],
    height: 200,
    width: 400,
};
const options = {
    fullWidth: false,
    maintainAspectRatio: false
};
function fetchData() {
    fetch('https://cors-anywhere.herokuapp.com/' + 'https://hidden-island-35169.herokuapp.com/api/dailyDau')
        .then(res => res.json())
        .then(dauData => {
            dauData.forEach(element => {
                var date = new Date(element._id * 1000);
                data.labels.push(date.toDateString())

                data.datasets[0].data.push(element.Count);
            });
            ReactDOM.render(<Graph />, document.getElementById('root'));
        });
}


class Graph extends Component {



    render() {
        return (
            <div>
                <Line className="lineGraph"
                    data={data}
                    width={900}
                    height={400}
                    options={{
                        fullWidth: false,
                        maintainAspectRatio: false,
                        responsive: false
                    }}
                />
            </div>
        )
    }
}

export { Graph, fetchData };
