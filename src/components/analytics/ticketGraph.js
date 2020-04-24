import React from "react";
import PropTypes from "prop-types";
import "./analytics.css";
import { Card } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function TicketGraph(props) {
  const { data } = props;
  console.log(data)
  const {
    name_list,
    sold_tickets,
    remaining_tickets
  } = data;

  console.log(name_list)

  const options = {
    chart: {
      type: 'column'
  },
  title: {
      text: 'Ticket comparision'
  },
  xAxis: {
      categories: name_list
  },
  yAxis: {
      min: 0,
      title: {
          text: 'Total tickets vs Sold tickets'
      },
      stackLabels: {
          enabled: true,
          style: {
              fontWeight: 'bold',
              color: 'black'
          }
      }
  },
  legend: {
      align: 'right',
      x: -30,
      verticalAlign: 'top',
      y: 25,
      floating: true,
      backgroundColor: 'white',
      borderColor: '#CCC',
      borderWidth: 1,
      shadow: false
  },
  tooltip: {
      headerFormat: '<b>{point.x}</b><br/>',
      pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}'
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          dataLabels: {
              enabled: true
          }
      }
  },
  series: [{
      name: 'Remaining Tickets',
      data: remaining_tickets,
      color: 'lightblue'
  }, {
      name: 'Sold Tickets',
      data: sold_tickets,
      color: 'green' 
  }]
  };

  return (
    <Card className="pie-card">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </Card>
  );
}

TicketGraph.propTypes = {
    data: PropTypes.object.isRequired,
};