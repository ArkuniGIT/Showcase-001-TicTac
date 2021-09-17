const gameDef = [
    {
        "label": "MatchId",
        "key": "matchId",
        "type": "text",
        "default": null,
        "required": true,
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
        "label": "ActiveUserId",
        "key": "activeUserId",
        "type": "text",
        "default": null,
        "required": true,
        "array": false
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
    {
        "label": "Board",
        "key": "board",
        "type": "numeric",
        "default": [],
        "required": true,
        "array": true
    },
]

export default gameDef;