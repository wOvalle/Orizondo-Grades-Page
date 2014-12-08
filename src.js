keys = [];
est = [];
for (k in eDat.marks.mark) keys.push(k);
var e = document.getElementById('evals');
for (i = 0; i < keys.length; i++) {
   var act = eDat.marks.mark[keys[i]];
   for (j = 0; j < act.eval.length; j++) {
       var notact = act.eval[j];
       est.push({
           name: act.name,
           mat: keys[i],
           max: notact.max,
           res: notact.result,
           tit: notact.title });
       num = est.length - 1;
       r = e.insertRow();
       c1 = r.insertCell(0);
       c2 = r.insertCell(1);
       c3 = r.insertCell(2);
       c1.innerText = est[num].name;
       c2.innerText = est[num].tit;
       if (est[num].res == '[object Object]') est[num].res = "-";
       c3.innerText = est[num].res + "/" + est[num].max;

   }
}
