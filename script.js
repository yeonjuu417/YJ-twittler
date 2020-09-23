// var name = document.getElementById('type1') ;
// var comment = document.getElementById('type2');

function addf(){
    //날짜 정렬
    function getTimeStamp() {
        var d = new Date();
        var s =
          leadingZeros(d.getFullYear(), 4) + '-' +
          leadingZeros(d.getMonth() + 1, 2) + '-' +
          leadingZeros(d.getDate(), 2) + ' ' +
      
          leadingZeros(d.getHours(), 2) + ':' +
          leadingZeros(d.getMinutes(), 2) + ':' +
          leadingZeros(d.getSeconds(), 2);
      
        return s;
      }
      function leadingZeros(n, digits) {
        var zero = '';
        n = n.toString();
      
        if (n.length < digits) {
          for (i = 0; i < digits - n.length; i++)
            zero += '0';
        }
        return zero + n;
      }
    
    var name = document.getElementById('type1').value ;
    var comment = document.getElementById('type2').value;
  

    //1. 새 엘리먼트 li 만든다
    let li = document.createElement('LI');
    //2.li에 내용을 추가한다. 
    li.innerHTML = '<div class="reple"><div class="name">'+name+'</div><div class="date">'+getTimeStamp()+'</div><br><div class="comment">'+comment+'</div></div><hr>';
    //3.삽입할려는 부모엘리먼트 선택해서 가져오기
    let parent = document.querySelector('#ulp');
    //4.부모엘리먼트에 li추가하기
    parent.appendChild(li);

}

document.querySelector('#type3').onclick = addf ; 