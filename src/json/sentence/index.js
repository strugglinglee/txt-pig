import { dgrList } from "./dgr";
import { cuteList } from "./cute";
import { loneList } from "./lone";
import { nightList } from "./night";
import { wyyList } from "./wyy";
import { zyList } from "./zy";

//推荐列表取每个list前15个
const introList=dgrList.slice(0,15).concat(cuteList.slice(0,15),loneList.slice(0,15),nightList.slice(0,15),wyyList.slice(0,20))

export {
  dgrList,
  cuteList,
  loneList,
  nightList,
  wyyList,
  zyList,
  introList
}
