  const form = document.querySelector('#searchForm');
  const res =  document.querySelector('#tableResult');
  var upd;
   form.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(upd){
      clearTimeout(upd);
    }
   const ctype = form.elements.coinType.value;
   
   fetchPrice(ctype); 
  });  
  
  const fetchPrice = async(ctype)=>{
    const aa = await axios.get(`https://api.coinstats.app/public/v1/coins/${ctype}?currency=INR`);
    console.log(aa.data.coin.price);
    const price = aa.data.coin.price;
    const volume = aa.data.coin.volume;
    const change = aa.data.coin.priceChange1d;
    const base = aa.data.coin.name;
    const target = 'INR';
    res.innerHTML =`<tr style="background-color:grey; color:white; font-weight:700">
    <td>
        Property
    </td>
    <td>Value</td>
</tr>
<tr>
    <td>
        ${base}
    </td>
    <td>${price} ${target}</td>
</tr>
<tr>
    <td>
        Volume
    </td>
    <td>${volume}</td>
</tr>
<tr>
    <td>
        Change
    </td>
    <td>${change}</td>
</tr>`

   upd=setTimeout(()=>fetchPrice(ctype),100);
  }
