let _inp1 = 0
let _inp2 = 0
let flag = 0
let k = 0
let span
let max = -10000000
let min
let _div
let _div2
let _div3
let avg
let sum = 0
let left
let right
let _name
let pass = []
let fail = []
let all = []
let tt = document.getElementsByClassName('box')[0]
let j = 0
document.getElementById('inp1').addEventListener('keyup', () => {
    _inp1 = document.getElementById('inp1').value
    if (
        (_inp1.search(/[ا-ی , 0-9 , ! , @ , # , $ , % , ^  , & , * ( , ) , _ , - , + , = , ` , ~ , ? , " , ' , : , ; , |]/)) >= 0
    ) {
        document.getElementById("inp1").value = _inp1.substring(0, _inp1.length - 1)
    }
})
document.getElementById('inp2').addEventListener('keyup', () => {
    _inp2 = document.getElementById('inp2').value
    if (
        (_inp2.search(/[ا-ی , a-z, ! , @ , # , $ , % , ^  , & , * ( , ) , _ , - , + , = , ` , ~ , ? , " , ' , : , ; , | ]/)) >= 0
    ) {
        document.getElementById("inp2").value = _inp2.substring(0, _inp2.length - 1)
    }
})
document.getElementById('button1').addEventListener('click', () => {
    k++
    _div = document.createElement("div");
    document.getElementsByClassName('box')[0].appendChild(_div)
    _div.classList.add('test')
    left = document.createElement("div");
    right = document.createElement("div");
    left.classList.add('left')
    right.classList.add('lr')
    _div.appendChild(left)
    _div.appendChild(right)
    left.innerText = _inp1 + "'s score is :"
    right.innerText = _inp2
    console.log(_inp1);
    console.log(_inp2);
    span = document.createElement('span')
    span.innerHTML = _inp2
    console.log(span);
    document.getElementById('inp1').value = ''
    document.getElementById('inp2').value = ''
    // min 
    if (flag == 0) {
        min = _inp2
        flag++
    } else {
        if (min > _inp2) {
            min = _inp2
        }
    }
    // max 
    if (max < _inp2) {
        max = _inp2
    }
    // avg 
    sum = Number(sum) + Number(_inp2)
    avg = sum / (k)
    // pass & fail
    if (_inp2 >= 10) {
        pass.push([_inp1, _inp2])
        console.log('pass is : ' + pass);
    } else {
        fail.push([_inp1, _inp2])
        console.log('fail is : ' + fail);
    }
    // all 
    all.push([_inp1, _inp2])
    num.push(_inp2)
})
document.getElementById('button2').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'max score is:' + max
})
document.getElementById('svg2').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'max score is:' + max
})
document.getElementById('button6').addEventListener('click', () => {
    location.reload()
})
document.getElementById('svg6').addEventListener('click', () => {
    location.reload()
})
document.getElementById('button3').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'min score is:' + min
})
document.getElementById('svg3').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'min score is:' + min
})
document.getElementById('button4').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'avg score is:' + avg
})
document.getElementById('svg4').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'avg score is:' + avg
})

document.getElementById('button7').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    pass.forEach((val, i) => {
        let _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        let left = document.createElement("div");
        let right = document.createElement("div");
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerHTML = val[0] + "'s score is :"
        right.innerHTML = val[1]
        left.classList.add('left')
        right.classList.add('lr')
        console.log(i + ':' + val[0]);
        console.log(i + ':' + val[1]);
    })

})
document.getElementById('svg7').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    pass.forEach((val, i) => {
        let _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        let left = document.createElement("div");
        let right = document.createElement("div");
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerHTML = val[0] + "'s score is :"
        right.innerHTML = val[1]
        left.classList.add('left')
        right.classList.add('lr')
        console.log(i + ':' + val[0]);
        console.log(i + ':' + val[1]);
    })

})
document.getElementById('button8').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    fail.forEach((val, i) => {
        let _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        let left = document.createElement("div");
        let right = document.createElement("div");
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerHTML = val[0] + "'s score is :"
        right.innerHTML = val[1]
        left.classList.add('left')
        right.classList.add('lr')
        console.log(i + ':' + val[0]);
        console.log(i + ':' + val[1]);
    })

})
document.getElementById('svg8').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    fail.forEach((val, i) => {
        let _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        let left = document.createElement("div");
        let right = document.createElement("div");
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerHTML = val[0] + "'s score is :"
        right.innerHTML = val[1]
        left.classList.add('left')
        right.classList.add('lr')
        console.log(i + ':' + val[0]);
        console.log(i + ':' + val[1]);
    })

})
document.getElementById('button0').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    all.forEach((val, i) => {
        let _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        let left = document.createElement("div");
        let right = document.createElement("div");
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerHTML = val[0] + "'s score is :"
        right.innerHTML = val[1]
        left.classList.add('left')
        right.classList.add('lr')
        console.log(i + ':' + val[0]);
        console.log(i + ':' + val[1]);
    })

})
document.getElementById('svg0').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    all.forEach((val, i) => {
        let _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        let left = document.createElement("div");
        let right = document.createElement("div");
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerHTML = val[0] + "'s score is :"
        right.innerHTML = val[1]
        left.classList.add('left')
        right.classList.add('lr')
        console.log(i + ':' + val[0]);
        console.log(i + ':' + val[1]);
    })

})
document.getElementsByClassName('icon1')[0].addEventListener('click', () => {
    let _icon = document.querySelectorAll('.icon1>svg')
    if (j == 0) {
        document.getElementsByClassName('left-side')[0].style.width = '18%'
        document.getElementsByClassName('right-side')[0].style.width = '82%'
        _icon[0].style.display = 'flex'
        _icon[1].style.display = 'none'
        let _buttons = document.querySelectorAll('button')
        _buttons.forEach((val) => {
            val.style.display = 'flex'
            j++
        })
    } else {
        document.getElementsByClassName('left-side')[0].style.width = '7%'
        document.getElementsByClassName('right-side')[0].style.width = '93%'
        _icon[1].style.display = 'flex'
        _icon[0].style.display = 'none'
        let _buttons = document.querySelectorAll('button')
        _buttons.forEach((val) => {
            val.style.display = 'none'
            j--
        })
    }
})