TimpePicker Plugin for jQuery
========

### How to?

Write your Input DOM with class .timepicker like so:

```html
  <label class="col-md-2 control-label" ><font color="red">*</font>Wake Up Time :?</label>
  <input class="form-control space" type="text" class="timepicker" name="timepicker" readonly> // input box here
  <br/>
  //import timepicker after Jquery Libary
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
  <script src="timepicker/pickerjs.js"></script>
````
## Here's two models: "with meridian or without meridian"
You will find out "setTimearea(true)" on line 106, here is a Boolean argument
```js
window.onLoad=setTimearea(true); 
// or 
window.onLoad=setTimearea(false);
```
I will show the differences follow:<br/>
◎ with meridian(true)： You will see the AM/PM at the end of area, just beside the second.
![File Input Screenshot](http://w1.loxa.edu.tw/xxxeee/timepicker2.jpg)

◎ without meridian(false)： You are not able to see the AM/PM at the end of area, only show until second select.
![File Input Screenshot](http://w1.loxa.edu.tw/xxxeee/timepicke.jpg)


###Update: 
2016/12/30 Support multi-Inputbox select<br/>
2016/01/15 touch to manually set time<br/>
2016/02/01 add 12 or 24 hour sections selected<br/>

#### Suggests & Questions
open for suggest and question welcome! [Contact me](mailto:horkenwong@gmail.com "horken")

Copyright © 2016 Horken Wong | WTFPL & MIT license
