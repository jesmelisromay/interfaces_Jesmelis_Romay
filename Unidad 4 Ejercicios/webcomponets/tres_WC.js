const elementdetails = document.createElement('template');
 
elementdetails.innerHTML = `
  <style>
   
  p {
      color:black;
      font-style:oblique;   
      font-size:18px;  
      font-family:courier;  
    }
    
    div{
      color:white;
      background-color: #00aae4;
      width:70px;
      border-radius: 5px;
      padding: 5px;
      font-weight: bold;
    }

    summary span {
      color:blue;
      font-size:20px;   
      text-transform: uppercase;

    }

    div +p{
      font-style: normal;
    }

   	
  </style>


  <details> 
  <summary> <span> <slot name="titulo">  NECESITA NOMBRE </slot> </span> </summary> 
  <p> <slot name="desc"> NECESITA DESCRIPCIÓN </slot> </p>
  <div>Atributos</div>
  <p> <slot name="atri"> Ninguno </slot> </p>
  <hr>


</details>
`;



customElements.define('element-details',
	class extends HTMLElement {
		constructor() {
            super();     

            this.ShadowRoot = this.attachShadow({ mode: 'open' });                         
			      this.ShadowRoot.appendChild(elementdetails.content.cloneNode(true)); 
        }
               
    }
)


   
    
    
    
  window.customElements.define('element-details', elementdetails);