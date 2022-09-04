import ReactApexChart from "react-apexcharts";

function Chart({chartData}){
    return (
        <div>
        { 
            chartData ?
                (<ReactApexChart
                    type="line"
                    series={[
                        {
                            name: "Price",
                            data: chartData?.map((price) => price.close),
                        },
                    ]}
                    options={{
                        theme: {
                            mode: "dark",
                        },
                        chart: {
                            height: 300,
                            width: 500,
                            toolbar: {
                                show: false,
                            },
                            background: "transparent",
                        },
                        stroke: {
                            curve: "smooth",
                            width: 4,
                        },
                        fill: {
                            type: "gradient",
                            gradient: { gradientToColors: ["#0be881"], stops: [0, 100] },
                        },
                        colors: ["#000"],
                        tooltip: {
                            y: {
                                formatter: (value) => `$${value.toFixed(2)}`,
                            },
                        },
                    }}
                />)
            :
            <p>"데이터없음"</p>
            }
        </div>
    )
}
export default Chart