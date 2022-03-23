export function renderGame(name1, name2, score1, score2) {
    const div = document.createElement('div');
    const team1Div = renderTeam(name1, score1);
    const team2Div = renderTeam(name2, score2);

    div.append(team1Div, team2Div);

    div.classList.add('game');

    return div;
}

export function renderTeam(name, score) {
    const teamDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    teamDiv.classList.add('team');
    nameDiv.classList.add('name');
    scoreDiv.classList.add('score');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    teamDiv.append(nameDiv, scoreDiv);

    return teamDiv;
}