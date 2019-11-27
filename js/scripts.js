window.onload = function(e){
    
    var inp1 = document.querySelector('input[name=num1]');
    var inp2 = document.querySelector('input[name=num2]');
    var span = document.querySelector('.res');
    
    var buttons = document.querySelectorAll('input[type=button]'); //получаем все кнопки
    
    for(var i = 0; i < buttons.length; i++){ //проходимся циклом по кнопкам
        buttons[i].onclick = function(){
            var op = this.getAttribute('data-op');
            calcForm(op); //запускаем с нужным знаком итерации
        }
    }
    
    function calcForm(op){
        var a = parseInt(inp1.value);
        var b = parseInt(inp2.value);
        var res;
        
        switch (op) {
            case '+': 
                res = a + b;
                break;
            case '-': 
                res = a - b;            
                break;
            case '*': 
                res = a * b;
                break;
            case '/': 
                res = a / b;            
                break;            
        }
        
        span.innerHTML = res;
    }
}
