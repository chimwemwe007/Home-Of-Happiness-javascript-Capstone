const main = document.querySelector('#main');
const sponsorsSection = document.querySelector('#sponsors-section');

const speakersSection = document.createElement('section');
speakersSection.setAttribute('id', 'speakers-section');

speakersSection.innerHTML = `
<h3>Featured Speakers</h3>
<div class="section-underline" style="text-align:center; margin-left: 48%; margin-bottom: 0"></div>
<div id ="all-speakers">
<div class="speakers">
<div class="speaker">
    <img class="image1" src="images/flower.png" alt="background">
    <img class="image2" src="images/afroman.jpg" alt="Dr. Milton Kazanga Banda">
    <div class="speaker-details">
        <h3 class="name">Dr. Milton Kazanga Banda</h3>
        <i class="skill">Clinical Phyologist and Cryptocurrency guru </i>
        <div class="speaker-underline"></div>
        <p class="bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)
        </p>
    </div>
</div>
<div class="speaker">
    <img class="image1" src="images/flower.png" alt="background">
    <img class="image2" src="images/barack obama" alt="Barack Obama">
    <div class="speaker-details">
        <h3 class="name">Barack Obama</h3>
        <i class="skill">Former U.S President, Philantropist </i>
        <div class="speaker-underline"></div>
        <p class="bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/flower.png" alt="background">
    <img class="image2" src="/images/couple.png" alt="married couple">
    <div class="speaker-details">
        <h3 class="name">Dr. Yusouf and Amina Mononga</h3>
        <i class="skill">Dr. Yusouf and Amina Monongo PHd.</i>
        <div class="speaker-underline">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)</div>
        <p class="bio">
        </p>
    </div>
</div>
</div>

<div class="speakers">
<div class="speaker hide">
    <img class="image1" src="images/flower.png" alt="background">
    <img class="image2" src="images/bill.png" alt="#">
    <div class="speaker-details">
        <h3 class="name">Bill Gates</h3>
        <i class="skill">Philanthropist, Founder. Microsoft, Business Magnate </i> 
        <div class="speaker-underline"></div>
        <p class="bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.</p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/flower.png" alt="background">
    <img class="image2" src="images/bishop.jpg" alt="Bishop Walusungu">
    <div class="speaker-details">
        <h3 class="name">Bishop. Rev. Apostle. Dr. Walusungu Chagala Musonda</h3>
        <i class="skill">Founding Bishop at Faith hope divine ministries</i>
        <div class="speaker-underline"></div>
        <p class="bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.
        </p>
    </div>
</div>
<div class="speaker hide">
    <img class="image1" src="images/flower.png" alt="background">
    <img class="image2" src="images/Ms. Gabi Gonzalez Ramires" alt="Ms. Gabi Gonzalez Ramires">
    <div class="speaker-details">
        <h3 class="name">Ms. Gabi Gonzalez Ramires</h3>
        <i class="skill">Enterpreneur, Founder of Chalo Trust School</i>
        <div class="speaker-underline"></div>
        <p class="bio">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
        </p>
    </div>
</div>
</div>
</div>
<button type="button" id="more-speaker" class="show-btn" >More <i class="fa fa-angle-down angle" aria-hidden="true"></i></button>
<button type="button" id="less-speaker" class="hide-btn" >Less <i class="fa fa-angle-up angle" aria-hidden="true"></i></button>`;

main.insertBefore(speakersSection, sponsorsSection);

const moreBtn = document.querySelector('#more-speaker');
const lessBtn = document.querySelector('#less-speaker');
const speakers = document.querySelectorAll('.hide');

if (moreBtn) {
  moreBtn.addEventListener('click', () => {
    Array.from(speakers).forEach((speaker) => {
      speaker.classList.remove('hide');
    });

    moreBtn.classList.add('hide-btn');
    lessBtn.classList.remove('hide-btn');
    lessBtn.classList.add('show-btn');
  });
}

if (lessBtn) {
  lessBtn.addEventListener('click', () => {
    Array.from(speakers).forEach((speaker) => {
      speaker.classList.add('hide');
    });

    moreBtn.classList.remove('hide-btn');
    moreBtn.classList.add('show-btn');
    lessBtn.classList.remove('show-btn');
    lessBtn.classList.add('hide-btn');
  });
}