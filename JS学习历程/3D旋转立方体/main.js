//创建一个新场景
var scene = new THREE.Scene();
//创建一个摄像头
var camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight,0.1,1000);
camera.position.z = 5;
//渲染器。这是一个渲染给定场景的对象，通过给定的摄像机进行查看。
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);

//创建我们将在画布上显示的立方体
var cube;

var loader = new THREE.TextureLoader();
loader.load('metal003.png',function(texture){
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(2,2);
    
    var geometry = new THREE.BoxGeometry(2.4,2.4,2.4);
    var material = new THREE.MeshLambertMaterial({map: texture,shading: THREE.FlatShading});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
    draw();
    
    //在场景中增加一些灯光
    var light = new THREE.AmbientLight('rgb(255,255,255)');
    scene.add(light);
    
    var spotLight = new THREE.SpotLight('rgb(255,255,255)');
    spotLight.position.set(100,1000,1000);
    spotLight.castShadow = true;
    scene.add(spotLight);
});

function draw(){
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene,camera);
    
    requestAnimationFrame(draw);
}