
if (typeof document !== 'undefined') {
function afficher4(form4) {
    if (document.form4.choix[0].checked)
        alert('أحسنت. إجابة صحيحة !')
     else if (document.form4.choix[1].checked)
        alert('إجابة خاطئة !')
     else if (document.form4.choix[2].checked)
        alert('إجابة خاطئة !')
     else alert('اختر جوابا من الأجوبة المقترحة !');
   }
   
   function afficher5(form5) {
    if (document.form5.choix[0].checked)
        alert('إجابة خاطئة !')
     else if (document.form5.choix[1].checked)
        alert('أحسنت. إجابة صحيحة !')
     else if (document.form5.choix[2].checked)
        alert('إجابة خاطئة !')
     else alert('اختر جوابا من الأجوبة المقترحة !');
   }
   
   function afficher6(form6) {
    if (document.form6.choix[0].checked)
        alert('إجابة خاطئة !')
     else if (document.form6.choix[1].checked)
        alert('إجابة خاطئة !')
     else if (document.form6.choix[2].checked)
        alert('أحسنت. إجابة صحيحة !')
     else alert('اختر جوابا من الأجوبة المقترحة !');
   }
   
    function test(cases) {
     var rep=true;
     for (i=0; i< cases.length; i++) { 
      if (cases[i].value==1 && cases[i].checked==false) rep=false;
      if (cases[i].value==0 && cases[i].checked==true) rep=false;
     }
     return rep;
    }
   
     function erreurl(numliste) {
      laliste=eval("form1.liste"+numliste);
      return laliste[laliste.selectedIndex].value; 
     }
     
     function message(erreurs) {
      if (erreurs==0) alert('أحسنت. إجابة صحيحة !');
      else if (erreurs==1) alert('هناك خطأ واحد !');
      else if (erreurs==2) alert('لقد أخطأت في مناسبتين !');
      else alert('هناك '+erreurs+' أخطاء!');
     }
     
     function verif1() {
      erreurs=0;
      for (i=1; i<=5; i++) {
       erreurs+=eval(erreurl(i));
      }
      message(erreurs);
     } 
     
     function verif2() {
      erreurs=0;
      if (form2.rep1.value!="الانتثار") erreurs++;
      if (form2.rep2.value!="الرؤية") erreurs++;
      if (form2.rep3.value!="عاتم") erreurs++;
      if (form2.rep4.value!="شفاف") erreurs++;
      if (form2.rep5.value!="شاف") erreurs++;
      message(erreurs);
     }}