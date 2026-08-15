import '@adonisjs/core/types/http'

type ParamValue = string | number | bigint | boolean

export type ScannedRoutes = {
  ALL: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'todos.index': { paramsTuple?: []; params?: {} }
    'todos.create': { paramsTuple?: []; params?: {} }
    'todos.store': { paramsTuple?: []; params?: {} }
    'todos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'todos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'todos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'todos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  GET: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'todos.index': { paramsTuple?: []; params?: {} }
    'todos.create': { paramsTuple?: []; params?: {} }
    'todos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'todos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  HEAD: {
    'home': { paramsTuple?: []; params?: {} }
    'new_account.create': { paramsTuple?: []; params?: {} }
    'session.create': { paramsTuple?: []; params?: {} }
    'todos.index': { paramsTuple?: []; params?: {} }
    'todos.create': { paramsTuple?: []; params?: {} }
    'todos.show': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
    'todos.edit': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  POST: {
    'new_account.store': { paramsTuple?: []; params?: {} }
    'session.store': { paramsTuple?: []; params?: {} }
    'session.destroy': { paramsTuple?: []; params?: {} }
    'todos.store': { paramsTuple?: []; params?: {} }
  }
  PUT: {
    'todos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  PATCH: {
    'todos.update': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
  DELETE: {
    'todos.destroy': { paramsTuple: [ParamValue]; params: {'id': ParamValue} }
  }
}
declare module '@adonisjs/core/types/http' {
  export interface RoutesList extends ScannedRoutes {}
}