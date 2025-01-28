var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var prompts = require('prompts');
var list = require('prompts/dist/prompts').list;
var Room = /** @class */ (function () {
    function Room(name, description) {
        this.name = name;
        this.description = description;
        this.connectingRooms = [];
        this.enemies = [];
    }
    Room.prototype.addNewRoomConnection = function (roomToAdd) {
        this.connectingRooms.push(roomToAdd);
    };
    Room.prototype.getNamesOfConnectingRooms = function () {
        return this.connectingRooms.map(function (room) { return room.name; });
    };
    ;
    Room.prototype.getConnectingRooms = function () {
        return this.connectingRooms;
    };
    return Room;
}());
var Enemy = /** @class */ (function () {
    function Enemy(name) {
        this.name = name;
    }
    return Enemy;
}());
var entrance = new Room('Entrance', 'It is a cavern with stone stairs leading to the darkness.');
var hallway = new Room('Hallway', 'It is a long, dark hallway with dark pools of water on the floor and some fungus growing on the walls.');
var chamber = new Room('Chamber', 'A big cavernous chamber with a high ceiling clouded in mist.');
var portal = new Room('Portal', 'A portal to another dimension.');
entrance.addNewRoomConnection(hallway);
hallway.addNewRoomConnection(chamber);
chamber.addNewRoomConnection(hallway);
chamber.addNewRoomConnection(portal);
var Player = /** @class */ (function () {
    function Player() {
        this.location = undefined;
    }
    Player.prototype.setLocation = function (room) {
        this.location = room;
    };
    Player.prototype.getLocation = function () {
        return this.location;
    };
    Player.prototype.lookAround = function () {
        if (this.location == undefined) {
            console.log("Location in undefined");
            return;
        }
        console.log("You look around.\n You are in the ".concat(this.location.name.toLowerCase(), ". ").concat(this.location.description, " \nThere are doorways leading to: \n"));
        var roomNames = this.location.getNamesOfConnectingRooms();
        roomNames.forEach(function (roomName) { return console.log("".concat(roomName)); });
    };
    Player.prototype.move = function (roomName) {
        if (this.location === undefined) {
            console.log('Player location is undefined');
            return;
        }
        var nextRoom = this.location.getConnectingRooms().find(function (room) { return room.name === roomName; });
        if (nextRoom) {
            this.setLocation(nextRoom);
        }
    };
    return Player;
}());
var player = new Player();
player.setLocation(entrance);
function gameLoop() {
    return __awaiter(this, void 0, void 0, function () {
        var continueGame, initialActionChoices, response, _a, moveActionChoices, listOfRoomNames, movementOptions, moveResponse;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    continueGame = true;
                    initialActionChoices = [
                        { title: 'Look around', value: 'look' },
                        { title: 'Go to Room', value: 'move' },
                        { title: 'Attack', value: 'attack' },
                        { title: 'Exit game', value: 'exit' },
                    ];
                    return [4 /*yield*/, prompts({
                            type: 'select',
                            name: 'value',
                            message: 'Choose your action',
                            choices: initialActionChoices,
                        })];
                case 1:
                    response = _b.sent();
                    console.log('You selected ' + response.value);
                    _a = response.value;
                    switch (_a) {
                        case 'look': return [3 /*break*/, 2];
                        case 'move': return [3 /*break*/, 3];
                        case 'attack': return [3 /*break*/, 5];
                        case 'exit': return [3 /*break*/, 6];
                    }
                    return [3 /*break*/, 7];
                case 2:
                    console.log('You look around.');
                    player.lookAround();
                    return [3 /*break*/, 7];
                case 3:
                    moveActionChoices = [];
                    listOfRoomNames = player.getLocation().getNamesOfConnectingRooms();
                    movementOptions = listOfRoomNames.map(function (roomName) { return ({
                        title: roomName,
                        value: roomName
                    }); });
                    moveActionChoices.push.apply(moveActionChoices, movementOptions);
                    return [4 /*yield*/, prompts({
                            type: 'select',
                            name: 'value',
                            message: 'To which room you want to go to?',
                            choices: moveActionChoices
                        })];
                case 4:
                    moveResponse = _b.sent();
                    console.log(moveResponse);
                    player.move(moveResponse.value);
                    if (player.location === portal) {
                        console.log("You've reached the portal. You won!");
                        continueGame = false;
                    }
                    return [3 /*break*/, 7];
                case 5: 
                // player.attack();
                return [3 /*break*/, 7];
                case 6:
                    continueGame = false;
                    return [3 /*break*/, 7];
                case 7:
                    if (!continueGame) return [3 /*break*/, 9];
                    return [4 /*yield*/, gameLoop()];
                case 8:
                    _b.sent();
                    _b.label = 9;
                case 9: return [2 /*return*/];
            }
        });
    });
}
// process.stdout.write('\033c'); // clear screen on windows
console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!');
console.log('================================================');
console.log('You walk down the stairs to the dungeons');
gameLoop();
