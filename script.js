let paraDiv = document.querySelector(".contianer");
let input = document.querySelector("#input");
let time = document.querySelector(".time");
let pTag = document.querySelector(".text");
let result1 = document.getElementById("result1");
let result2 = document.getElementById("result2");
let result3 = document.getElementById("result3");
let result4 = document.getElementById("result4");
let rotateIcon = document.querySelector(".fa-rotate-right");

let text = [
  "Lorem ipsum dolor sit amet consectetur adipisicing elit Accusantium pariatur excepturi magnam facere nobis ametTraveling is more than just moving from one place to another it is a transformative experience that enriches the soul and broadens the mind When embarking on a journey whether near or far there is a sense of anticipation and curiosity that fills the air Each destination holds its own allure whether it is the bustling streets of a cosmopolitan city or the quiet serenity of a remote village Exploring new cultures tasting unfamiliar cuisines and witnessing breathtaking landscapes all contribute to a tapestry of experiences that shape our understanding of the world The essence of travel lies not only in visiting famous landmarks or ticking off bucket list items but also in the connections we make along the way Meeting people from different walks of life sharing stories and discovering common humanity fosters a sense of empathy and appreciation for diversity",
  "Traveling is an exhilarating journey of discovery where each step unveils new landscapes cultures and perspectives Its a voyage that transcends physical distances weaving together moments of awe-inspiring beauty and profound encounters From bustling city streets teeming with life to tranquil countryside vistas every destination offers a unique story waiting to be explored Traveling fosters connections with people from diverse backgrounds creating bonds forged through shared experiences and mutual understanding It challenges us to embrace uncertainty inviting personal growth and self-discovery along the way Each adventure becomes a treasure trove of memories etched into the fabric of our lives reminding us of the richness and diversity of our world",
  "Food is more than sustenance its a gateway to culture history and pleasure Each dish tells a story carrying the flavors and traditions of its origin From street vendors offering spicy delicacies to Michelin-starred restaurants serving exquisite creations food transcends mere nourishment to become a sensory experience The diversity of cuisines around the world reflects humanitys creativity and ingenuity blending local ingredients with centuries-old techniques Sharing a meal fosters connections bridging cultural gaps and nurturing relationships Whether savoring comfort foods that evoke childhood memories or indulging in exotic flavors that awaken the palate food delights and enriches our lives in countless ways",
  "Airports are bustling hubs of activity where the world converges and journeys begin They are gateways to adventure echoing with the excitement of travelers embarking on new experiences From the moment one steps inside airports buzz with the anticipation of destinations near and far Rows of departure boards flicker with destinations offering a glimpse into the global tapestry of travel Security lines weave through bustling terminals where duty-free shops tempt with luxury goods and last-minute essentials The aroma of freshly brewed coffee mingles with the hum of conversations in multiple languages creating a vibrant atmosphere of cultural exchange Airports are more than transitional spaces they are transient communities where strangers become fellow travelers sharing stories and connections Amid the flurry of arrivals and departures airports symbolize the promise of discovery and the thrill of exploration",
  "Stations are the beating heart of transportation networks where journeys begin and end with a symphony of movement Whether bustling with commuters during rush hour or serene in the quiet of dawn stations are gateways to destinations near and far Trains arrive and depart like clockwork their rhythmic clatter echoing through vast halls adorned with departure boards and timetables Ticket counters and platforms hum with the anticipation of travelers embarking on adventures or returning home Stations are nodes of connectivity where diverse paths converge and diverge linking cities and countryside in a web of routes Amid the flurry of activity stations exude a sense of purpose and possibility embodying the essence of travel and the stories that unfold along the way",
  "Hackers are individuals skilled in navigating and manipulating computer systems and networks often with a deep understanding of software and hardware While the term hacker can have negative connotations due to cybercrime not all hackers engage in illegal activities Some are ethical hackers employed to identify and fix security vulnerabilities to protect systems from malicious attacks Hackers expertise spans a wide range from coding and cryptography to networking and social engineering allowing them to innovate and problem-solve in the digital realm Despite the controversy surrounding their activities hackers play a pivotal role in advancing cybersecurity measures and pushing technological boundaries",
  "Plants and trees form the verdant tapestry of our natural world essential to the health and balance of ecosystems From towering sequoias to delicate wildflowers they provide habitats for diverse wildlife and contribute to the oxygen we breathe Trees with their majestic presence offer shade and shelter their roots anchoring soil and preventing erosion Plants ranging from lush rainforest ferns to desert succulents adapt to varied climates and play crucial roles in nutrient cycling and carbon sequestration Beyond their ecological importance plants and trees enrich human lives offering beauty food medicine and materials for shelter and clothing As stewards of the environment preserving and cultivating these botanical treasures is vital for our planets sustainability and our well-being",
  "Anime short for animation in Japanese refers to a diverse and vibrant form of entertainment characterized by its distinctive artistic style and storytelling Originating in Japan anime encompasses a wide range of genres and themes appealing to audiences of all ages worldwide From fantastical adventures and epic battles to slice-of-life dramas and thought-provoking narratives anime explores complex emotions and universal human experiences Iconic characters elaborate worlds and intricate plotlines captivate viewers often blending traditional hand-drawn animation with modern digital techniques Animes global popularity continues to grow fostering communities of passionate fans who celebrate its creativity innovation and cultural impact",
  "It seems like you may have meant to type insect Insects are a diverse group of small invertebrates characterized by their segmented bodies exoskeletons and typically three pairs of jointed legs They inhabit almost every terrestrial and aquatic habitat on Earth playing crucial roles in ecosystems as pollinators decomposers and prey From ants and bees to butterflies and beetles insects exhibit remarkable diversity in size shape coloration and behavior While some insects are beneficial others can be pests to crops or vectors of disease Despite their small size insects are fundamental to the functioning of ecosystems and have fascinated scientists and naturalists for centuries",
  "Schools are institutions designed to educate and nurture young minds providing structured learning environments from early childhood through adolescence They play a pivotal role in shaping the future by imparting knowledge skills and values essential for personal and professional development Within school walls students engage in a variety of subjects from mathematics and science to literature and the arts preparing them for future academic pursuits and life beyond the classroom Schools also serve as social hubs where friendships are forged teamwork is cultivated and diversity is celebrated Educators as guides and mentors inspire and empower students to reach their full potential fostering a lifelong love of learning and critical thinking In essence schools are the foundation upon which societies build a brighter future through education and enlightenment",
];


