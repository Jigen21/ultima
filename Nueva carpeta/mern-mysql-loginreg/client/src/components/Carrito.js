import React, {Component} from 'react'


class Carrito extends Component {
    render() {
        return (
            <div style={{"padding-top":"50px","padding-bottom":"30px"}}>
                     <div class="cart-table-area section-padding-100">
                            <div class="container-fluid">
                                <div class="row">
                                    <div class="col-12 col-lg-8">
                                        <div class="cart-title mt-50">
                                            <h2>Carrito de compras</h2>
                                        </div>

                                        <div class="cart-table clearfix">
                                            <table class="table table-responsive">
                                                <thead>
                                                    <tr>
                                                        <th></th>
                                                        <th>Nombre</th>
                                                        <th>Precio</th>
                                                        <th>Cantidad</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td class="cart_product_img">
                                                            <a href="#"><img src={require('./gatito.jpg')} style={{heigth:'200px',width:'200px'}} alt="Product"/></a>
                                                        </td>
                                                        <td class="cart_product_desc">
                                                            <h5>Gatito Cosplayer</h5>
                                                        </td>
                                                        <td class="price">
                                                            <span>$130</span>
                                                        </td>
                                                        <td class="qty">
                                                            <div class="qty-btn d-flex">
                                                                <p>Qty</p>
                                                                <div class="quantity">
                                                                    <span class="qty-minus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                                    <input type="number" class="qty-text" id="qty" step="1" min="1" max="300" name="quantity" value="1"/>
                                                                    <span class="qty-plus" onclick="var effect = document.getElementById('qty'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="cart_product_img">
                                                            <a href="#"><img src={require("./gatito.jpg")} style={{heigth:'200px',width:'200px'}} alt="Product"/></a>
                                                        </td>
                                                        <td class="cart_product_desc">
                                                            <h5>Gatito Cosplayer</h5>
                                                        </td>
                                                        <td class="price">
                                                            <span>$10</span>
                                                        </td>
                                                        <td class="qty">
                                                            <div class="qty-btn d-flex">
                                                                <p>Qty</p>
                                                                <div class="quantity">
                                                                    <span class="qty-minus" onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                                    <input type="number" class="qty-text" id="qty2" step="1" min="1" max="300" name="quantity" value="1"/>
                                                                    <span class="qty-plus" onclick="var effect = document.getElementById('qty2'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td class="cart_product_img">
                                                            <a href="#"><img src={require("./gatito.jpg")} style={{heigth:'200px',width:'200px'}} alt="Product"/></a>
                                                        </td>
                                                        <td class="cart_product_desc">
                                                            <h5>Gatito Cosplayer</h5>
                                                        </td>
                                                        <td class="price">
                                                            <span>$10</span>
                                                        </td>
                                                        <td class="qty">
                                                            <div class="qty-btn d-flex">
                                                                <p>Qty</p>
                                                                <div class="quantity">
                                                                    <span class="qty-minus" onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty ) &amp;&amp; qty &gt; 1 ) effect.value--;return false;"><i class="fa fa-minus" aria-hidden="true"></i></span>
                                                                    <input type="number" class="qty-text" id="qty3" step="1" min="1" max="300" name="quantity" value="1"/>
                                                                    <span class="qty-plus" onclick="var effect = document.getElementById('qty3'); var qty = effect.value; if( !isNaN( qty )) effect.value++;return false;"><i class="fa fa-plus" aria-hidden="true"></i></span>
                                                                </div>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div class="col-12 col-lg-4">
                                        <div class="cart-summary">
                                            <h5>Cart Total</h5>
                                            <ul class="summary-table">
                                                <li><span>SubTotal:</span> <span>$140.00</span></li>
                                                <li><span>Envio:</span> <span>Gratis</span></li>
                                                <li><span>Total:</span> <span>$140.00</span></li>
                                            </ul>
                                            <div class="cart-btn mt-100">
                                                <a href="cart.html" class="btn amado-btn w-100">Pagar</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                
            
        )
    }
}

export default Carrito