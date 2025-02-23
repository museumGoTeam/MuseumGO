export interface IDocument {
    _id: string
}

export interface IWithName {
    name: string
}

export interface APIRes<T> {
    message: string
    success: boolean
    data: T
}

export interface IAPIState<T> {
    loading: boolean,
    data: T | undefined
}
export interface APIResGetMap {
    map: TEntityNumber[][],
    pois: IPOI[],
    rooms: IRoom[]
}

export interface IPos {
    x: number,
    y: number
}

export interface ICell {
    entity: TEntityNumber,
    originPos: IPos
    relativePos: IPos
}

export interface IPOI extends IDocument, IWithName {
    description: string
    image: string
    pos: IPos
}

export interface IRoom extends IDocument{
    label: string
    pos: IPos
}

export interface IMap {
    map: TEntityNumber[][],
    pois: IPOI[],
    rooms: IRoom[]
}

export interface ItineraryPos {
    roomPos: Pos,
    poiPos: Pos
}

export type TEntityNumber = 0 | 1 | 2 | 3 | 4 | 5