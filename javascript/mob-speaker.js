const Speakers = [
  {
    name: 'Dr. Milton Kazanga Banda',
    image: 'images/afroman.jpg',
    skill: 'Clinical Phyologist and Cryptocurrency guru',
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",

  },
  {
    name: 'Barack Obama',
    image: 'images/barack-obama.jpg',
    skill: 'Former U.S President, Philantropist',
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: 'Dr. Yusouf and Amina Mononga',
    image: '/images/couple.jpg',
    skill: 'Dr. Yusouf and Amina Mononga PHd.',
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.",
  },
  {
    name: 'Bill Gates',
    image: 'images/bill.png',
    skill: 'Philanthropist, Founder. Microsoft, Business Magnate',
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    name: 'Ms. Gabi Gonzalez Ramires',
    image: 'images/woman.jpg',
    skill: 'Enterpreneur, Founder of Chalo Trust School',
    bio: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here",
  },
];

const main = document.querySelector('#main');
const sponsorsSection = document.querySelector('#sponsors-section');

const speakersSection = document.getElementById('speaker');
speakersSection.setAttribute('id', 'speakers-section');

Speakers.forEach((speaker) => {
  speakersSection.innerHTML += `
<h3>Featured Speakers</h3>
<div class="section-underline" style="text-align:center; margin-left: 48%; margin-bottom: 0"></div>
  <div id ="all-speakers">
    <div class="speakers">
      <div class="speaker">
          <img class="image1" src="images/chess.png" alt="background">
          <img class="image2" src=${speaker.image} alt=${speaker.name}>
          <div class="speaker-details">
              <h3 class="name">${speaker.name}</h3>
              <i class="skill">${speaker.skill} </i>
              <div class="speaker-underline"></div>
              <p class="bio">${speaker.bio}</p>
          </div>
      </div>

    </div>
  </div>
</div>`;
});
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