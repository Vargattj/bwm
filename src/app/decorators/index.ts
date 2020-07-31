export function VrgComponent(config) {
  console.log(config.message);

  return function (target) {
    console.log('Decorated class -', target);

    target.prototype.hello = "Hellow from decorator"
  };
}
