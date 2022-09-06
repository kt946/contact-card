// Import modules
import  "./form";
import "./submit";
import { initdb, getDb, postDb } from './database';

// Import Bootstrap and Popper
import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

// Import CSS files
import "../css/index.css";

// Import images
import Logo from '../images/my-new-logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';

// Add images on load
window.addEventListener('load', function () {
  initdb();
  // We are temporarily placing getDb() and postDb() function calls here for testing. We will move it to another event listener later.
  // getDb();
  // postDb("Lernantino", "learnantino@test.com", 8186601234, "Bear");
  // getDb();
  document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
});