quick_draw_data_set = ['pen', 'paper', 'book', 'bottle'];
random_number = Math.floor((Math.random()*quick_draw_data_set.length));


element_of_array = quick_draw_data_set[random_number];

console.log(element_of_array);

timer_counter = 0;
timer_check = "";
draw_sketch = "";
answer_holder = "";
score = 0;