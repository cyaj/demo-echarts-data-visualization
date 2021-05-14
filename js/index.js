$(function () {
  // tab栏切换
  $('.monitor .tabs > a').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    let index = $(this).index()
    $('.monitor .content').eq(index).show().siblings('.content').hide()
  })
})

$(function () {
  $('.marquee-view .marquee').each(function () {
    // console.log($(this));
    let rows = $(this).children().clone()
    $(this).append(rows)
  })
})

$(function () {
  let myChart = echarts.init(document.querySelector('.pie'))
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
    },
    legend: {
      left: 'center',
      top: 'bottom',
      data: [
        'rose1',
        'rose2',
        'rose3',
        'rose4',
        'rose5',
        'rose6',
        'rose7',
        'rose8',
      ],
    },
    series: [
      {
        name: '点位统计',
        type: 'pie',
        radius: ['10%', '70%'],
        center: ['50%', '50%'],
        roseType: 'radius',
        itemStyle: {
          borderRadius: 5,
        },
        data: [
          { value: 20, name: '云南' },
          { value: 26, name: '北京' },
          { value: 24, name: '山东' },
          { value: 25, name: '河北' },
          { value: 20, name: '江苏' },
          { value: 25, name: '浙江' },
          { value: 30, name: '四川' },
          { value: 42, name: '湖北' },
        ],
        color: [
          '#006cff',
          '#60cda0',
          '#ed8884',
          '#ff9f7f',
          '#0096ff',
          '#9fe6b8',
          '#32c5e9',
          '#1d9dff',
        ],
        label: {
          fontSize: 10,
        },
        labelLine: {
          // 连接到图形的线长度
          length: 6,
          // 连接到文字的线长度
          length2: 8,
        },
      },
    ],
  }
  myChart.setOption(option)
  // 浏览器缩放的时候，图表跟着自动适配
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})

$(function () {
  const item = {
    name: '',
    value: 1200,
    // 柱子颜色
    itemStyle: {
      color: '#254065',
    },
    // 鼠标经过柱子颜色
    emphasis: {
      itemStyle: {
        color: '#254065',
      },
    },
    // 工具提示隐藏
    tooltip: {
      extraCssText: 'opacity:0',
    },
  }
  // 柱状图
  const myChart = echarts.init(document.querySelector('.bar'))

  const option = {
    xAxis: {
      type: 'category',
      data: [
        '上海',
        '广州',
        '北京',
        '深圳',
        '合肥',
        '',
        '......',
        '',
        '杭州',
        '厦门',
        '济南',
        '成都',
        '重庆',
      ],
      axisLabel: {
        textStyle: {
          color: '#4c9bfd',
        },
      },
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 240, 255, 0.3)',
        },
      },
    },
    yAxis: {
      type: 'value',
      axisTick: {
        show: false,
      },
      axisLabel: {
        textStyle: {
          color: '#4c9bfd',
        },
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: 'rgba(0, 240, 255, 0.3)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(0, 240, 255, 0.3)',
        },
      },
    },
    grid: {
      top: '3%',
      right: '3%',
      bottom: '3%',
      left: '0%',
      //  图表位置紧贴画布边缘是否显示刻度以及label文字 防止坐标轴标签溢出跟grid 区域有关系
      containLabel: true,
      // 是否显示直角坐标系网格
      show: true,
      //grid 四条边框的颜色
      borderColor: 'rgba(0, 240, 255, 0.3)',
    },
    tooltip: {
      trigger: 'item',
      // axisPointer: {            // 坐标轴指示器，坐标轴触发有效  这个模块我们此时不需要删掉即可
      // type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
      // }
      //    formatter: "直接访问<br/>{b} : {c}"
    },
    color: {
      type: 'linear',
      x: 0,
      y: 0,
      x2: 0,
      y2: 1,
      colorStops: [
        {
          offset: 0,
          color: '#00fffb', // 0% 处的颜色
        },
        {
          offset: 1,
          color: '#0061ce', // 100% 处的颜色
        },
      ],
      globalCoord: false, // 缺省为 false
    },
    series: {
      name: '直接访问',
      type: 'bar',
      barWidth: 20,
      data: [
        2100,
        1900,
        1700,
        1560,
        1400,
        item,
        item,
        item,
        900,
        750,
        600,
        480,
        240,
      ],
    },
  }
  myChart.setOption(option)

  window.addEventListener('resize', function () {
    myChart.resize()
  })
})

