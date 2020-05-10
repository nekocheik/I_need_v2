import React from "react";

const NavBarre = () => {
  return <></>;
};

export default NavBarre;

const observable$ = new Rx.Observable((subscriber) => {
  subscriber.next(1);
  subscriber.next(2);
  setTimeout(() => {
    subscriber.next(3);
    subscriber.complete();
  }, 1000);
});

import { from } from "rxjs";

const a$ = from([1, 5, 9]);

a$.pipe(map((v) => v * 3)).subscribe({
  next(v) {
    console.log(`A ${v}`);
  },
  complete() {
    console.log(`I'm done !`);
  },
});
