<?
// ----------------------------конфигурация-------------------------- //

$adminemail="panda.roc2017@gmail.com";  // e-mail админа


$date=date("d.m.y"); // число.месяц.год

$time=date("H:i"); // часы:минуты:секунды

$backurl="http://www.panda-roc.com.ua";  // На какую страничку переходит после отправки письма

//---------------------------------------------------------------------- //



// Принимаем данные с формы

$name=$_POST['name'];

$email=$_POST['email'];

$tel=$_POST['phone'];



// Проверяем валидность e-mail

if (!preg_match("|^([a-z0-9_\.\-]{1,20})@([a-z0-9\.\-]{1,20})\.([a-z]{2,4})|is",
strtolower($email)))

 {

  echo
"<center>Вернитесь <a
href='javascript:history.back(1)'><B>назад</B></a>. Вы
указали неверные данные!";

  }

 else

 {


$tel="


<p>Имя: $name</p>

<p>Телефон: $tel</p>

<p>E-mail: $email</p>

";


 // Отправляем письмо админу

mail("$adminemail", "$date $time Сообщение
от $name", "$tel");



// Сохраняем в базу данных

$f = fopen("message.txt", "a+");

fwrite($f," \n $date $time Сообщение от $name");

fwrite($f,"\n $tel ");

fwrite($f,"\n ---------------");

fclose($f);



// Выводим сообщение пользователю

print "<script language='Javascript'><!--
function reload() {location = \"$backurl\"}; setTimeout('reload()', 5000);
//--></script>

$tel

<p>Спасибо за заявку, мы свяжемся с Вами в ближайшее время! Хорошего дня ;)</p>";
exit;

 }

?>