let val = Math.round(Math.random() * 9);
let selectedText = text[val];

let words = selectedText.split(" ");

pTag.innerHTML = "";

words.forEach((word, id) => {
  let spanElement = document.createElement("span");
  spanElement.id = `span${id}`;
  spanElement.textContent = `${word} `;
  pTag.appendChild(spanElement);
});

let corWords = 0;
let wroWords = 0;
let counter = 0;
const handleInput = (e) => {
  let value = input.value.trim();
  let id = document.getElementById(`span${counter}`)

  if (checked === 0) {
    checked = 1;
    second();
  }
  if (value == words[counter]) {
    corAudio();
    input.value = "";
    counter += 1;
    corWords += 1;
    id.style.color = "green";
  }else if (e.key === " ") {
    counter += 1;
    input.value = "";
    wroWords += 1;
    id.style.color = "red";
    wroAudio();
  }
  result2.innerText = wroWords;
  result1.innerText = corWords ;
  result4.innerText =  Math.round(corWords / 1);
  result3.innerText =  ((corWords / words.length) * 100).toFixed(2) + `%`;
};

let audio = new Audio("./images/finish.m4a");
let corSound = new Audio("./images/correct2.m4a")
let wroSound = new Audio("./images/wrong.m4a")

function corAudio(){ 
  corSound.play();
}
function wroAudio(){ 
  wroSound.play();
}
function sound(){ 
  audio.play();
}
let timer = 60;
let checked = 0;
function second() {
  let interval = setInterval(() => {
    timer = timer - 1;
    time.innerText = timer;
    if (timer < 10) {
      time.innerText =  `0` + timer;
    }
    if (timer === 0) {
      clearInterval(interval);
      input.setAttribute("disabled", true);
      input.value = "Time Up";
      sound()
    }
  }, 1000);
}

input.addEventListener("keydown", handleInput);
document.querySelector(".reload").addEventListener("click", () => {
  location.reload();
});
