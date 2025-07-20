
// 課題3-2 のプログラムはこの関数の中に記述すること
function print(data) {
  console.log('経度: ' + data.coord.lon +'(東経)');
  console.log('緯度: ' + data.coord.lat +'(北緯)');
  console.log('天気: ' + data.weather[0].description );
  console.log('最低気温: ' + data.main.temp_min + '℃');
  console.log('最高気温: '+data.main.temp_max + '℃');
  console.log('湿度: ' + data.main.humidity + '℃');
  console.log('風速: ' + data.wind.speed + 'm/s');
  console.log('風向: ' + data.wind.deg + '°');
  console.log('都市名: ' + data.name);
  

}

// 課題5-1 の関数 printDom() はここに記述すること
function printDom(data) {

  let m = document.querySelector('div.migawari');
  m.remove();

  let A = document.querySelector('div#result');
  A.textContent = '';
  let a = document.createElement('div');
  a.classList.add('zentai');
  a.classList.add('migawari')
  A.insertAdjacentElement('afterend', a);
  let aa = document.createElement('div');
  aa.classList.add('short');
  a.insertAdjacentElement('beforeend', aa);
  aa.textContent = '都市名: ' + data.name;
  
  let check1 = document.querySelector('#ido');
  let check2 = document.querySelector('#keido');
  let check3 = document.querySelector('#tenki');
  let check4 = document.querySelector('#saitei');
  let check5 = document.querySelector('#saikou');
  let check6 = document.querySelector('#situdo');
  let check7 = document.querySelector('#fuusoku');
  let check8 = document.querySelector('#fuukou');

  if(check1.checked) {
    let b = document.createElement('div');
    b.classList.add('long');
    a.insertAdjacentElement('beforeend', b);
    b.textContent = '緯度: ' + data.coord.lat ;
  }

  if(check2.checked) {
    let c = document.createElement('div');
    c.classList.add('long');
    a.insertAdjacentElement('beforeend', c);
    c.textContent = '経度: ' + data.coord.lon ;
  }

  if(check3.checked) {
    let d = document.createElement('div');
    d.classList.add('long');
    a.insertAdjacentElement('beforeend', d);
    d.textContent = '天気: ' + data.weather[0].description;
  }

  if(check4.checked) {
    let e = document.createElement('div');
    e.classList.add('long');
    a.insertAdjacentElement('beforeend', e);
    e.textContent = '最低気温: ' + data.main.temp_min + '℃';
  }

  if(check5.checked) {
    let f = document.createElement('div');
    f.classList.add('long');
    a.insertAdjacentElement('beforeend', f);
    f.textContent = '最高気温: ' + data.main.temp_max + '℃';
  }

  if(check6.checked) {
    let g = document.createElement('div');
    g.classList.add('long');
    a.insertAdjacentElement('beforeend', g);
    g.textContent = '湿度: ' + data.main.humidity + '%';
  }

  if(check7.checked) {
    let h = document.createElement('div');
    h.classList.add('long');
    a.insertAdjacentElement('beforeend', h);
    h.textContent = '風速: ' + data.wind.speed + 'm/s';
  }

  if(check8.checked) {
    let i = document.createElement('div');
    i.classList.add('long');
    a.insertAdjacentElement('beforeend', i);
    i.textContent = '風向: ' + data.wind.deg + '°(南南西)';
  }

}

// 課題6-1 のイベントハンドラ登録処理は以下に記述
let se = document.querySelector('#sendRequest');
se.addEventListener('click', sendRequest);
let Toshi = document.querySelector('#toshi');
let img = document.querySelector("#cityimage");

// 課題6-1 のイベントハンドラ sendRequest() の定義
function sendRequest() {

  let selected = Toshi.value;
  let url;
  if(selected === "Cairo") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/360630.json';
    img.src = 'project/カイロ.jpg';
    img.alt = "カイロの写真";
  }
  else if(selected === "Moscow") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/524901.json';
    img.src = 'project/モスクワ.jpg';
    img.alt = "モスクワの写真";
  }
  else if(selected === "Johannesburg") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/993800.json';
    img.src = 'project/ヨハネスブルグ.jpg';
    img.alt = "ヨハネスブルグの写真";
  }
  else if(selected === "Beijing") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1816670.json';
    img.src = 'project/北京.jpg';
    img.alt = "北京の写真";
  }
  else if(selected === "Tokyo") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1850147.json';
    img.src = 'project/東京.jpg';
    img.alt = "東京の写真";
  }
  else if(selected === "Singapore") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/1880252.json';
    img.src = 'project/シンガポール.jpg';
    img.alt = "シンガポールの写真";
  }
  else if(selected === "Sydney") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2147714.json';
    img.src = 'project/シドニー.jpg';
    img.alt = "シドニーの写真";
  }
  else if(selected === "London") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2643743.json';
    img.src = 'project/ロンドン.jpg';
    img.alt = "ロンドンの写真";
  }
  else if(selected === "Paris") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/2968815.json';
    img.src = 'project/パリ.jpg';
    img.alt = "パリの写真";
  }
  else if(selected === "Rio") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/3451189.json';
    img.src = 'project/リオデジャネイロ.jpg';
    img.alt = "リオデジャネイロの写真";
  }
  else if(selected === "NewYork") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5128581.json';
    img.src = 'project/ニューヨーク.jpg';
    img.alt = "ニューヨークの写真";
  }
  else if(selected === "Los") {
    url = 'https://www.nishita-lab.org/web-contents/jsons/openweather/5368361.json';
    img.src = 'project/ロサンゼルス.jpg';
    img.alt = "ロサンゼルスの写真";
  }


  if(url) {
    axios.get(url)
      .then(showResult)
      .catch(showError)
      .then(finish)
  }
  else {
    console.log('都市が選ばれていません');
  }
}

// 課題6-1: 通信が成功した時の処理は以下に記述
function showResult(resp) {
  let data = resp.data;

  
  console.log(data);
  printDom(data);
}

// 課題6-1: 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 課題6-1: 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}

////////////////////////////////////////
// 以下はグルメのデータサンプル
// 注意: 第5回までは以下を変更しないこと！
// 注意2: 課題6-1 で以下をすべて削除すること
let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

