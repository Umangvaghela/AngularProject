var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, Output, EventEmitter } from '@angular/core';
var UserComponent = /** @class */ (function () {
    function UserComponent() {
        this.nameChanged = new EventEmitter();
    }
    UserComponent.prototype.OnUserInput = function (event) {
        this.nameChanged.emit(event.target.value);
        //this.name = event.target.value;
    };
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "name", void 0);
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "nameChanged", void 0);
    UserComponent = __decorate([
        Component({
            selector: 'app-user',
            template: "\n        <input type=\"text\" (input)=\"OnUserInput($event)\" [value]=\"name\" >\n        <p> {{name}} </p>"
        })
    ], UserComponent);
    return UserComponent;
}());
export { UserComponent };
//# sourceMappingURL=user.component.js.map