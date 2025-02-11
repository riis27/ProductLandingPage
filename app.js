

//FAQs
const faqSelect = document.getElementById('faqSelect');
const faqAnswer = document.getElementById('faqAnswer');

const faqData = {
  q1: "Leica cameras are considered a luxury brand with a long history of quality and craftsmanship.  Whether they are 'worth it' depends on your individual needs and budget.  Professionals and serious enthusiasts often value their unique qualities, but there are excellent alternatives at lower price points.",
  q2: "Leica offers several camera lines. The M series are rangefinder cameras known for their compact size and manual focus. The Q series are fixed-lens cameras with excellent image quality. The SL series are mirrorless cameras designed for professional use.",
  q3: "Like Leica cameras, Leica lenses are known for their exceptional quality, sharpness, and unique rendering. They are a significant investment, but many photographers consider them essential for maximizing the potential of their Leica cameras.",
  q4: "Some Leica cameras, particularly those in the M system, can accept lenses from other manufacturers with the use of adapters. However, using non-Leica lenses may affect performance and compatibility.",
  q5: "Our return policy allows for returns within 30 days of purchase, provided the item is in its original condition and packaging. Please contact customer service for specific details and instructions."
};

faqSelect.addEventListener('change', function() {
  const selectedQuestion = this.value;
  if (selectedQuestion) {
    faqAnswer.textContent = faqData[selectedQuestion];
    faqAnswer.style.display = 'block';
  } else {
    faqAnswer.style.display = 'none';
  }
});