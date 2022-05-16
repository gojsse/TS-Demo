// export declare type Listener = (items: Project[]) => void
export type Listener<T> = (items: T[]) => void

export enum ProjectStatus { Active, Finished }

export interface Draggable {
  dragStartHandler(event: DragEvent): void
  dragEndHandler(event: DragEvent): void
}

export interface DragTarget {
  dragOverHandler(event: DragEvent): void
  dropHandler(event: DragEvent): void
  dragLeaveHandler(event: DragEvent): void
}
