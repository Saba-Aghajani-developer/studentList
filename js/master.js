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
let flag3 = 0
let arr1 = []
let arr2 = []
let res1 = []
let res2 = []
let _sec1 = []
let _sec2 = []
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
    if (
        _inp1 == null || _inp1 == ''
    ) {
        if (_inp2 == null || _inp2 == '') {
            document.getElementById('lable1').style.display = 'flex'
            document.getElementById('lable1').style.color = 'red'
            document.getElementById('lable1').style.opacity = 1
            document.getElementById('lable2').style.display = 'flex'
            document.getElementById('lable2').style.color = 'red'
            document.getElementById('lable2').style.opacity = 1

        }
    } else {
        document.getElementById('lable1').style.display = 'none'
        document.getElementById('lable2').style.display = 'none'
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
        span = document.createElement('span')
        span.innerHTML = _inp1
        console.log(span);
        document.getElementById('inp1').value = ''
        document.getElementById('inp2').value = ''
        // min 
        if (flag == 0) {
            min = _inp2
            flag++
        } else {
            if (min > _inp1) {
                min = _inp1
            }
        }
        // // max 
        // if (max < _inp2) {
        //     max = _inp2
        // }
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
        // sort 
        if (flag3 == 0) {
            arr1.push(_inp1)
            arr2.push(_inp2)
            res1 = arr1
            res2 = arr2
            flag3++
        } else {
            if ((Number(res2[flag3 - 1])) > (Number(_inp2))) {
                res2.push(_inp2)
                res1.push(_inp1)
                flag3++
                console.log('yes');
            } else {
                res2.unshift(_inp2)
                res1.unshift(_inp1)
                flag3++
                console.log('no');
            }
        }
        console.log('res1 : '+res1);
        console.log('res2 : '+res2);
        // clear 
        _clear()

    }
})
function _clear() {
    _inp1 = ''
    _inp2 = ''
}

document.getElementById('button2').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'max score is:' + res2[0]
})
document.getElementById('svg2').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    document.getElementById('ddd').innerHTML = 'max score is:' + res2[0]
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
// sort 
document.getElementById('button9').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    res1.forEach((val, item) => {
        document.getElementById('lable1').style.display = 'none'
        document.getElementById('lable2').style.display = 'none'
        _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        left = document.createElement("div");
        right = document.createElement("div");
        left.classList.add('left')
        right.classList.add('lr')
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerText = val + "'s score is :"
        right.innerText = res2[item]
    })
})
document.getElementById('svg9').addEventListener('click', () => {
    document.getElementById('ddd').innerHTML = ''
    const element = document.getElementsByClassName('box')[0]
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    res1.forEach((val, item) => {
        document.getElementById('lable1').style.display = 'none'
        document.getElementById('lable2').style.display = 'none'
        _div = document.createElement("div");
        document.getElementsByClassName('box')[0].appendChild(_div)
        _div.classList.add('test')
        left = document.createElement("div");
        right = document.createElement("div");
        left.classList.add('left')
        right.classList.add('lr')
        _div.appendChild(left)
        _div.appendChild(right)
        left.innerText = val + "'s score is :"
        right.innerText = res2[item]
    })
})
