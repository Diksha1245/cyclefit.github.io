 


document.getElementById('scroll-down-button').addEventListener('click', function() {
  console.log('Button clicked');
  const targetElement = document.querySelector('#exploremore');
  console.log('Target Element:', targetElement);
  targetElement.scrollIntoView({
      behavior: 'smooth'
  });
});

function validateForm() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var date = document.getElementById("date").value;
  var time = document.getElementById("time").value;
  var people = document.getElementById("people").value;


  if (name == "" || email == "" || phone == "" || date == "" || time == ""|| people=="") {
    alert("All fields must be filled out");
    return false;
  }

  
  return true;
}
  var slideshows = document.querySelectorAll('[data-component="slideshow"]');
  
  // Apply to all slideshows that you define with the markup wrote
  slideshows.forEach(initSlideShow);

  function initSlideShow(slideshow) {

    var slides = document.querySelectorAll(`#${slideshow.id} [role="list"] .slide`); // Get an array of slides

    var index = 0, time = 3000;
    slides[index].classList.add('active');  

    setInterval( () => {
      slides[index].classList.remove('active');
      
      //Go over each slide incrementing the index
      index++;
      
      // If you go over all slides, restart the index to show the first slide and start again
      if (index === slides.length) index = 0; 
      
      slides[index].classList.add('active');

    }, time);
  }
document.addEventListener('DOMContentLoaded', function() {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const userInput = document.getElementById('user-input');
    const sendButton = document.getElementById('send-button');

    sendButton.addEventListener('click', sendMessage);

    function sendMessage() {
        const message = userInput.value.trim();
        if (message !== '') {
            appendMessage('user', message);
            botResponse(message);
            userInput.value = '';
        }
    }

    function appendMessage(sender, message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', sender);
        messageElement.innerText = message;
        chatbotMessages.appendChild(messageElement);
    }

    function botResponse(message) {
        // Basic bot responses
        const responses = {
            'hi': 'Hello! Welcome to our restaurant. How can I assist you?',
        'hello': 'Hi there! How can we help you today?',
        'menu': 'You can view our menu on our website: [menu link]',
        'reservation': 'To make a reservation, please visit our reservation page: [reservation link]',
        'opening hours': 'Our restaurant is open from [opening time] to [closing time] every day.',
        'location': 'We are located at [restaurant address].',
        'specials': 'Check out our daily specials for delicious dishes!',
        'contact': 'You can contact us at [phone number] or email us at [email address].',
        'recommendation': 'I recommend trying our [popular dish]. It\'s a customer favorite!',
        'thank you': 'You\'re welcome! If you need anything else, feel free to ask.',
        'reservation process': 'To make a reservation, simply visit our website and fill out the reservation form.',
        'happy hour': 'Join us for happy hour every weekday from [happy hour start time] to [happy hour end time] for discounted drinks and appetizers!',
        'private events': 'We offer private event bookings for special occasions. Please contact us for more information.',
        'vegan options': 'We have a variety of delicious vegan options available on our menu. Just ask your server!',
        'gluten-free options': 'We offer gluten-free alternatives for many of our menu items. Please inform your server of any dietary restrictions.',
        'kids menu': 'Check out our kids menu for tasty and nutritious options for the little ones.',
        'chef\'s specials': 'Our chef\'s specials feature unique and seasonal dishes crafted with care by our talented chefs.',
        'weekly promotions': 'Stay tuned for our weekly promotions, featuring discounts on select menu items!',
        'catering services': 'We provide catering services for events of all sizes. Contact us to discuss your catering needs.',
        'loyalty program': 'Join our loyalty program to earn rewards and exclusive offers with every visit!',
        'wine selection': 'Explore our extensive wine selection, featuring a variety of reds, whites, and rosés from around the world.',
        'happy birthday': 'Happy birthday! Celebrate your special day with us and enjoy a complimentary dessert on the house.',
        'anniversary celebration': 'Celebrate your anniversary with us and create lasting memories over a delicious meal.',
        'takeout options': 'Enjoy our delicious food from the comfort of your home with our convenient takeout options.',
        'delivery service': 'Can\'t make it to the restaurant? We offer delivery service to bring our tasty dishes straight to your door.',
        'holiday hours': 'Please note our special holiday hours during the festive season. Check our website for details.',
        'live entertainment': 'Join us for live entertainment every [day of the week], featuring talented musicians and performers.',
        'customer feedback': 'We value your feedback! Let us know about your dining experience by completing our online survey.',
        'gift cards': 'Give the gift of great food with our restaurant gift cards, available for purchase in-store or online.',
        'community events': 'Stay involved with our community events and fundraisers supporting local causes.',
        'cocktail menu': 'Explore our cocktail menu for expertly crafted drinks made with premium spirits and fresh ingredients.',
        'weekly specials': 'Don\'t miss out on our weekly specials, featuring seasonal ingredients and culinary creativity.',
        'dine-in experience': 'Experience exceptional service and a warm atmosphere when you dine in with us.',
        'outdoor seating': 'Enjoy al fresco dining on our outdoor patio, perfect for soaking up the sunshine.',
        'private dining rooms': 'Host your next private event in one of our elegant dining rooms, perfect for special occasions.',
        'takeout discounts': 'Get 10% off your first takeout order when you sign up for our newsletter!',
        'birthday party': 'Celebrate your birthday with us and enjoy a special treat from our kitchen.',
        'anniversary dinner': 'Plan a romantic anniversary dinner with us and savor each moment together.',
        'group reservations': 'Planning a group outing? Contact us to make reservations for parties of six or more.',
        'happy hour specials': 'Join us for happy hour and enjoy discounted drinks and appetizers!',
        'weekly events': 'Discover our weekly events, including trivia nights, live music, and more.',
        'holiday promotions': 'Celebrate the holidays with us and enjoy special promotions and festive menus.',
        'takeout options': 'Order online for easy takeout or delivery straight to your doorstep.',
        'customer service': 'Our team is here to assist you with any questions or concerns you may have.',
           
        };

        const response = responses[message.toLowerCase()] || "I'm sorry, I don't understand.";
        setTimeout(() => {
            appendMessage('bot', response);
        }, 500); 
    }
});
let chatbotOpen = false;
        const chatbotContainer = document.getElementById('chatbot-container');

        function toggleChatbot() {
            chatbotOpen = !chatbotOpen;
            if (chatbotOpen) {
                chatbotContainer.style.display = 'block';
                chatbotContainer.classList.add('open');
            } else {
                chatbotContainer.classList.remove('open');
                setTimeout(() => {
                    chatbotContainer.style.display = 'none';
                }, 300);
            }
        }

