import './Content.css'
import amazon from '../../public/images/amazon.png';
import flipkart from '../../public/images/flipkart.png';
import product from '../../public/images/shoe_image.png'

function Content() {
    return (
        <div className="main-content">
            <div id="leftContent">
                <h1 className='content-heading'>Your feet deserve the best</h1>
                <p className='content-subheading'>Your feet deserve the best and we are here to help you with our shoes.Your feet deserve the best and we  are here to help you with our shoes.</p>
                <div className='btn-group'>
                    <button className='content-btn-shop'>Shop Now</button>
                    <button className='content-btn-category'>Category</button>
                </div>
                <p id='product-platform'>Also Available on</p>
                <div id='platforms-logo'>
                    <img src={flipkart} alt="Flipart Logo" />
                    <img src={amazon} alt="Amazon Logo" />
                </div>
            </div>
            <div id="rightContent">
                <img src={product} alt="Product" />
            </div>
        </div>
    )
}
export default Content;