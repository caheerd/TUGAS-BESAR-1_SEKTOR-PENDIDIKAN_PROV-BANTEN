// SIDEBAR TOGGLE

let sidebarOpen = false;
const sidebar = document.getElementById('sidebar');

function openSidebar() {
  if (!sidebarOpen) {
    sidebar.classList.add('sidebar-responsive');
    sidebarOpen = true;
  }
}

function closeSidebar() {
  if (sidebarOpen) {
    sidebar.classList.remove('sidebar-responsive');
    sidebarOpen = false;
  }
}

// ---------- CHARTS ----------

// Data Daerah
const daerahLabels1 = ['Kab. Pandeglang', 'Kab. Lebak ', 'Kab. Tangerang', 'Kab. Serang', 'Tangerang', 'Cilegon','Serang','Tangerang Selatan'];

// BAR CHART - Jumlah Guru
const barChartGuru1Options = {
  series: [{
    name: 'Jumlah Guru',
    data: [1255,1020,4731,1288,2690,1401,980,986],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#cc3c43', '#367952'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartGuru1 = new ApexCharts(document.querySelector('#bar-chart-guru1'), barChartGuru1Options);
barChartGuru1.render();

// BAR CHART - Jumlah Siswa
const barChartSiswa1Options = {
  series: [{
    name: 'Jumlah Siswa',
    data: [16590, 18998, 34772, 19895, 27220, 6804,9401,21134],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#cc3c43', '#367952'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSiswa1 = new ApexCharts(document.querySelector('#bar-chart-siswa1'), barChartSiswa1Options);
barChartSiswa1.render();

// BAR CHART - Jumlah Sekolah
const barChartSekolah1Options = {
  series: [{
    name: 'Jumlah Sekolah',
    data: [34,51,154,76,90,22,30,75],
  }],
  chart: {
    type: 'bar',
    height: 600,
    toolbar: {
      show: false,
    },
  },
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#cc3c43', '#367952'],
  plotOptions: {
    bar: {
      distributed: true,
      borderRadius: 4,
      horizontal: false,
      columnWidth: '60%',
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: daerahLabels1,
  },
};

const barChartSekolah1 = new ApexCharts(document.querySelector('#bar-chart-sekolah1'), barChartSekolah1Options);
barChartSekolah1.render();



// AREA CHART
const areaChartOptions = {
  series: [
    {
      name: 'Jumlah Siswa',
      data: [16590, 18998, 34772, 19895, 27220, 6804,9401,21134],
    },
    {
      name: 'Jumlah Sekolah',
        data: [34,51,154,76,90,22,30,75],
    },
    {
      name: 'Jumlah Guru',
      data: [1255,1020,4731,1288,2690,1401,980,986],
    },
  ],
  chart: {
    height: 500,
    type: 'area',
    toolbar: {
      show: false,
    },
  },
  colors: ['#f5b74f', '#246dec', '#cc3c43' ],
  dataLabels: {
    enabled: false,
  },
  stroke: {
    curve: 'smooth',
  },
  labels: ['Kab. Pandeglang', 'Kab. Lebak ', 'Kab. Tangerang', 'Kab. Serang', 'Tangerang', 'Cilegon','Serang','Tangerang Selatan'],
  markers: {
    size: 2,
  },
  yaxis: [
    {
      title: {
        text: 'Jumlah Murid',
      },
    },
    {
      opposite: true,
      title: {
        text: 'Jumlah Guru',
      },
    },
  ],
  tooltip: {
    shared: true,
    intersect: false,
  },
};

const areaChart = new ApexCharts(
  document.querySelector('#area-chart'),
  areaChartOptions
);
areaChart.render();

// Data Daerah
const daerahLabels = ['Kab. Pandeglang', 'Kab. Lebak ', 'Kab. Tangerang', 'Kab. Serang', 'Tangerang', 'Cilegon','Serang','Tangerang Selatan'];

// PIE CHART - Jumlah Guru
const pieChartGuruOptions = {
  series: [1255,1020,4731,1288,2690,1401,980,986],
  chart: {
    width: 325,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#cc3c43', '#367952'],
  title: {
    text: 'Jumlah Guru'
  }
};

const pieChartGuru = new ApexCharts(
  document.querySelector('#pie-chart-guru'),
  pieChartGuruOptions
);
pieChartGuru.render();

// PIE CHART - Jumlah Siswa
const pieChartSiswaOptions = {
  series: [16590, 18998, 34772, 19895, 27220, 6804,9401,21134],
  chart: {
    width: 325,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#cc3c43', '#367952'],
  title: {
    text: 'Jumlah Siswa'
  }
};

const pieChartSiswa = new ApexCharts(
  document.querySelector('#pie-chart-Siswa'),
  pieChartSiswaOptions
);
pieChartSiswa.render();


// PIE CHART - Jumlah Sekolah
const pieChartSekolahOptions = {
  series: [34,51,154,76,90,22,30,75],
  chart: {
    width: 325,
    type: 'pie',
  },
  labels: daerahLabels,
  colors: ['#246dec', '#cc3c43', '#367952', '#f5b74f', '#4f35a1', '#f59342', '#cc3c43', '#367952'],
  title: {
    text: 'Jumlah Sekolah'
  }
};

const pieChartSekolah = new ApexCharts(
  document.querySelector('#pie-chart-sekolah'),
  pieChartSekolahOptions
);
pieChartSekolah.render();