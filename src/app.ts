import { PineLine } from "./pineline/PineLine";
import { Entity } from "./model/Entity";

const pineLine = new PineLine<Entity>();

pineLine.addOperation({
  execute(obj: Entity) {
    obj.num += 1;
  }
}).addOperation({
  execute(obj: Entity) {
    obj.num *= 2;
  }
});

const data: Entity = { num: 1 };

pineLine.execute(data);
console.log(data);
