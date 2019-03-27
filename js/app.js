$(document).foundation();
(() => {
  //Variables
  let buttons = document.querySelectorAll('.testBut'); //buttons for testimonial selection

      //testimonial information arrays
  let testInfo = [`"This story does an amazing job at portraying a child's first visit to the dentist through the very cute eyes of Chico! Every parent should read this story to their young children to help them understand how easy and fun dentistry can be. I look forward to more Chico Experiences!"`, 
  					`"It's time for Chico's first visit to the dentist! This informative and educational story is easy to read and understand. Chico and his mom will help your prepare your child and desensitize them before coming to the office. A definite recommend for parents of young children!"`,
  					`"A must read for children and their parents beginning their journey as patients in a dental office."`],
      testName = [`Dr Karin Van Ryswyk D.D.S`,
                  `Dr. Raymond Lee, Paediatric Dentist`,
                  `Dr. David R. Farkouh, Paediatric Dentist`],
      background = ["#2BB892", "#EF4352", "#F5BE4F"];

  //Functions
  //function to switch testimonials
  function scrollTest() {
      offset = this.dataset.offset;

      //replace the default testimonial information with that specific to the button clicked
      document.querySelector('.testInfo').textContent = `${testInfo[offset]}`;
      document.querySelector('.testName').textContent = `${testName[offset]}`;
      document.querySelector('#testCarousel').style.backgroundColor = `${background[offset]}`;
  }

  //Event Handling
  if (buttons) {
    buttons.forEach(button => button.addEventListener('click', scrollTest)); //testimonial changes when the buttons are clicked
  }

})();
