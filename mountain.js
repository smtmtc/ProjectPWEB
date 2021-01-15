function toggle() {
    var x = document.getElementById('btn')
    var y = document.getElementById('show_hide')
    if (y.value=='Show More') {
	    x.style.display = 'block'
    	y.value='Show Less'
    } else {
        x.style.display = 'none'
    	y.value='Show More'            
    }
}

function toggle1() {
    var x = document.getElementById('btn1')
    var y = document.getElementById('show_hide1')
    if (y.value=='Show More1') {
	    x.style.display = 'block'
    	y.value='Show Less1'
    } else {
        x.style.display = 'none'
    	y.value='Show More1'            
    }
}

function toggle2() {
    var x = document.getElementById('btn2')
    var y = document.getElementById('show_hide2')
    if (y.value=='Show More2') {
        x.style.display = 'block'
        y.value='Show Less2'
    } else {
        x.style.display = 'none'
        y.value='Show More2'            
    }
}