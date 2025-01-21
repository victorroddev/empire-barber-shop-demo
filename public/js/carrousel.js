document.addEventListener('DOMContentLoaded', () => {
    const packOne = document.getElementById('pack-1');
    const packTwo = document.getElementById('pack-2');
    const packThree = document.getElementById('pack-3');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');

    const packs = [packOne, packTwo, packThree];

    let actual = 0;

    function showNext(){
        actual = (actual + 1) % packs.length;
        showPack(actual);
    }

    function showLast(){
        actual = (actual - 1 + packs.length) % packs.length;
        showPack(actual)
    }

    function showPack(indice){
        packs.forEach((pack, i) => {
            pack.style.display = i === indice ? 'block' : 'none';
        });
    }

    showPack(actual);

    arrowLeft.addEventListener('click', showLast);
    arrowRight.addEventListener('click', showNext)


})