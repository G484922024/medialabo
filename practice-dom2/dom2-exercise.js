//////////////// ここは書き換えてはいけない！ 

let campus = {
	address: "八王子市館町",
	buildingD: ["D101", "D102", "D103", "D201", "D202", "D203", "D204", "D205"],
	lon: 35.624869704425,
	lat: 139.28201056633
};

let gakka = [
	{name: "機械システム工学科", ename: "Department of Mechanical Systems Engineering"},
	{name: "電子システム工学科", ename: "Department of Electronics and Computer Systems"},
	{name: "情報工学科", ename: "Department of Computer Science"},
	{name: "デザイン学科", ename: "Department of Design"}
];

//////////////// ここから下にプログラムを書きたそう!

let x = document.querySelector('button#show');
x.addEventListener('click', show);

function show(){
	let a = document.querySelector('h2#addr');
	let b = document.createElement('p');
	a.insertAdjacentElement('afterend', b);
	b.textContent = campus.address;


	let d = document.querySelector('h2#dept');
	let u = document.createElement('ul');
	d.insertAdjacentElement('afterend',u);
	let k = document.createElement('li');
	u.insertAdjacentElement('beforeend',k);
	k.textContent = gakka[0].name;
	let l = document.createElement('li');
	u.insertAdjacentElement('beforeend', l);
	l.textContent = gakka[1].name;
	let m = document.createElement('li');
	u.insertAdjacentElement('beforeend', m);
	m.textContent = gakka[2].name; 
	let n = document.createElement('li');
	u.insertAdjacentElement('beforeend', n); 
	n.textContent = gakka[3].name; 
}