$(function () {
  const data = {
    day365: { orders: '20,301,899', amount: '99834' },
    day90: { orders: '301,987', amount: '9834' },
    day30: { orders: '1,987', amount: '3834' },
    day1: { orders: '987', amount: '834' },
  }

  $('.order .filter a').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active')
    $('.order .data h4').eq(0).text(data[$(this).data('key')].orders)
    $('.order .data h4').eq(1).text(data[$(this).data('key')].amount)
  })

  $('.order .filter a').eq(0).click()
})

$(function () {
  const myChart = echarts.init(document.querySelector('.line'))
  const data = {
    year: [
      [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
      [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
    ],
    quarter: [
      [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
      [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34],
    ],
    month: [
      [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
      [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98],
    ],
    week: [
      [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
      [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24],
    ],
  }
  let index = 0
  const option = {
    tooltip: {
      trigger: 'axis',
    },
    legend: {
      textStyle: {
        color: '#4c9bfd', // 图例文字颜色
      },
      right: '10%', // 距离右边10%
    },
    grid: {
      top: '20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      show: true, // 显示边框
      borderColor: '#012f4a', // 边框颜色
      containLabel: true, // 包含刻度文字在内
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
        '1月',
        '2月',
        '3月',
        '4月',
        '5月',
        '6月',
        '7月',
        '8月',
        '9月',
        '10月',
        '11月',
        '12月',
      ],
      axisTick: {
        show: false, // 去除刻度线
      },
      axisLabel: {
        color: '#4c9bfd', // 文本颜色
      },
      axisLine: {
        show: false, // 去除轴线
      },
    },
    yAxis: {
      axisTick: {
        show: false, // 去除刻度
      },
      axisLabel: {
        color: '#4c9bfd', // 文字颜色
      },
      splitLine: {
        lineStyle: {
          color: '#012f4a', // 分割线颜色
        },
      },
    },
    color: ['#00f2f1', '#ed3f35'],
    series: [
      {
        name: '预期销售额',
        type: 'line',
        stack: '总量',
        data: data.year[0],
        smooth: true,
      },
      {
        name: '实际销售额',
        type: 'line',
        stack: '总量',
        data: data.year[1],
        smooth: true,
      },
    ],
  }
  myChart.setOption(option)

  $('.sales .caption a').on('click', function () {
    index = $(this).index() - 1
    $(this).addClass('active').siblings().removeClass('active')
    data[$(this).data('key')]
    option.series[0].data = data[$(this).data('key')][0]
    option.series[1].data = data[$(this).data('key')][1]
    myChart.setOption(option)
  })

  let timer = setInterval(function () {
    index++
    if (index > 3) {
      index = 0
    }
    $('.sales .caption a').eq(index).click()
  }, 2000)

  $('.sales').on('mouseenter', function () {
    clearInterval(timer)
  })

  $('.sales').on('mouseleave', function () {
    timer = setInterval(function () {
      index++
      if (index > 3) {
        index = 0
      }
      $('.sales .caption a').eq(index).click()
    }, 2000)
  })

  window.addEventListener('resize', function () {
    // 让我们的图表调用 resize这个方法
    myChart.resize()
  })
})

$(function () {
  // 雷达图
  const myChart = echarts.init(document.querySelector('.radar'))
  const option = {
    // 鼠标经过显示提示框组件
    tooltip: {
      show: true,
      // 控制提示框组件的显示位置
      position: ['60%', '10%'],
    },
    radar: {
      // 雷达图的指示器 内部填充数据
      indicator: [
        { name: '机场', max: 100 },
        { name: '商场', max: 100 },
        { name: '火车站', max: 100 },
        { name: '汽车站', max: 100 },
        { name: '地铁', max: 100 },
      ],
      // 调整雷达图大小
      center: ['50%', '50%'],
      radius: '65%',
      shape: 'circle',
      splitNumber: 4,
      // 雷达图文字样式
      name: {
        textStyle: {
          color: '#4c9bfd',
        },
      },
      // 圆圈线条样式
      splitLine: {
        lineStyle: {
          color: ['rgba(255, 255, 255, 0.5)'],
        },
      },
      // 竖线
      axisLine: {
        lineStyle: {
          color: 'rgba(255, 255, 255, 0.5)',
        },
      },
      splitArea: {
        show: false,
      },
    },
    series: [
      {
        name: '北京',
        type: 'radar',
        // 区域线条样式
        lineStyle: {
          normal: {
            color: '#fff',
            width: 1,
            opacity: 0.5,
          },
        },
        data: [[90, 19, 56, 11, 34]],
        // 拐点样式
        symbol: 'circle',
        // 拐点的大小
        symbolSize: 5,
        // 小圆点（拐点）设置为白色
        itemStyle: {
          color: '#fff',
        },
        // 在圆点上显示相关数据
        label: {
          show: true,
          color: '#fff',
          fontSize: 10,
        },
        // 区域填充样式
        areaStyle: {
          color: 'rgba(238, 197, 102, 0.6)',
        },
      },
    ],
  }
  myChart.setOption(option)
  window.addEventListener('resize', () => {
    myChart.resize()
  })
})

$(function () {
  // 饼图
  const myChart = echarts.init(document.querySelector('.gauge'))
  const option = {
    series: [
      {
        name: '销售进度',
        type: 'pie',
        radius: ['130%', '150%'],
        center: ['48%', '80%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
        },
        startAngle: 180,
        labelLine: {
          show: false,
        },
        // 鼠标经过不变大
        hoverOffset: 0,
        data: [
          {
            value: 150,
            itemStyle: {
              // 颜色渐变#00c9e0->#005fc1
              color: new echarts.graphic.LinearGradient(
                // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                0,
                0,
                0,
                1,
                [
                  { offset: 0, color: '#00c9e0' }, // 0 起始颜色
                  { offset: 1, color: '#005fc1' }, // 1 结束颜色
                ]
              ),
            },
          },
          { value: 50, itemStyle: { color: '#12274d' } },
          // 隐藏第三块区域
          { value: 200, itemStyle: { color: 'transparent' } },
        ],
      },
    ],
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})

$(function () {
  // 全国热榜
  const hotData = [
    {
      city: '北京', // 城市
      sales: '25, 179', // 销售额
      flag: true, //  上升还是下降
      brands: [
        //  品牌种类数据
        { name: '可爱多', num: '9,086', flag: true },
        { name: '娃哈哈', num: '8,341', flag: true },
        { name: '喜之郎', num: '7,407', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '6,724', flag: false },
        { name: '好多鱼', num: '2,170', flag: true },
      ],
    },
    {
      city: '河北',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '3,457', flag: false },
        { name: '娃哈哈', num: '2,124', flag: true },
        { name: '喜之郎', num: '8,907', flag: false },
        { name: '八喜', num: '6,080', flag: true },
        { name: '小洋人', num: '1,724', flag: false },
        { name: '好多鱼', num: '1,170', flag: false },
      ],
    },
    {
      city: '上海',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '2,345', flag: true },
        { name: '娃哈哈', num: '7,109', flag: true },
        { name: '喜之郎', num: '3,701', flag: false },
        { name: '八喜', num: '6,080', flag: false },
        { name: '小洋人', num: '2,724', flag: false },
        { name: '好多鱼', num: '2,998', flag: true },
      ],
    },
    {
      city: '江苏',
      sales: '23,252',
      flag: false,
      brands: [
        { name: '可爱多', num: '2,156', flag: false },
        { name: '娃哈哈', num: '2,456', flag: true },
        { name: '喜之郎', num: '9,737', flag: true },
        { name: '八喜', num: '2,080', flag: true },
        { name: '小洋人', num: '8,724', flag: true },
        { name: '好多鱼', num: '1,770', flag: false },
      ],
    },
    {
      city: '山东',
      sales: '20,760',
      flag: true,
      brands: [
        { name: '可爱多', num: '9,567', flag: true },
        { name: '娃哈哈', num: '2,345', flag: false },
        { name: '喜之郎', num: '9,037', flag: false },
        { name: '八喜', num: '1,080', flag: true },
        { name: '小洋人', num: '4,724', flag: false },
        { name: '好多鱼', num: '9,999', flag: true },
      ],
    },
  ]
  // 各省热销tab栏
  let supHtml = ''
  hotData.forEach(item => {
    supHtml += `
      <li>
        <span>${item.city}</span>
        <span>${item.sales} <s class=${
      item.flag ? 'icon-up' : 'icon-down'
    }></s></span>
      </li>
    `
  })
  $('.sup').html(supHtml)

  let index = 0
  //鼠标hover时效果
  function render(index) {
    $('.sup li').eq(index).addClass('active').siblings().removeClass('active')
    let subHtml = ''
    hotData[index].brands.forEach(item => {
      subHtml += `
        <li><span>${item.name}</span>${item.num}<span> <s class=${
        item.flag ? 'icon-up' : 'icon-down'
      }></s></span></li>
      `
    })
    $('.sub').html(subHtml)
  }

  $('.province .sup').on('mouseenter', 'li', function () {
    index = $(this).index()
    render(index)
  })

  // 默认高亮第一个tab
  // $('.province .sup li').eq(0).mouseenter()
  render(0)

  // 定时切换
  let timer = setInterval(function () {
    index++
    if (index >= $('.province .sup li').length) {
      index = 0
    }
    render(index)
  }, 1500)

  $('.top').on('mouseenter', function () {
    clearInterval(timer)
  })

  $('.top').on('mouseleave', function () {
    timer = setInterval(function () {
      index++
      if (index >= $('.province .sup li').length) {
        index = 0
      }
      render(index)
    }, 1500)
  })
})

// 飞机航线
$(function () {
  const myChart = echarts.init(document.querySelector('.geo'))
  var geoCoordMap = {
    上海: [121.4648, 31.2891],
    东莞: [113.8953, 22.901],
    东营: [118.7073, 37.5513],
    中山: [113.4229, 22.478],
    临汾: [111.4783, 36.1615],
    临沂: [118.3118, 35.2936],
    丹东: [124.541, 40.4242],
    丽水: [119.5642, 28.1854],
    乌鲁木齐: [87.9236, 43.5883],
    佛山: [112.8955, 23.1097],
    保定: [115.0488, 39.0948],
    兰州: [103.5901, 36.3043],
    包头: [110.3467, 41.4899],
    北京: [116.4551, 40.2539],
    北海: [109.314, 21.6211],
    南京: [118.8062, 31.9208],
    南宁: [108.479, 23.1152],
    南昌: [116.0046, 28.6633],
    南通: [121.1023, 32.1625],
    厦门: [118.1689, 24.6478],
    台州: [121.1353, 28.6688],
    合肥: [117.29, 32.0581],
    呼和浩特: [111.4124, 40.4901],
    咸阳: [108.4131, 34.8706],
    哈尔滨: [127.9688, 45.368],
    唐山: [118.4766, 39.6826],
    嘉兴: [120.9155, 30.6354],
    大同: [113.7854, 39.8035],
    大连: [122.2229, 39.4409],
    天津: [117.4219, 39.4189],
    太原: [112.3352, 37.9413],
    威海: [121.9482, 37.1393],
    宁波: [121.5967, 29.6466],
    宝鸡: [107.1826, 34.3433],
    宿迁: [118.5535, 33.7775],
    常州: [119.4543, 31.5582],
    广州: [113.5107, 23.2196],
    廊坊: [116.521, 39.0509],
    延安: [109.1052, 36.4252],
    张家口: [115.1477, 40.8527],
    徐州: [117.5208, 34.3268],
    德州: [116.6858, 37.2107],
    惠州: [114.6204, 23.1647],
    成都: [103.9526, 30.7617],
    扬州: [119.4653, 32.8162],
    承德: [117.5757, 41.4075],
    拉萨: [91.1865, 30.1465],
    无锡: [120.3442, 31.5527],
    日照: [119.2786, 35.5023],
    昆明: [102.9199, 25.4663],
    杭州: [119.5313, 29.8773],
    枣庄: [117.323, 34.8926],
    柳州: [109.3799, 24.9774],
    株洲: [113.5327, 27.0319],
    武汉: [114.3896, 30.6628],
    汕头: [117.1692, 23.3405],
    江门: [112.6318, 22.1484],
    沈阳: [123.1238, 42.1216],
    沧州: [116.8286, 38.2104],
    河源: [114.917, 23.9722],
    泉州: [118.3228, 25.1147],
    泰安: [117.0264, 36.0516],
    泰州: [120.0586, 32.5525],
    济南: [117.1582, 36.8701],
    济宁: [116.8286, 35.3375],
    海口: [110.3893, 19.8516],
    淄博: [118.0371, 36.6064],
    淮安: [118.927, 33.4039],
    深圳: [114.5435, 22.5439],
    清远: [112.9175, 24.3292],
    温州: [120.498, 27.8119],
    渭南: [109.7864, 35.0299],
    湖州: [119.8608, 30.7782],
    湘潭: [112.5439, 27.7075],
    滨州: [117.8174, 37.4963],
    潍坊: [119.0918, 36.524],
    烟台: [120.7397, 37.5128],
    玉溪: [101.9312, 23.8898],
    珠海: [113.7305, 22.1155],
    盐城: [120.2234, 33.5577],
    盘锦: [121.9482, 41.0449],
    石家庄: [114.4995, 38.1006],
    福州: [119.4543, 25.9222],
    秦皇岛: [119.2126, 40.0232],
    绍兴: [120.564, 29.7565],
    聊城: [115.9167, 36.4032],
    肇庆: [112.1265, 23.5822],
    舟山: [122.2559, 30.2234],
    苏州: [120.6519, 31.3989],
    莱芜: [117.6526, 36.2714],
    菏泽: [115.6201, 35.2057],
    营口: [122.4316, 40.4297],
    葫芦岛: [120.1575, 40.578],
    衡水: [115.8838, 37.7161],
    衢州: [118.6853, 28.8666],
    西宁: [101.4038, 36.8207],
    西安: [109.1162, 34.2004],
    贵阳: [106.6992, 26.7682],
    连云港: [119.1248, 34.552],
    邢台: [114.8071, 37.2821],
    邯郸: [114.4775, 36.535],
    郑州: [113.4668, 34.6234],
    鄂尔多斯: [108.9734, 39.2487],
    重庆: [107.7539, 30.1904],
    金华: [120.0037, 29.1028],
    铜川: [109.0393, 35.1947],
    银川: [106.3586, 38.1775],
    镇江: [119.4763, 31.9702],
    长春: [125.8154, 44.2584],
    长沙: [113.0823, 28.2568],
    长治: [112.8625, 36.4746],
    阳泉: [113.4778, 38.0951],
    青岛: [120.4651, 36.3373],
    韶关: [113.7964, 24.7028],
  }

  var XAData = [
    [{ name: '西安' }, { name: '北京', value: 100 }],
    [{ name: '西安' }, { name: '上海', value: 100 }],
    [{ name: '西安' }, { name: '广州', value: 100 }],
    [{ name: '西安' }, { name: '西宁', value: 100 }],
    [{ name: '西安' }, { name: '银川', value: 100 }],
  ]

  var XNData = [
    [{ name: '西宁' }, { name: '北京', value: 100 }],
    [{ name: '西宁' }, { name: '上海', value: 100 }],
    [{ name: '西宁' }, { name: '广州', value: 100 }],
    [{ name: '西宁' }, { name: '西安', value: 100 }],
    [{ name: '西宁' }, { name: '银川', value: 100 }],
  ]

  var YCData = [
    [{ name: '银川' }, { name: '北京', value: 100 }],
    [{ name: '银川' }, { name: '广州', value: 100 }],
    [{ name: '银川' }, { name: '上海', value: 100 }],
    [{ name: '银川' }, { name: '西安', value: 100 }],
    [{ name: '银川' }, { name: '西宁', value: 100 }],
  ]

  var planePath =
    'path://M1705.06,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705.06,1318.313z'
  //var planePath = 'arrow';
  var convertData = function (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var dataItem = data[i]

      var fromCoord = geoCoordMap[dataItem[0].name]
      var toCoord = geoCoordMap[dataItem[1].name]
      if (fromCoord && toCoord) {
        res.push({
          fromName: dataItem[0].name,
          toName: dataItem[1].name,
          coords: [fromCoord, toCoord],
          value: dataItem[1].value,
        })
      }
    }
    return res
  }

  var color = ['#a6c84c', '#ffa022', '#46bee9'] //航线的颜色
  var series = []
  ;[
    ['西安', XAData],
    ['西宁', XNData],
    ['银川', YCData],
  ].forEach(function (item, i) {
    series.push(
      {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 1,
        effect: {
          show: true,
          period: 6,
          trailLength: 0.7,
          color: 'red', //arrow箭头的颜色
          symbolSize: 3,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 0,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + ' Top3',
        type: 'lines',
        zlevel: 2,
        symbol: ['none', 'arrow'],
        symbolSize: 10,
        effect: {
          show: true,
          period: 6,
          trailLength: 0,
          symbol: planePath,
          symbolSize: 15,
        },
        lineStyle: {
          normal: {
            color: color[i],
            width: 1,
            opacity: 0.6,
            curveness: 0.2,
          },
        },
        data: convertData(item[1]),
      },
      {
        name: item[0] + ' Top3',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: {
          brushType: 'stroke',
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
          },
        },
        symbolSize: function (val) {
          return val[2] / 8
        },
        itemStyle: {
          normal: {
            color: color[i],
          },
          emphasis: {
            areaColor: '#2B91B7',
          },
        },
        data: item[1].map(function (dataItem) {
          return {
            name: dataItem[1].name,
            value: geoCoordMap[dataItem[1].name].concat([dataItem[1].value]),
          }
        }),
      }
    )
  })
  var option = {
    tooltip: {
      trigger: 'item',
      formatter: function (params, ticket, callback) {
        if (params.seriesType == 'effectScatter') {
          return '线路：' + params.data.name + '' + params.data.value[2]
        } else if (params.seriesType == 'lines') {
          return (
            params.data.fromName +
            '>' +
            params.data.toName +
            '<br />' +
            params.data.value
          )
        } else {
          return params.name
        }
      },
    },
    legend: {
      orient: 'vertical',
      top: '0',
      left: 'left',
      data: ['西安 Top3', '西宁 Top3', '银川 Top3'],
      textStyle: {
        color: '#fff',
      },
      selectedMode: 'multiple',
    },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        emphasis: {
          show: true,
          color: '#fff',
        },
      },
      // 鼠标缩放平移
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#142957',
          borderColor: '#0692a4',
          borderWidth: 1,
        },
        emphasis: {
          areaColor: '#2B91B7',
        },
      },
    },
    series: series,
  }
  myChart.setOption(option)
  window.addEventListener('resize', function () {
    myChart.resize()
  })
})
