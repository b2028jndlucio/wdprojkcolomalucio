function DoorFunc() {
  document.getElementById("bg").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/homepage_homepage2.png?v=1734861936795";
  const showme = document.getElementById("showme");
  showme.remove();
  
  document.getElementById("clairedoor").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/homepage_clairedoor.png?v=1734867847882";
  document.getElementById("jandoor").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/homepage_jandoor.png?v=1734867850489";
  document.getElementById("desc").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/hp_index.png?v=1734963445172";
  document.getElementById("rd").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_okay.png?v=1734932494761";
}

function ClaireExitTut() {
  document.getElementById("clairetut").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_hp.png?v=1734933321865";
  const clairetut = document.getElementById("exit");
  clairetut.remove();
  
  document.getElementById("klaireroomnav").style.backgroundColor = "#0f1b30";
  document.getElementById("klaireroomfooter").style.backgroundColor = "#0f1b30";
  document.getElementById("klaireroomh1").style.backgroundColor = "#0f1b30";
  document.getElementById("klaireroomnav").style.color = "white";
  document.getElementById("klaireroomh1").style.color = "white";
  document.getElementById("klaireroomfooter").style.color = "white";
  
  document.getElementById("bathroom").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_bathroom.png?v=1734928457355";
  document.getElementById("melody").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_melody.png?v=1734928460261";
  document.getElementById("wardrobe").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_wardrobe.png?v=1734926671752";
  document.getElementById("sketch").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_sketchbook.png?v=1734928463099";
  document.getElementById("quilldren").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_ike.png?v=1734926691788";
  
}

function Clairedesc() {
  document.getElementById("clairetut").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_desc.png?v=1734960995464";
  const clairetut = document.getElementById("okay");
  clairetut.remove();
  document.getElementById("exit").src = "https://cdn.glitch.global/85513dfb-f611-453c-9d45-3d49f9b7c6fa/claire_exit.png?v=1734952401224";
}

function removedesc() {
  const rd = document.getElementById("rd");
  rd.remove();
  const desc = document.getElementById("desc");
  desc.remove();
}