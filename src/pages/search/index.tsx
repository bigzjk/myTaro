// import {ComponentClass} from 'react'
import { useEffect, useState } from '@tarojs/taro'

import { View } from '@tarojs/components'

import './index.scss'

export const Search = function() {
  const [num, setNum] = useState(1)
  useEffect(() => {
    console.log(num)
  })
  
  return <View onClick={()=>setNum(num+1)}>{num}</View>
}


// #region 导出注意
//
// 经过上面的声明后需要将导出的 Taro.Component 子类修改为子类本身的 props 属性
// 这样在使用这个子类时 Ts 才不会提示缺少 JSX 类型参数错误
//
// #endregion

// export default Search as ComponentClass<PageOwnProps, PageState>
export default Search
