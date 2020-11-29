import { Dimensions } from 'react-native'
import theme from '../theme/index'
const screenW = Dimensions.get("screen").width


export const CANVAS_WIDTH:number= 900;
export const CANVAS_HEIGHT: number = 900;
export const COL_NUMBER: number = 40;
export const ROW_NUMBER: number = 30;
export const CELL_SIZE_X = (screenW - theme.utils.wp2dp(2)) / 40
export const CELL_SIZE_Y = screenW / 30