
// function displayProducts(products) {
//     const productList = document.getElementById('product-list');
//     productList.innerHTML = '';

//     products.forEach(product => {
//         const productDiv = document.createElement('div');
//         productDiv.className = 'product';
//         productDiv.innerHTML = `
//                 <div class="card__reviews df">
//                     <div class="card__content df">
//                         <div class="card__content__top df">
//                             <div class="image__user df">
//                                 <i class="fas fa-user text-blue-600 text-xl"></i>
//                             </div>
//                             <div class="about__user df">
//                                 <span class="fw-600" style="font-size: 1rem;">${product.name}</span>
//                                 <p class="fw-500" style="font-size: .9rem;">${product.company}</p>
//                             </div>
//                         </div>
//                         <div class="card__content__bottom df">
//                             <div class="user__message">
//                                 <p class="message bg-gray fw-500">"${product.message}"</p>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//         `
//         productList.appendChild(productDiv);
//     });
// }

// displayMessage(message)

document.addEventListener('DOMContentLoaded', () => {
    const swiperSlide = document.getElementById('swiper__slide');
    
    reviews.forEach(review => {
        const cardReviewsBlock = ` 
            <div class="card__reviews df"> 
                <div class="card__content df"> 
                    <div class="card__content__top df"> 
                        <div class="image__user df"> 
                            <i class="fas fa-user text-blue-600 text-xl"></i> 
                        </div> 
                    <div class="about__user df"> 
                        <span class="fw-600" style="font-size: 1rem;">${review.userName}</span> 
                        <p class="fw-500" style="font-size: .9rem;">${review.position}</p> 
                    </div>
                </div> 
                    <div class="card__content__bottom df"> 
                        <div class="user__message"> 
                            <p class="message bg-gray fw-500">${review.message}</p> 
                        </div> 
                    </div>
                </div> 
            </div> `;
        
        swiperSlide.insertAdjacentHTML('beforeend', cardReviewsBlock);
    });
});