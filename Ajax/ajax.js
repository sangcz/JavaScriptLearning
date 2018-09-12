/*ajax封装*/
function ajax(opts) {
	var url = opts.url; // 请求地址
	var type = opts.type || 'GET';
	var dataType = opts.dataType || 'json';
	var data = opts.data || {};
	var onsuccess = opts.onsuccess || function(){};
	var onerror = opts.onerror || function () {};

	// 处理用户参数
	var dataStr = [];
	for (key in data) {
		dataStr.push(key + '=' + data[key])
	}
	dataStr = dataStr.join('&');

	// GET
	if (type === 'GET') {
		url += '?' + dataStr;
	}

	var xhr = new XMLHttpRequest();
	console.log(xhr.readyState);
	xhr.open(type, url, true);
	console.log(xhr.readyState);
	xhr.onload = function () {
		console.log(xhr.readyState);
		if (xhr.status === 200 && xhr.readyState === 4) {
			if (dataType === 'json') {
				onsuccess(JSON.parse(xhr.responseText))
			} else {
				onsuccess(xhr.responseText)
			}
		} else {
			onerror()
		}
	};
	// 网络中断
	xhr.onerror = onerror;
	// POST
	if (type === 'POST') {
		xhr.send(dataStr);
	} else {
		xhr.send();
		console.log(xhr.readyState);
	}
}