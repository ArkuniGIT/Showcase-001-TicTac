const matchDef = [
    {
        "label": "GameId",
        "key": "gameId",
        "type": "text",
        "default": null,
        "required": false,
        "array": false
    },
    {
        "label": "Users",
        "key": "users",
        "type": "text",
        "default": null,
        "required": true,
        "array": true
    },
    {
        "label": "WinnerUserId",
        "key": "winnerUserId",
        "type": "text",
        "default": null,
        "required": false,
        "array": false
    },
    {
        "label": "State",
        "key": "state",
        "type": "numeric",
        "default": 0,
        "required": true,
        "array": false
    },
]

export default matchDef;