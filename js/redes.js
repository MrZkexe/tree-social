
$(document).ready(function () {
	$.getJSON("jsons/redes.json",
		function (data) {
			var rede = "";
			$.each(data, function (key, valor) {
				rede += '<div id="r-box">';
				rede += '<i class="fa-brands fa-' + valor.svg + '"></i>';
				rede += '<ul>';
				rede += '<a href="' + valor.link+ '">' + valor.rede + '</a>';
				rede += '<p>' + valor.desc + '</p>';
				rede += '</ul>';
				rede += '</div>';
			});
			$("#redes").append(rede);
		});
});