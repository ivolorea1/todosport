import '../styles/products__styles.css'

 function Catalogo() {

  const product = 'http://localhost:5000/api/products';

  fetch(product)
    .then(res => res.json())
    .then(res => console.log(res))  

    return (      
       <div>

       </div>                
    );
  }
  
export default Catalogo;
