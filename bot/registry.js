export function getOwner(Registry, name){
  return Registry.owner(namehash(name));
}
