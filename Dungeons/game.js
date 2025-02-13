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
    Room.prototype.addEnemy = function (enemy) {
        this.enemies.push(enemy);
    };
    Room.prototype.getEnemiesNames = function () {
        var names = [];
        this.enemies.forEach(function (enemy) { return names.push(enemy.name); });
        return names;
    };
    Room.prototype.getEnemies = function () {
        return this.enemies;
    };
    return Room;
}());
var Enemy = /** @class */ (function () {
    function Enemy(name, description, weapon, hitPoints, attackDamage, chanceOfAttackHit) {
        this.name = name;
        this.description = description;
        this.weapon = weapon;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.chanceOfAttackHit = chanceOfAttackHit;
    }
    Enemy.prototype.attack = function (player) {
        var attackPoints = Math.floor(Math.random() * 100);
        if (attackPoints < this.chanceOfAttackHit) {
            player.hitPoints -= this.attackDamage;
            if (player.hitPoints <= 0) {
                console.log("\nThe attack of ".concat(this.name, " was fatal. You've died"));
            }
            else {
                console.log("\n".concat(this.name, " attacks you with ").concat(this.weapon.toLocaleLowerCase(), "! \n The attack was successful and you are hit. The ").concat(this.name.toLowerCase(), " causes ").concat(this.attackDamage, " damage, you have ").concat(player.hitPoints, " health points left"));
            }
        }
        else {
            console.log("\n".concat(this.name, " attacks you with ").concat(this.weapon.toLowerCase(), "! \n The attack failed, you've defended yourself."));
        }
    };
    return Enemy;
}());
var entrance = new Room('Entrance', 'It is a cavern with stone stairs leading to the darkness.');
var hallway = new Room('Hallway', 'It is a long, dark hallway with dark pools of water on the floor and some fungus growing on the walls.');
var chamber = new Room('Chamber', 'A big cavernous chamber with a high ceiling clouded in mist.');
var portal = new Room('Glowing portal', 'A portal to another dimension.');
var rat = new Enemy('Sewer Rat', 'A scrappy, disease-ridden rodent scurrying through the damp, filthy tunnels, always ready to bite.', 'Sharp teeth', 2, 1, 50);
var rat2 = new Enemy('Small Sewer Rat', 'A tiny, quick rodent with beady eyes and a knack for darting into dark corners to avoid danger.', 'Small sharp teeth', 2, 1, 25);
var dragon = new Enemy('Giant Dragon', 'Towering above, this fearsome dragon breathes fire, its scales glistening like molten lava as it guards the deepest secrets of the sewer.', 'Sharp claws and fire breath', 4, 8, 80);
entrance.addNewRoomConnection(hallway);
hallway.addNewRoomConnection(chamber);
hallway.addNewRoomConnection(entrance);
chamber.addNewRoomConnection(hallway);
chamber.addNewRoomConnection(portal);
hallway.addEnemy(rat);
hallway.addEnemy(rat2);
chamber.addEnemy(dragon);
var Player = /** @class */ (function () {
    function Player(weapon, hitPoints, attackDamage, chanceOfAttackHit) {
        this.location = undefined;
        this.weapon = weapon;
        this.hitPoints = hitPoints;
        this.attackDamage = attackDamage;
        this.chanceOfAttackHit = chanceOfAttackHit;
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
        console.log("You are in the ".concat(this.location.name.toLowerCase(), ".\n").concat(this.location.description, "\n\nThere are doorways leading to:\n"));
        var roomNames = this.location.getNamesOfConnectingRooms();
        roomNames.forEach(function (roomName) {
            return console.log("".concat(roomName, "\n"));
        });
        var enemiesName = this.location.getEnemiesNames();
        if (enemiesName.length > 0) {
            console.log("\nYou see an enemy ".concat(enemiesName.join('& '), ".\n"));
            console.log(this.location.enemies.map(function (enemy) { return "".concat(enemy.name, " is ").concat(enemy.description.toLowerCase()); }).join('\n'));
        }
    };
    Player.prototype.move = function (roomName) {
        if (this.location === undefined) {
            console.log('Player location is undefined');
            return;
        }
        var nextRoom = this.location.getConnectingRooms().find(function (room) { return room.name === roomName; });
        if (this.location.enemies.length !== 0) {
            console.log("You cannot go past the enemies in the room!");
        }
        else if (nextRoom) {
            this.setLocation(nextRoom);
        }
    };
    Player.prototype.attack = function (enemyName) {
        var attackPoints = Math.floor(Math.random() * 100);
        var enemyToAttack = this.location.getEnemies().find(function (enemy) { return enemy.name === enemyName; });
        if (attackPoints < this.chanceOfAttackHit) {
            enemyToAttack.hitPoints -= this.attackDamage;
            if (enemyToAttack.hitPoints <= 0) {
                console.log("The attack was fatal. ".concat(enemyToAttack.name, " is destroyed."));
                var index = this.location.enemies.findIndex(function (enemy) { return enemy.name === enemyToAttack.name; });
                this.location.enemies.splice(index, 1);
            }
            else {
                console.log("You attack ".concat(enemyToAttack.name, " with your ").concat(this.weapon.toLowerCase(), "! \n The attack was successful and you are hit. You cause ").concat(this.attackDamage, " damage, ").concat(enemyToAttack.name, " has ").concat(enemyToAttack.hitPoints, " health points left"));
            }
        }
        else {
            console.log("You attack ".concat(enemyToAttack.name, " you with ").concat(this.weapon.toLowerCase(), "! \nThe attack failed!"));
        }
    };
    return Player;
}());
var player = new Player('Sharp sword', 10, 2, 75);
player.setLocation(entrance);
function gameLoop() {
    return __awaiter(this, void 0, void 0, function () {
        var continueGame, initialActionChoices, response, _a, moveActionChoices, listOfRoomNames, movementOptions, moveResponse, attackChoices, listOfEnemies, attackOptions, attackResponse;
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
                        case 'exit': return [3 /*break*/, 7];
                    }
                    return [3 /*break*/, 8];
                case 2:
                    player.lookAround();
                    if (player.location.enemies.length > 0) {
                        player.location.enemies[0].attack(player);
                    }
                    if (player.hitPoints <= 0) {
                        console.log("The game has ended");
                        continueGame = false;
                    }
                    return [3 /*break*/, 8];
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
                    player.move(moveResponse.value);
                    if (player.location === portal) {
                        console.log("You've reached the portal. You won!");
                        continueGame = false;
                    }
                    return [3 /*break*/, 8];
                case 5:
                    attackChoices = [];
                    listOfEnemies = player.getLocation().getEnemiesNames();
                    attackOptions = listOfEnemies.map(function (enemy) { return ({
                        title: enemy,
                        value: enemy
                    }); });
                    attackChoices.push.apply(attackChoices, attackOptions);
                    return [4 /*yield*/, prompts({
                            type: 'select',
                            name: 'value',
                            message: 'Which enemy do you want to attack?',
                            choices: attackChoices
                        })];
                case 6:
                    attackResponse = _b.sent();
                    player.attack(attackResponse.value);
                    if (player.hitPoints <= 0) {
                        console.log("The game has ended");
                        continueGame = false;
                    }
                    return [3 /*break*/, 8];
                case 7:
                    continueGame = false;
                    return [3 /*break*/, 8];
                case 8:
                    if (!continueGame) return [3 /*break*/, 10];
                    return [4 /*yield*/, gameLoop()];
                case 9:
                    _b.sent();
                    _b.label = 10;
                case 10: return [2 /*return*/];
            }
        });
    });
}
// process.stdout.write('\033c'); // clear screen on windows/
console.log('WELCOME TO THE DUNGEONS OF LORD OBJECT ORIENTUS!');
console.log('================================================');
console.log('You walk down the stairs to the dungeons');
gameLoop();
