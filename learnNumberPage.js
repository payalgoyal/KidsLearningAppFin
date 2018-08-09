var pageNumber;
function learnNumberPage(page){
	pageNumber = page;
	if(page=='1'){
		document.getElementById('prevButton').disabled = 'true';
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>1</td><td class='numberSpell'>ONE</td></tr><tr> \
			<td class='number'>2</td>\
			<td class='numberSpell'>TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>3</td>\
			<td class='numberSpell'>THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>4</td>\
			<td class='numberSpell'>FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>5</td>\
			<td class='numberSpell'>FIVE</td>\
		</tr>\
		<tr>\
			<td class='number' >6</td>\
			<td class='numberSpell' >SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>7</td>\
			<td class='numberSpell'>SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>8</td>\
			<td class='numberSpell'>EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>9</td>\
			<td class='numberSpell'>NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>10</td>\
			<td class='numberSpell'>TEN</td>\
		</tr>\
		";
	}
	
	if(page=='2'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>11</td><td class='numberSpell'>ELEVEN</td></tr><tr> \
			<td class='number'>12</td>\
			<td class='numberSpell'>TWELVE</td>\
		</tr>\
		<tr>\
			<td class='number'>13</td>\
			<td class='numberSpell'>THIRTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>14</td>\
			<td class='numberSpell'>FOURTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>15</td>\
			<td class='numberSpell'>FIFTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>16</td>\
			<td class='numberSpell'>SIXTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>17</td>\
			<td class='numberSpell'>SEVENTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>18</td>\
			<td class='numberSpell'>EIGHTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>19</td>\
			<td class='numberSpell'>NINTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>20</td>\
			<td class='numberSpell'>TWENTY</td>\
		</tr>\
		";
	}
	
	if(page=='3'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>21</td><td class='numberSpell'>TWENTY ONE</td></tr><tr> \
			<td class='number'>22</td>\
			<td class='numberSpell'>TWENTY TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>23</td>\
			<td class='numberSpell'>TWENTY THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>24</td>\
			<td class='numberSpell'>TWENTY FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>25</td>\
			<td class='numberSpell'>TWENTY FIVE</td>\
		</tr>\
		<tr>\
			<td class='number'>26</td>\
			<td class='numberSpell'>TWENTY SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>27</td>\
			<td class='numberSpell'>TWENTY SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>28</td>\
			<td class='numberSpell'>TWENTY EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>29</td>\
			<td class='numberSpell'>TWENTY NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>30</td>\
			<td class='numberSpell'>THIRTY</td>\
		</tr>\
		";
	}
	
	if(page=='4'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>31</td><td class='numberSpell'>THIRTY ONE</td></tr><tr> \
			<td class='number'>32</td>\
			<td class='numberSpell'>THIRTY TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>33</td>\
			<td class='numberSpell'>THIRTY THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>34</td>\
			<td class='numberSpell'>THIRTY FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>35</td>\
			<td class='numberSpell'>THIRTY FIVE</td>\
		</tr>\
		<tr>\
			<td class='number'>36</td>\
			<td class='numberSpell'>THIRTY SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>37</td>\
			<td class='numberSpell'>THIRTY SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>38</td>\
			<td class='numberSpell'>THIRTY EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>39</td>\
			<td class='numberSpell'>THIRTY NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>40</td>\
			<td class='numberSpell'>FORTY</td>\
		</tr>\
		";
	}
	
	if(page=='5'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>41</td><td class='numberSpell'>FORTY ONE</td></tr><tr> \
			<td class='number'>42</td>\
			<td class='numberSpell'>FORTY TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>43</td>\
			<td class='numberSpell'>FORTY THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>44</td>\
			<td class='numberSpell'>FORTY FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>45</td>\
			<td class='numberSpell'>FORTY FIVE</td>\
		</tr>\
		<tr>\
			<td class='number'>46</td>\
			<td class='numberSpell'>FORTY SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>47</td>\
			<td class='numberSpell'>FORTY SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>48</td>\
			<td class='numberSpell'>FORTY EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>49</td>\
			<td class='numberSpell'>FORTY NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>50</td>\
			<td class='numberSpell'>FIFTY</td>\
		</tr>\
		";
	}
	if(page=='6'){
		document.getElementById('nextButton').disabled = 'true';
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>60</td><td class='numberSpell'>Sixty</td></tr><tr> \
			<td class='number'>70</td>\
			<td class='numberSpell'>SEVENTY</td>\
		</tr>\
		<tr>\
			<td class='number'>80</td>\
			<td class='numberSpell'>EIGHTY</td>\
		</tr>\
		<tr>\
			<td class='number'>90</td>\
			<td class='numberSpell'>NINETY</td>\
		</tr>\
		<tr>\
			<td class='number'>100</td>\
			<td class='numberSpell'>HUNDRED</td>\
		</tr>\
		<tr>\
			<td class='number'>200</td>\
			<td class='numberSpell'>TWO HUNDRED</td>\
		</tr>\
		<tr>\
			<td class='number'>300</td>\
			<td class='numberSpell'>THREE HUNDRED</td>\
		</tr>\
		<tr>\
			<td class='number'>1000</td>\
			<td class='numberSpell'>THOUSAND</td>\
		</tr>\
		<tr>\
			<td class='number'>2000</td>\
			<td class='numberSpell'>TWO THOUSAND</td>\
		</tr>\
		<tr>\
			<td class='number'>3000</td>\
			<td class='numberSpell'>THREE THOUSAND</td>\
		</tr>\
		";
	}
}

function prevPage(){
	pageNumber = parseInt(pageNumber) - 1;
	window.document.location.href = "learnNumbers.html?page="+pageNumber;
}

function nextPage(){
	pageNumber = parseInt(pageNumber) + 1;
	window.document.location.href = "learnNumbers.html?page="+pageNumber;
}