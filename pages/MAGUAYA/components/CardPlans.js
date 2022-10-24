class CardPlans extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode:'open'});
        /* get atributtes
            this.var = this.getAttribute('attribute');
        */
        this.title = this.getAttribute('title');
        this.subtitle = this.getAttribute('subtitle');
        this.price = this.getAttribute('price')
    }
    getTemplate(){
        const template = document.createElement('template');
        template.innerHTML=`
        <div class="card-plan">
            <div class="header-plan">
                <h1>${this.title}</h1>
                <p>${this.subtitle}</p>
            </div>

            <h2 class="price">${this.price}$</h2>

            <slot name="list" class="list-plan"></slot>

            <span class="btn-plan-container">
                <a class="btn-plan" href="https://api.whatsapp.com/send?phone=59160636949&text=Hola!, me gustaria saber más" target="_Blank"">CONSULTAR</a>
            </span>
        </div>
        ${this.getStyles()}
        `;
        return template;
    }
    getStyles(){
        return `
        <style>
        *{
            padding:0;
            margin:0;
            box-sizing:border-box;
        }
        
        .card-plan{
            width: 100%;
            min-width: 250px;
            max-width: 340px;
            border-radius: 30px;
            height: 550px;
            background: var(--secondary);
           
            overflow: hidden;
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 10px;   

            position:relative;
        }
        .header-plan{
            width: 100%;
            height:100px;
            background: #247291;
            color: white;
            text-align: center;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            padding: 10px 0;
        }
        
        .header-plan h1{
            font-size: 3rem;
        }
        
        .header-plan p{
            width: 80%;
            margin: auto;
            font-size: 1.6rem;
        }
        
        .price{
            font-size: 8rem;
            text-align: center;
        }
        
        .list-plan{
            
            padding: 0 40px;
            font-size: 1.6rem;
            font-weight: 500;
            line-height: 3.5rem;
        }
            
        .btn-plan-container{
            position:absolute;
            bottom: 30px;
        }
        
        .btn-plan{
            margin-top: 20px ;
            font-size: 1.7rem;
            font-weight: 600;
            padding: 5px 20px;
            margin: auto;
            border-radius: 10px;
            border: 3px solid #247291;
            text-decoration:none;
            color: #247291;
        }
        
        .btn-plan:hover{
            background: #247291;
            color: #f8da5b;
            box-shadow: 0 0 15px 4px rgb(238, 242, 226);
        }

        @media screen and (max-width:375px) {
            .card-plan{
                width:100%;
                min-width:100px;
                max-width: 280px;
                
            }

            .header-plan h1{
                font-size: 2.5rem;
            }
            
            .header-plan p{
                
                font-size: 1.5rem;
            }
            
            .price{
                font-size: 7rem;
              
            }
            
           
            
            .list-plan{
                font-size: 1.5rem;
                line-height: 3rem;
            }
            
            
            
            .btn-plan{
               
                font-size: 1.5rem;
               
            }

        }
        </style>
        `
    }
    render(){
        this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true))
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('card-plan', CardPlans);