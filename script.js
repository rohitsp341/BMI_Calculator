var myform=document.querySelector('#myform');
    var container=document.querySelector('.container');
    var container2=document.querySelector('.container2');

    myform.addEventListener('submit',(event)=>{

        event.preventDefault();
        var height=parseFloat(document.querySelector('#num1').value);
        var weight=parseFloat(document.querySelector('#num2').value);
        var result = (weight/((height*height)/10000));

        // var result = weight/Math.pow(height,2);

        var numcontainer=document.createElement('p');
        numcontainer.innerHTML='Resulit is :'+result.toFixed(2);
        container.innerHTML='';
        container.appendChild(numcontainer);
        


        var numcontainer2=document.createElement('p');
        container2.innerHTML='';
        if(result<18.5){
            numcontainer2.innerHTML='UnderWeight';
            
        }

        else if(result>=18.5 && result<=24.9){
            numcontainer2.innerHTML='Normal';
            
        }

        else if(result>=25 && result<=29.9){
            numcontainer2.innerHTML='Over Weight';
            
        }

        else if(result>=30 && result<=39.9){
            numcontainer2.innerHTML='Obese';
            
        }
        else{
            numcontainer2.innerHTML='Morbidly';
            
        }
        
        container2.appendChild(numcontainer2);


    });
