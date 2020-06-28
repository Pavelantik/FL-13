const $list = $(".list");
const $input = $("#add-input");
const $add = $("#add-submit");


const todos = [
  {
    text: "Buy milk",
    done: false
  },
  {
    text: "Play with dog",
    done: true
  }
];
const $findReset = $('#find-reset');
const $find = $('#find-input')
let filteredArr = [];
let filterMode = false;


//load from LocalStorage
function getFromLST(arg){
  if (localStorage.getItem(arg)){
    return JSON.parse(localStorage.getItem(arg));
  } else {
    return todos.slice();
  } 
}

//save to localStorage
function saveToLST(arg){
  localStorage.setItem('todosArray', JSON.stringify(arg))
}
//plugins
$.fn.paintlist = function(data){
  //console.log(this)
  data.forEach((el) =>  $(this).prepend(`<li class="item">
  <span class="item-text ${el.done ? 'done':''}">${el.text}</span>
  <button class="item-remove">Remove</button>
</li>` )
 )
//  $('.amount').calcAmount(todosArray);
 return this;
}

$.fn.calcAmount = function (data){
  console.log(data)
  const done = data.reduce((prev,item) => {
    if(item.done) {prev++};
    return prev;
  }, 0);
  const total = data.length;
  //alert('total='+total+ ' done='+done)
  //console.log(done.toString())
  this.find('.done-total').text(done.toString())
  this.find('.in-progress').text((total - done).toString())
  this.find('[some-attr]').text(total.toString())
  return this;
}


$(function(){
  $('.amount').calcAmount(todosArray);

})

// обробка додавання нового елемента
$('#add-submit').on('click', function (){
  if($('#add-input').prop('value')){
    todosArray.push({
      text: $('#add-input').prop('value'),
      done: false
    });
    saveToLST(todosArray);
    $('.list').paintlist(todosArray);
    $('.amount').calcAmount(todosArray);
  } else{
    alert('Error! Empty field.');
  } 
});

// обробка видалення
$('.list').on('click', '.item-remove', removeItem)
function removeItem(event){
  let indexDelEElement = $(event.target).parent().index();
  $(event.target).parent().remove();
if(!filterMode){
  todosArray.splice(todosArray.length-1-indexDelEElement,1);
  saveToLST(todosArray);
  $('.amount').calcAmount(todosArray);
} else {
  const indexOfdeletingItem = filteredArr.length-1-indexDelEElement;
  todosArray.splice(filteredArr[indexOfdeletingItem].position,1);
  saveToLST(todosArray);
  filteredArr.splice(indexOfdeletingItem,1);
  $('.amount').calcAmount(filteredArr);
}
}

//переключення виконано/невиконано
$('.list').on('click', '.item-text', function(event){
  let indexDelEElement = $(event.target).parent().index();
 $('.list').empty()
 if(!filterMode){
    todosArray[todosArray.length-1-indexDelEElement].done = !todosArray[todosArray.length-1-indexDelEElement].done;
    $('.list').paintlist(todosArray);
    $('.amount').calcAmount(todosArray);
 } else{
  const indexEditingItem = filteredArr.length-1-indexDelEElement;
  todosArray[filteredArr[indexEditingItem].position].done = !todosArray[filteredArr[indexEditingItem].position].done;
  $('.list').paintlist(filteredArr);
  $('.amount').calcAmount(filteredArr);
 }
 saveToLST(todosArray);
})

//пошук
$('#find-input').on('input',function(){
  filterMode = true;
  filteredArr = [];
  $list.empty();
  let typedText = $('#find-input').prop('value');
   todosArray.forEach((el, index) =>{
    if(el.text.toLowerCase().includes(typedText)){
      let matchedItem = el;
      matchedItem.position = index;
      filteredArr.push(matchedItem);     
    }
  })
  $list.paintlist(filteredArr)
  $('.amount').calcAmount(filteredArr);
  if (!$find.prop('value')) {
    filterMode = false;
    $('.amount').calcAmount(todosArray);
  }
})

let todosArray = getFromLST('todosArray');
$('.list').paintlist(todosArray);




