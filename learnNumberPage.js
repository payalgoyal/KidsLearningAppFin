var pageNumber;
function learnNumberPage(page){
	pageNumber = page;
	if(page=='1'){
		document.getElementById('prevButton').disabled = 'true';
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>1</td><td class='number'>ONE</td></tr><tr> \
			<td class='number'>2</td>\
			<td class='number'>TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>3</td>\
			<td class='number'>THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>4</td>\
			<td class='number'>FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>5</td>\
			<td class='number'>FIVE</td>\
		</tr>\
		<tr>\
			<td class='number' >6</td>\
			<td class='number' >SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>7</td>\
			<td class='number'>SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>8</td>\
			<td class='number'>EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>9</td>\
			<td class='number'>NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>10</td>\
			<td class='number'>TEN</td>\
		</tr>\
		";
	}
	
	if(page=='2'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>11</td><td class='number'>ELEVEN</td></tr><tr> \
			<td class='number'>12</td>\
			<td class='number'>TWELVE</td>\
		</tr>\
		<tr>\
			<td class='number'>13</td>\
			<td class='number'>THIRTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>14</td>\
			<td class='number'>FOURTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>15</td>\
			<td class='number'>FIFTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>16</td>\
			<td class='number'>SIXTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>17</td>\
			<td class='number'>SEVENTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>18</td>\
			<td class='number'>EIGHTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>19</td>\
			<td class='number'>NINTEEN</td>\
		</tr>\
		<tr>\
			<td class='number'>20</td>\
			<td class='number'>TWENTY</td>\
		</tr>\
		";
	}
	
	if(page=='3'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>21</td><td class='number'>TWENTY ONE</td></tr><tr> \
			<td class='number'>22</td>\
			<td class='number'>TWENTY TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>23</td>\
			<td class='number'>TWENTY THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>24</td>\
			<td class='number'>TWENTY FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>25</td>\
			<td class='number'>TWENTY FIVE</td>\
		</tr>\
		<tr>\
			<td class='number'>26</td>\
			<td class='number'>TWENTY SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>27</td>\
			<td class='number'>TWENTY SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>28</td>\
			<td class='number'>TWENTY EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>29</td>\
			<td class='number'>TWENTY NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>30</td>\
			<td class='number'>THIRTY</td>\
		</tr>\
		";
	}
	
	if(page=='4'){
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>31</td><td class='number'>THIRTY ONE</td></tr><tr> \
			<td class='number'>32</td>\
			<td class='number'>THIRTY TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>33</td>\
			<td class='number'>THIRTY THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>34</td>\
			<td class='number'>THIRTY FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>35</td>\
			<td class='number'>THIRTY FIVE</td>\
		</tr>\
		<tr>\
			<td class='number'>36</td>\
			<td class='number'>THIRTY SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>37</td>\
			<td class='number'>THIRTY SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>38</td>\
			<td class='number'>THIRTY EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>39</td>\
			<td class='number'>THIRTY NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>40</td>\
			<td class='number'>FORTY</td>\
		</tr>\
		";
	}
	
	if(page=='5'){
		document.getElementById('nextButton').disabled = 'true';
		document.getElementById('numberTable').innerHTML = "<tr><td class='number'>41</td><td class='number'>FORTY ONE</td></tr><tr> \
			<td class='number'>42</td>\
			<td class='number'>FORTY TWO</td>\
		</tr>\
		<tr>\
			<td class='number'>43</td>\
			<td class='number'>FORTY THREE</td>\
		</tr>\
		<tr>\
			<td class='number'>44</td>\
			<td class='number'>FORTY FOUR</td>\
		</tr>\
		<tr>\
			<td class='number'>45</td>\
			<td class='number'>FORTY FIVE</td>\
		</tr>\
		<tr>\
			<td class='number'>46</td>\
			<td class='number'>FORTY SIX</td>\
		</tr>\
		<tr>\
			<td class='number'>47</td>\
			<td class='number'>FORTY SEVEN</td>\
		</tr>\
		<tr>\
			<td class='number'>48</td>\
			<td class='number'>FORTY EIGHT</td>\
		</tr>\
		<tr>\
			<td class='number'>49</td>\
			<td class='number'>FORTY NINE</td>\
		</tr>\
		<tr>\
			<td class='number'>50</td>\
			<td class='number'>FIFTY</td>\
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