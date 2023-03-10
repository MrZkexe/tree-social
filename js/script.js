const carteira = "bc1qqdlfgenrgt4ksqgev8ze4q58pcycfjqmcr9ett";
var apis = [`https://blockchain.info/q/addressbalance/${carteira}`, 'https://economia.awesomeapi.com.br/json/BTC-BRL/1'];

var resp = [];

setInterval( async () => {
  for(send_url in apis){
      value =  await fetch(apis[send_url]);
      if(send_url <= 0){
        value = await value.text() / 100000000;
        resp.push(value);
      }else{
        value = await value.json()
        resp.push(value[0].bid);
      }
    }
    real = resp[1] * resp[0];
    document.getElementById("real").innerHTML = "R$: " + Math.floor(real) + "," + ((real - Math.floor(real)) * 100).toFixed(0);
    resp = [];    
    document.getElementById("carteira").innerHTML = "Carteira: " + carteira;
}, 10000);