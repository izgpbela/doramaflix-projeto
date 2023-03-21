var listaFilmes = [
  "https://1.bp.blogspot.com/--nDeM5QFrWU/XhZOm4-CjQI/AAAAAAAAOdw/z8jZuqO-dIoxl6f-2_45D4IlEVUmsCWogCLcBGAsYHQ/s1600/002.jpg",  
  "https://upload.wikimedia.org/wikipedia/pt/6/6a/True_Beauty_poster.jpg", 
  "https://occ-0-2794-2218.1.nflxso.net/dnm/api/v6/Da_vleYcahiCE7JMYt8LJRyoenc/AAAABRRjoP84uTG5kvmeCF2dDGgHBCVV7m53jACekdBaXQiCvUe84byqAthjQiDei5Nhn3stT_I7TRt9O76zkmUGB5OtQ1fc.jpg",
  "https://w0.peakpx.com/wallpaper/222/270/HD-wallpaper-vincenzo-kdrama.jpg","https://media.fstatic.com/92pFNv9IEoOBaDzE8JsuANugTww=/322x478/smart/filters:format(webp)/media/movies/covers/2022/02/FK7KfsCX0AIilIa.jpg","http://pm1.narvii.com/7655/f0cad906aa1f383e84d58c49b8b4bc4a5f89138cr1-1000-1500v2_00.jpg"
];

var nomesFilmes = [
  "Meteor Garden", 
  "True Beauty", 
  "Hotel del Luna",
  "vincezo",
  "Vinte e cinco,Vinte um",
  "Tudo bem não ser normal"
];

for(var i=0; i < listaFilmes.length; i++) {
  document.write('<div class="filmes">');
  document.write('<img src=' + listaFilmes[i]+ '><br>');
  document.write ("<span>" + nomesFilmes[i] + "</span>");
  document.write('</div>');
};
