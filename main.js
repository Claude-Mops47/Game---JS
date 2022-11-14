function guessNumber() {
  let playerGuess;
  const numberToGuess = Math.ceil(Math.random() * 10);

  prompt("Devinez le nombre entre 1 et 10 inclus.");

  while (playerGuess != numberToGuess) {
    playerGuess = prompt(
      "Echec! Essayez à nouveau de deviner le nombre (entre 1 et 10 inclus)."
    );
  }
  alert(`Felicitation! Le nombre était ${numberToGuess}!`);
}
guessNumber();

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  innerWidth / innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
console.log(scene);
console.log(camera);
console.log(renderer);

renderer.setSize(innerWidth, innerHeight);
renderer.setPixelRadio(devicePixelRatio);
document.body.appendChild(renderer.domElement);

const boxGeometry = new THREE.boxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
console.log(boxGeometry);
console.log(material);

const mesh = new THREE.Mesh(boxGeometry, material);
console.log(mesh);

scene.add(mesh);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
}

animate();
