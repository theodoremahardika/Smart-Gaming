let pacar = prompt('Apakah kamu pacar aku? (1 untuk Ya, dan 2 untuk Tidak)');
pacar = Number(pacar); 

switch(pacar){
    case 1:
        alert('Yeayy lovee youu 🥰');
        break;
    case 2:
        alert('Yahh mengsedih 😢');
        break;
    default:
        alert('Tidak dikenali 😐');
        break;
}
