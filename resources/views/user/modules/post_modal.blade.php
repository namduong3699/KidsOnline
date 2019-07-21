<div class="cd-quick-view add-content">
  <div class="cd-slider-wrapper">
    <ul class="cd-slider">
      <li class="selected js-img-modal-post"><img src="" alt="Product 1"></li>
    </ul> 
  </div> 

  <div class="cd-item-info kt-widget19">
    <div class="kt-widget19__wrapper">
      <div class="kt-widget19__content">
        <div class="kt-widget19__userpic">
          <img src="media/users/100_1.jpg" alt="">
        </div>
        <div class="kt-widget19__info">
          <a href="#" class="kt-widget19__username">
            Tên user
          </a>
          <span class="kt-widget19__time">
            20/07/2019 lúc 13:14
          </span>
        </div>
      </div>
      <div class="kt-widget19__text kt-scroll js-post-modal-content" data-scroll="true" style="max-height: ">
        <h3 class="kt-infobox__subtitle">Tiêu đề</h3>
        Kidsonline cảm ơn Quỳnh Chi đã luôn đồng hành cùng chúng tôi! <br>
        Chúc bạn một ngày làm việc vui vẻ và hiệu quả. Consectetur adipisicing elit. Provident, aliquam ... <br>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga quibusdam magnam blanditiis ea, iusto autem odio dolor aliquam a suscipit, dolore fugiat doloribus animi aspernatur in eum assumenda quae est ab labore dignissimos mollitia beatae dolorem, quis! Odit unde non repudiandae, eos accusantium error, facere, nemo necessitatibus rerum ducimus placeat. Sapiente suscipit veritatis explicabo, fugiat adipisci natus officia nesciunt inventore temporibus. Eos do Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod repudiandae itaque maiores corporis, ut maxime deleniti accusantium consectetur esse aliquid ducimus hic porro, nemo ad rerum expedita error laborum vel eum earum tempore! Itaque quia ex necessitatibus quas repellendus, quam, porro quae et blanditiis possimus pariatur quos animi magni dolores voluptatem aliquam dolorum, reiciendis cumque omnis fugiat delectus dolorem molestias? Voluptates in et illo ratione iste libero delectus incidunt nemo corporis animi neque quidem ducimus voluptatibus mollitia laborum consectetur repellat debitis veniam expedita quam, quis! Odio iusto placeat harum maxime pariatur, voluptates ducimus, ullam, inventore eum ea maiores soluta perferendis mollitia tempore distinctio accusantium quibusdam dolorum natus sunt quasi voluptatibus quos saepe. Magnam quo perferendis sed dolores similique voluptates commodi, cum molestiae iusto accusantium, ipsam officiis harum vel aspernatur deserunt obcaecati vitae. Fugit dolorum non maiores ea praesentium nulla molestiae expedita esse rem aperiam.

        <div class="modal-post-info">
          3 <i class="la la-heart" style="color: rgba(252, 92, 101, 0.9);"></i>
          <!-- 3 <i class="la la-heart-o"></i> -->
          4 <i class="la la-comments" style="font-size: 18px;"></i>

        </div>
        
        @for($i = 1; $i <= 4; $i++)
        <div class="kt-widget19__content" style="margin-top: 25px; align-items: end">
          <div class="kt-widget19__userpic">
            <img src="media/users/100_1.jpg" alt="">
          </div>
          <div class="kt-widget19__info">
            <a href="#" class="kt-widget19__username">
              Tên user
            </a>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem maxime rem modi eaque, voluptate. Beatae officiis neque quidem vero animi.
            <span class="kt-widget19__time">
              20/07/2019 lúc 13:14
            </span>
          </div>
        </div>
        @endfor
      </div>
    </div>
  </div>

  <div class="form-group post_modal_comment">

    <div class="input-group">
      <div class="input-group-prepend">
        <button class="btn" type="button" style="background-color: rgba(252, 92, 101, 0.9)"><i class="la la-heart-o" style="color: white"></i></button>
      </div>
      <input type="text" class="form-control" placeholder="Bình luận...">
      <div class="input-group-append">
        <button class="btn btn-success" type="button"><i class="flaticon-paper-plane" style="color: white"></i></button>
      </div>
    </div>
  </div> 
  
  <a href="#" class="cd-close">Close</a>

</div> <!-- cd-quick-view -->


<div class="modal-over-layer">

</div>

<script src="js/post_modal/jquery-2.1.1.js"></script>
<script src="js/post_modal/velocity.min.js"></script>
<script src="js/post_modal/main.js"></script> <!-- Resource jQuery -->
