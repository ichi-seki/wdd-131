document.addEventListener('DOMContentLoaded', () => {
    const totalMovesEl = document.querySelector('#totalMoves');
    const avgMovesEl = document.querySelector('#avgMoves')
    const totalTimeEl = document.querySelector('#totalTime');
    const rankingListEl = document.querySelector('#rankingList')
    const rankingTitleEl = document.querySelector('.ranking h2')

    const params = new URLSearchParams(window.location.search);
    const currentMoves = parseInt(params.get('moves')) || 0;
    const currentTime = parseFloat(params.get('time')) || 0;

    totalMovesEl.textContent = currentMoves;
    totalTimeEl.textContent = currentTime.toFixed(2);

    const averageMoves = currentMoves / 10;
    avgMovesEl.textContent = averageMoves.toFixed(1);

    const newScore = {
        moves: currentMoves,
        time: currentTime
    };

    const rankingKey = 'gameRanking';
    let rankings = JSON.parse(localStorage.getItem(rankingKey)) || [];

    const isDuplicate = rankings.some(score =>
        score.moves === newScore.moves && score.time === newScore.time
    );

    if (newScore.moves > 0 && !isDuplicate) {
        rankings.push(newScore);

        rankings.sort((a, b) => {
            if (a.moves !== b.moves){
                return a.moves - b.moves;
            }
            return a.time - b.time;
        });

        rankings = rankings.slice(0, 3);

        localStorage.setItem(rankingKey, JSON.stringify(rankings));
    }

    const didRank = rankings.some(score =>
        score.moves === newScore.moves && score.time === newScore.time
    );

    if (didRank && newScore.moves > 0){
        const rankInMessage = document.createElement('span');
        rankInMessage.textContent = ` (ranked in!)`;
        rankInMessage.style.color = `rgb(245, 202, 46)`
        rankingTitleEl.appendChild(rankInMessage);
    }

    rankingListEl.innerHTML = '';
    for (let i = 0; i < 3; i++){
        const li = document.createElement('li')
        const score = rankings[i];

        if (score) {
            li.textContent = `${score.moves} moves / ${score.time.toFixed(2)}s`;

            if (score.moves === newScore.moves && score.time === newScore.time) {
                li.style.fontWeight = 'bold';
                li.style.color ='#32CD32';
            }
        } else {
            li.textContent = `No record yet`
            li.style.color = `#777`
        }
        rankingListEl.appendChild(li);
    }
});