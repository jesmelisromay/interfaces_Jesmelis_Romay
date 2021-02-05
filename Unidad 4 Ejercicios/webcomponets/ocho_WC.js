/*class progressbar extends HTMLElement {
    constructor () {
      super ();    
     
      this.attachShadow({mode: 'open'});  
     
      this.interv; 
      
      this.pararb=this.shadowRoot.querySelector("#parar");   

      this.shadowRoot.addEventListener('click', () => {              
        this.rellenar(10);
      });


      //this.pararb.addEventListener('click', () => {               
      // this.parar();
     // });  

        
    }


    connectedCallback(){

   this.shadowRoot.innerHTML = ` 
        <style>
        #fuera{
            border: solid pink;           
        }

        #dentro{
            background-color: palevioletred;
        }        

    </style>

    <div id="aceptar"><slot></slot> </div>  

    <div id="parar"> <slot></slot> </div>

    <div id="fuera"><slot></slot>

    <div id="dentro"><slot></slot></div>     
    
    </div>        
        
        `;
    }

      

       rellenar(t){
            
        clearInterval(this.interv);
        
        var i=0;

            var tamanio= this.shadowRoot.querySelector("#fuera").clientWidth;
              

            this.interv= setInterval(() => {
            
            this.shadowRoot.querySelector("#dentro").style.width=i+"px";

            i++;
            var porcent=100/tamanio;
            this.shadowRoot.querySelector("#dentro").textContent=Math.trunc(i*porcent)+"%";

            if(i==tamanio){
                clearInterval(this.interv);
            }

        }, t);          

    }

     parar(){
        clearInterval(this.interv);
    }	 
	
	
  }
  customElements.define('progress-bar', progressbar);*/


  
  class progressbar extends HTMLElement {
    constructor () {
      super ();    
     
        
    }


    connectedCallback(){

        this.dentro= document.getElementById("dentro");
        var pararb= document.getElementById("parar");
        this.fuera= document.getElementById("fuera");   
        var aceptar= document.getElementById("aceptar");  

        this.interv;      
        
  
        var inter = this.getAttribute ('changeInterval') || 10 ;

        aceptar.addEventListener('click', () => {
            this.rellenar(inter);
          });
    
        pararb.addEventListener('click', () => {
            this.parar();
          });

    }

      

       rellenar(t){
            
        this.dentro.style.backgroundColor="palevioletred";
       
        
        clearInterval(this.interv);
        
        var i=0;
        var tamanio = document.getElementById("fuera").clientWidth ;           

            this.interv= setInterval(() => {
            
            this.dentro.style.width=i+"px";

            i++;
            var porcent=100/tamanio;
            this.dentro.innerHTML=Math.trunc(i*porcent)+"%";

            if(i==tamanio){
                clearInterval(this.interv);
            }

        }, t);          

    }

     parar(){
        clearInterval(this.interv);
    }

	 
	
	
  }
  customElements.define('progress-bar', progressbar);