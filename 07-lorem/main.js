const loremText = [
  "Pitchfork solarpunk gastropub biodiesel, skateboard vegan DSA. Ramps gluten-free keytar chambray jianbing, grailed green juice poutine. Craft beer aesthetic whatever distillery neutra jianbing praxis selfies four loko pinterest literally twee meh pour-over.",
  "Vegan grailed narwhal intelligentsia microdosing slow-carb tumblr tote bag art party. Yuccie chillwave hoodie bitters scenester. Helvetica cloud bread cliche, selvage coloring book taiyaki vice aesthetic.",
  "Fam celiac normcore church-key neutra. Flannel migas cupping letterpress, deep v austin neutra. Hella street art man braid shabby chic next level, mustache put a bird on it farm-to-table listicle neutral milk hotel grailed. DSA green juice post-ironic, skateboard whatever 90's four loko.",
  "Seitan shabby chic mixtape shoreditch try-hard, mukbang messenger bag kombucha. Truffaut etsy blue bottle farm-to-table roof party tote bag live-edge. Keffiyeh authentic cardigan marxism affogato. Tonx raclette shoreditch before they sold out edison bulb pop-up.",
  "Shaman palo santo blog meggings plaid sustainable subway tile hell of artisan marxism live-edge. Cray yuccie direct trade semiotics four dollar toast forage knausgaard green juice tote bag paleo. Mukbang tacos succulents, keffiyeh iPhone vibecession mixtape schlitz poutine tote bag gastropub.",
  "Hexagon next level whatever praxis tattooed, ascot poutine meditation humblebrag tofu stumptown. Jean shorts mlkshk 3 wolf moon PBR&B Brooklyn vibecession neutral milk hotel air plant. Banjo synth pitchfork readymade tilde art party selvage leggings hoodie heirloom gatekeep bruh four dollar toast.",
  "Humblebrag direct trade venmo small batch knausgaard, JOMO cred ennui sartorial roof party banh mi. Offal selfies vice cray crucifix marfa wayfarers cloud bread hashtag trust fund deep v meh. Sartorial quinoa meh ugh. Vape franzen ascot fit chia. Subway tile adaptogen messenger bag, authentic typewriter XOXO shaman.",
  "Asymmetrical offal iceland, chia bushwick same vibecession echo park succulents narwhal ugh listicle distillery pickled. Vaporware subway tile church-key, normcore bitters taiyaki hot chicken cold-pressed quinoa direct trade. Lo-fi typewriter kogi tumeric. Taiyaki portland selvage man bun 8-bit cloud bread.",
  "Typewriter narwhal offal, celiac artisan biodiesel bicycle rights brunch locavore fanny pack YOLO flexitarian. Vinyl dreamcatcher fanny pack literally, asymmetrical edison bulb vice VHS cold-pressed post-ironic. Intelligentsia marxism yes plz VHS, bruh live-edge gorpcore fingerstache kitsch authentic.",
  "DSA polaroid blue bottle yuccie PBR&B fit, lyft umami artisan beard deep v distillery heirloom. Austin cardigan viral try-hard cred vibecession gorpcore marfa praxis drinking vinegar. Tilde gluten-free fit 8-bit lyft skateboard four loko poutine irony asymmetrical bicycle rights sartorial single-origin coffee craft beer four dollar toast.",
  "Bodega boys craft beer ramps, banh mi pabst meh master cleanse. Asymmetrical gorpcore enamel pin locavore hammock selfies.",
  "Enamel pin tacos blackbird spyplane, pinterest letterpress retro gochujang mumblecore cardigan. Ennui XOXO Brooklyn, fashion axe wayfarers hell of kickstarter ethical shoreditch cronut cupping kale chips poutine. Pabst ennui master cleanse, chambray sus before they sold out craft beer irony cardigan +1 truffaut. Seitan chicharrones mukbang",
  "gentrify gastropub williamsburg farm-to-table whatever vinyl street art slow-carb. Af normcore quinoa cornhole raclette drinking vinegar waistcoat disrupt freegan poutine chambray yes plz retro forage. Jean shorts big mood selfies waistcoat pickled bodega boys.",
  "Intelligentsia pok pok polaroid, asymmetrical 8-bit tilde subway tile fingerstache. Kitsch dreamcatcher quinoa cupping. Flannel marxism trust fund pickled austin migas crucifix tbh. Copper mug bushwick hammock fingerstache sustainable crucifix wayfarers tote bag. Heirloom truffaut pinterest, sus franzen Brooklyn before they sold out scenester intelligentsia put a bird on it knausgaard jean shorts literally pug kogi",
  "Migas helvetica kale chips woke authentic, seitan actually. Poutine praxis vegan godard chartreuse man braid, neutra glossier. Farm-to-table squid snackwave +1 quinoa whatever hell of try-hard. Hexagon irony kickstarter, tousled big mood viral farm-to-table narwhal cray vinyl.",
];

const loremContainer = document.querySelector(".lorem-container");
const numberInput = document.getElementById("number");
const btn = document.querySelector("[type = submit]");

document.forms[0].addEventListener("submit", function (e) {
  e.preventDefault();

  let numOFPara = parseInt(numberInput.value);
  let randomNum = Math.floor(Math.random() * loremText.length);
  if (isNaN(numOFPara) || numOFPara > 10 || numOFPara < 1) {
    loremContainer.innerHTML = `<div class="lorem">${loremText[randomNum]}</div>`;
  } else {
    loremContainer.innerHTML = "";
    for (let i = 0; i < numOFPara; i++) {
      let randomNum = Math.floor(Math.random() * loremText.length);

      let div = `<div class="lorem">${loremText[randomNum]}</div>`;
      loremContainer.innerHTML += div;
    }
  }
});
