export interface IResponseAPI {
  element_count: number,
  links: {
    next: string,
    previous: string,
    self: string,
  },
  near_earth_objects: {
    [key: string]: IAsteroidInfo[]
  }
}

export interface IAsteroidInfo {
  id: string,
  name: string,
  close_approach_data: [{
    close_approach_date: string,
    close_approach_date_full: string,
    epoch_date_close_approach: number,
    miss_distance: {
      kilometers: string,
      lunar: string,
    },
    relative_velocity: {
      kilometers_per_hour: string,
      kilometers_per_second: string,
      miles_per_hour: string,
    },
    orbiting_body: string
  }],
  estimated_diameter: {
    kilometers: IEstimatedDiameter,
    meters: IEstimatedDiameter,
  },
  is_potentially_hazardous_asteroid: boolean,

}

interface IEstimatedDiameter {
  estimated_diameter_max: number,
  estimated_diameter_min: number,
}

export interface IInitialState {
  isKm: boolean,
  order: IAsteroidInfo[]
}

export type ActionType = 'ADD_TO_ORDER' | 'REMOVE_FROM_ORDER' | 'CLEAR_ORDER' | 'SET_IS_KM'

export interface IAction {
  type: ActionType
  payload?: IAsteroidInfo
}