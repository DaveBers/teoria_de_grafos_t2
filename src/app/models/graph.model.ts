export interface Neighbor {
    [key: string]: number;
  }
  
  export interface Capital {
    name: string;
    toll: number;
    neighbors: Neighbor;
  }