import React from 'react' 
import './Image-Card.css'

const Card  = () =>{
    return(
<div className="all-images">
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjaBv5LSksVoNg47s39bR2NgrLHVuavyKAkw&usqp=CAU.jpg" className="rounded float-left" id="image1" alt="..."/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRP-ciAYVH8UlH3ZaZC3NkN3ow9CrG36O5crg&usqp=CAU.jpg" className="rounded float-right" id="image3" alt="..."/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQX7-wh94Gk5vDq413MqcgcwOIYBfa23Yw-ag&usqp=CAU.jpg" className="rounded float-center" id="image2" alt="..."/>
<img src="https://www.vinu.edu/documents/10181/5193090/5004.jpg/28cf052a-9ecf-eeb3-1928-e8afc9b22670?version=1.0&t=1579102461703&download=true.jpg" className="rounded float-left" id="image4" alt="..."/>
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTb2p2pBliT98N3usIpiX0FZ6UcdGNUrt6HRg&usqp=CAU.jpg" className="rounded float-right" id="image6" alt="..."/>
<img src="https://www.iona.edu/sites/default/files/styles/landscape/public/2020-09/primary-images/CS-Cyber-5year.jpg?itok=-tU4tw_a.jpg" className="rounded float-center" id="image5" alt="..."/>
</div>
    )
}

export default Card