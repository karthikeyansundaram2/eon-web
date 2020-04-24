import React from "react";
import PropTypes from "prop-types";
import "./analytics.css";
import { Card } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function EventWiseRevenue(props) {
  const { data } = props;
  console.log(data)
  const {
    name_list,
    revenue_list
  } = data;

  console.log(name_list)

  const options = {
    chart: {
        type: 'line'
    },
    title: {
        text: 'Event wise revenu'
    },
    xAxis: {
        categories: name_list
    },
    yAxis: {
        title: {
            text: 'Revenue'
        }
    },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: true
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Revenue',
        data: revenue_list
    }]
  };

  return (
    <Card className="pie-card">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  );
}

EventWiseRevenue.propTypes = {
  data: PropTypes.object.isRequired,
};