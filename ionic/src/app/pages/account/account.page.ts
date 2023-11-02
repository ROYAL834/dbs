import { Component } from '@angular/core';
// import * as echarts from 'echarts';
import { EChartsOption } from 'echarts';
import * as echarts from 'echarts';
import { NgxEchartsModule } from 'ngx-echarts';

@Component({
  selector: 'app-account',
  templateUrl: 'account.page.html',
  styleUrls: ['account.page.scss'],
})
export class AccountPage {
 gaugeData = [
  {
    value: 20,
    name: 'live',
    title: {
      offsetCenter: ['0%', '-30%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '-20%']
    }
  },
  {
    value: 40,
    name: 'Good',
    title: {
      offsetCenter: ['0%', '0%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '10%']
    }
  },
  {
    value: 60,
    name: 'Commonly',
    title: {
      offsetCenter: ['0%', '30%']
    },
    detail: {
      valueAnimation: true,
      offsetCenter: ['0%', '40%']
    }
  }
];

chartoption:EChartsOption = {
  series: [
    {
      type: 'gauge',
      startAngle: 90,
      endAngle: -270,
      pointer: {
        show: false
      },
      progress: {
        show: true,
        overlap: false,
        roundCap: true,
        clip: false,
        itemStyle: {
          borderWidth: 1,
          borderColor: '#464646'
        }
      },
      axisLine: {
        lineStyle: {
          width: 40
        }
      },
      splitLine: {
        show: false,
        distance: 10,
        length: 10
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: false,
        distance: 50
      },
      data: this.gaugeData,
      title: {
        fontSize: 14
      },
      detail: {
        width: 50,
        height: 24,
        fontSize: 14,
        color: 'inherit',
        borderColor: 'inherit',
        borderRadius: 10,
        borderWidth: 2,
        formatter: '{value}%'
      }
    }
  ]
};

// setInterval(function () {
//   gaugeData[0].value = +(Math.random() * 100).toFixed(2);
//   gaugeData[1].value = +(Math.random() * 100).toFixed(2);
//   gaugeData[2].value = +(Math.random() * 100).toFixed(2);
//   myChart.setOption<echarts.EChartsOption>({
//     series: [
//       {
//         data: gaugeData,
//         pointer: {
//           show: false
//         }
//       }
//     ]
//   });
// }, 2000);

}