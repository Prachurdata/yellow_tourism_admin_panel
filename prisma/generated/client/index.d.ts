
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Admin
 * 
 */
export type Admin = $Result.DefaultSelection<Prisma.$AdminPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model FlightBooking
 * 
 */
export type FlightBooking = $Result.DefaultSelection<Prisma.$FlightBookingPayload>
/**
 * Model HotelBooking
 * 
 */
export type HotelBooking = $Result.DefaultSelection<Prisma.$HotelBookingPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const BookingStatus: {
  PENDING: 'PENDING',
  CONFIRMED: 'CONFIRMED',
  CANCELLED: 'CANCELLED'
};

export type BookingStatus = (typeof BookingStatus)[keyof typeof BookingStatus]


export const PaymentStatus: {
  UNPAID: 'UNPAID',
  AUTHORIZED: 'AUTHORIZED',
  PAID: 'PAID',
  REFUNDED: 'REFUNDED',
  FAILED: 'FAILED'
};

export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus]

}

export type BookingStatus = $Enums.BookingStatus

export const BookingStatus: typeof $Enums.BookingStatus

export type PaymentStatus = $Enums.PaymentStatus

export const PaymentStatus: typeof $Enums.PaymentStatus

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Admins
 * const admins = await prisma.admin.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Admins
   * const admins = await prisma.admin.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.admin`: Exposes CRUD operations for the **Admin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admin.findMany()
    * ```
    */
  get admin(): Prisma.AdminDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.flightBooking`: Exposes CRUD operations for the **FlightBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more FlightBookings
    * const flightBookings = await prisma.flightBooking.findMany()
    * ```
    */
  get flightBooking(): Prisma.FlightBookingDelegate<ExtArgs>;

  /**
   * `prisma.hotelBooking`: Exposes CRUD operations for the **HotelBooking** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more HotelBookings
    * const hotelBookings = await prisma.hotelBooking.findMany()
    * ```
    */
  get hotelBooking(): Prisma.HotelBookingDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Admin: 'Admin',
    User: 'User',
    FlightBooking: 'FlightBooking',
    HotelBooking: 'HotelBooking'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "admin" | "user" | "flightBooking" | "hotelBooking"
      txIsolationLevel: never
    }
    model: {
      Admin: {
        payload: Prisma.$AdminPayload<ExtArgs>
        fields: Prisma.AdminFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findFirst: {
            args: Prisma.AdminFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          findMany: {
            args: Prisma.AdminFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>[]
          }
          create: {
            args: Prisma.AdminCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          createMany: {
            args: Prisma.AdminCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.AdminDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          update: {
            args: Prisma.AdminUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          deleteMany: {
            args: Prisma.AdminDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AdminUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminPayload>
          }
          aggregate: {
            args: Prisma.AdminAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmin>
          }
          groupBy: {
            args: Prisma.AdminGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AdminFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.AdminAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.AdminCountArgs<ExtArgs>
            result: $Utils.Optional<AdminCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      FlightBooking: {
        payload: Prisma.$FlightBookingPayload<ExtArgs>
        fields: Prisma.FlightBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FlightBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FlightBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>
          }
          findFirst: {
            args: Prisma.FlightBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FlightBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>
          }
          findMany: {
            args: Prisma.FlightBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>[]
          }
          create: {
            args: Prisma.FlightBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>
          }
          createMany: {
            args: Prisma.FlightBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.FlightBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>
          }
          update: {
            args: Prisma.FlightBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>
          }
          deleteMany: {
            args: Prisma.FlightBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FlightBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.FlightBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FlightBookingPayload>
          }
          aggregate: {
            args: Prisma.FlightBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFlightBooking>
          }
          groupBy: {
            args: Prisma.FlightBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<FlightBookingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.FlightBookingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.FlightBookingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.FlightBookingCountArgs<ExtArgs>
            result: $Utils.Optional<FlightBookingCountAggregateOutputType> | number
          }
        }
      }
      HotelBooking: {
        payload: Prisma.$HotelBookingPayload<ExtArgs>
        fields: Prisma.HotelBookingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.HotelBookingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.HotelBookingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>
          }
          findFirst: {
            args: Prisma.HotelBookingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.HotelBookingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>
          }
          findMany: {
            args: Prisma.HotelBookingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>[]
          }
          create: {
            args: Prisma.HotelBookingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>
          }
          createMany: {
            args: Prisma.HotelBookingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          delete: {
            args: Prisma.HotelBookingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>
          }
          update: {
            args: Prisma.HotelBookingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>
          }
          deleteMany: {
            args: Prisma.HotelBookingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.HotelBookingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.HotelBookingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$HotelBookingPayload>
          }
          aggregate: {
            args: Prisma.HotelBookingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateHotelBooking>
          }
          groupBy: {
            args: Prisma.HotelBookingGroupByArgs<ExtArgs>
            result: $Utils.Optional<HotelBookingGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.HotelBookingFindRawArgs<ExtArgs>
            result: JsonObject
          }
          aggregateRaw: {
            args: Prisma.HotelBookingAggregateRawArgs<ExtArgs>
            result: JsonObject
          }
          count: {
            args: Prisma.HotelBookingCountArgs<ExtArgs>
            result: $Utils.Optional<HotelBookingCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    flight_bookings: number
    hotel_bookings: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight_bookings?: boolean | UserCountOutputTypeCountFlight_bookingsArgs
    hotel_bookings?: boolean | UserCountOutputTypeCountHotel_bookingsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFlight_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightBookingWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHotel_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelBookingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Admin
   */

  export type AggregateAdmin = {
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  export type AdminMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AdminCountAggregateOutputType = {
    id: number
    email: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AdminMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AdminCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AdminAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admin to aggregate.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminMaxAggregateInputType
  }

  export type GetAdminAggregateType<T extends AdminAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmin[P]>
      : GetScalarType<T[P], AggregateAdmin[P]>
  }




  export type AdminGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminWhereInput
    orderBy?: AdminOrderByWithAggregationInput | AdminOrderByWithAggregationInput[]
    by: AdminScalarFieldEnum[] | AdminScalarFieldEnum
    having?: AdminScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminCountAggregateInputType | true
    _min?: AdminMinAggregateInputType
    _max?: AdminMaxAggregateInputType
  }

  export type AdminGroupByOutputType = {
    id: string
    email: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: AdminCountAggregateOutputType | null
    _min: AdminMinAggregateOutputType | null
    _max: AdminMaxAggregateOutputType | null
  }

  type GetAdminGroupByPayload<T extends AdminGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminGroupByOutputType[P]>
            : GetScalarType<T[P], AdminGroupByOutputType[P]>
        }
      >
    >


  export type AdminSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["admin"]>


  export type AdminSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }


  export type $AdminPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admin"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["admin"]>
    composites: {}
  }

  type AdminGetPayload<S extends boolean | null | undefined | AdminDefaultArgs> = $Result.GetResult<Prisma.$AdminPayload, S>

  type AdminCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AdminFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AdminCountAggregateInputType | true
    }

  export interface AdminDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admin'], meta: { name: 'Admin' } }
    /**
     * Find zero or one Admin that matches the filter.
     * @param {AdminFindUniqueArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminFindUniqueArgs>(args: SelectSubset<T, AdminFindUniqueArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Admin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AdminFindUniqueOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Admin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminFindFirstArgs>(args?: SelectSubset<T, AdminFindFirstArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Admin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindFirstOrThrowArgs} args - Arguments to find a Admin
     * @example
     * // Get one Admin
     * const admin = await prisma.admin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admin.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminWithIdOnly = await prisma.admin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminFindManyArgs>(args?: SelectSubset<T, AdminFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Admin.
     * @param {AdminCreateArgs} args - Arguments to create a Admin.
     * @example
     * // Create one Admin
     * const Admin = await prisma.admin.create({
     *   data: {
     *     // ... data to create a Admin
     *   }
     * })
     * 
     */
    create<T extends AdminCreateArgs>(args: SelectSubset<T, AdminCreateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Admins.
     * @param {AdminCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admin = await prisma.admin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminCreateManyArgs>(args?: SelectSubset<T, AdminCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Admin.
     * @param {AdminDeleteArgs} args - Arguments to delete one Admin.
     * @example
     * // Delete one Admin
     * const Admin = await prisma.admin.delete({
     *   where: {
     *     // ... filter to delete one Admin
     *   }
     * })
     * 
     */
    delete<T extends AdminDeleteArgs>(args: SelectSubset<T, AdminDeleteArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Admin.
     * @param {AdminUpdateArgs} args - Arguments to update one Admin.
     * @example
     * // Update one Admin
     * const admin = await prisma.admin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminUpdateArgs>(args: SelectSubset<T, AdminUpdateArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Admins.
     * @param {AdminDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminDeleteManyArgs>(args?: SelectSubset<T, AdminDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admin = await prisma.admin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminUpdateManyArgs>(args: SelectSubset<T, AdminUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Admin.
     * @param {AdminUpsertArgs} args - Arguments to update or create a Admin.
     * @example
     * // Update or create a Admin
     * const admin = await prisma.admin.upsert({
     *   create: {
     *     // ... data to create a Admin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admin we want to update
     *   }
     * })
     */
    upsert<T extends AdminUpsertArgs>(args: SelectSubset<T, AdminUpsertArgs<ExtArgs>>): Prisma__AdminClient<$Result.GetResult<Prisma.$AdminPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Admins that matches the filter.
     * @param {AdminFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const admin = await prisma.admin.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: AdminFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Admin.
     * @param {AdminAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const admin = await prisma.admin.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: AdminAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admin.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminCountArgs>(
      args?: Subset<T, AdminCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AdminAggregateArgs>(args: Subset<T, AdminAggregateArgs>): Prisma.PrismaPromise<GetAdminAggregateType<T>>

    /**
     * Group by Admin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AdminGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminGroupByArgs['orderBy'] }
        : { orderBy?: AdminGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AdminGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admin model
   */
  readonly fields: AdminFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admin model
   */ 
  interface AdminFieldRefs {
    readonly id: FieldRef<"Admin", 'String'>
    readonly email: FieldRef<"Admin", 'String'>
    readonly password: FieldRef<"Admin", 'String'>
    readonly createdAt: FieldRef<"Admin", 'DateTime'>
    readonly updatedAt: FieldRef<"Admin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Admin findUnique
   */
  export type AdminFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findUniqueOrThrow
   */
  export type AdminFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin findFirst
   */
  export type AdminFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findFirstOrThrow
   */
  export type AdminFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admin to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin findMany
   */
  export type AdminFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminOrderByWithRelationInput | AdminOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminScalarFieldEnum | AdminScalarFieldEnum[]
  }

  /**
   * Admin create
   */
  export type AdminCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to create a Admin.
     */
    data: XOR<AdminCreateInput, AdminUncheckedCreateInput>
  }

  /**
   * Admin createMany
   */
  export type AdminCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminCreateManyInput | AdminCreateManyInput[]
  }

  /**
   * Admin update
   */
  export type AdminUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The data needed to update a Admin.
     */
    data: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
    /**
     * Choose, which Admin to update.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin updateMany
   */
  export type AdminUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminUpdateManyMutationInput, AdminUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminWhereInput
  }

  /**
   * Admin upsert
   */
  export type AdminUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * The filter to search for the Admin to update in case it exists.
     */
    where: AdminWhereUniqueInput
    /**
     * In case the Admin found by the `where` argument doesn't exist, create a new Admin with this data.
     */
    create: XOR<AdminCreateInput, AdminUncheckedCreateInput>
    /**
     * In case the Admin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminUpdateInput, AdminUncheckedUpdateInput>
  }

  /**
   * Admin delete
   */
  export type AdminDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
    /**
     * Filter which Admin to delete.
     */
    where: AdminWhereUniqueInput
  }

  /**
   * Admin deleteMany
   */
  export type AdminDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminWhereInput
  }

  /**
   * Admin findRaw
   */
  export type AdminFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin aggregateRaw
   */
  export type AdminAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * Admin without action
   */
  export type AdminDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admin
     */
    select?: AdminSelect<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    phone: string | null
    password: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    phone: number
    password: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    phone?: true
    password?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    phone: string
    password: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    flight_bookings?: boolean | User$flight_bookingsArgs<ExtArgs>
    hotel_bookings?: boolean | User$hotel_bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>


  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    phone?: boolean
    password?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    flight_bookings?: boolean | User$flight_bookingsArgs<ExtArgs>
    hotel_bookings?: boolean | User$hotel_bookingsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      flight_bookings: Prisma.$FlightBookingPayload<ExtArgs>[]
      hotel_bookings: Prisma.$HotelBookingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      phone: string
      password: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: UserFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: UserAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    flight_bookings<T extends User$flight_bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$flight_bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "findMany"> | Null>
    hotel_bookings<T extends User$hotel_bookingsArgs<ExtArgs> = {}>(args?: Subset<T, User$hotel_bookingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * User.flight_bookings
   */
  export type User$flight_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    where?: FlightBookingWhereInput
    orderBy?: FlightBookingOrderByWithRelationInput | FlightBookingOrderByWithRelationInput[]
    cursor?: FlightBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FlightBookingScalarFieldEnum | FlightBookingScalarFieldEnum[]
  }

  /**
   * User.hotel_bookings
   */
  export type User$hotel_bookingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    where?: HotelBookingWhereInput
    orderBy?: HotelBookingOrderByWithRelationInput | HotelBookingOrderByWithRelationInput[]
    cursor?: HotelBookingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: HotelBookingScalarFieldEnum | HotelBookingScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model FlightBooking
   */

  export type AggregateFlightBooking = {
    _count: FlightBookingCountAggregateOutputType | null
    _min: FlightBookingMinAggregateOutputType | null
    _max: FlightBookingMaxAggregateOutputType | null
  }

  export type FlightBookingMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: string | null
    tripjackAmount: string | null
    userId: string | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    orderId: string | null
    paymentId: string | null
    phone: string | null
    gstNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlightBookingMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: string | null
    tripjackAmount: string | null
    userId: string | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    orderId: string | null
    paymentId: string | null
    phone: string | null
    gstNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type FlightBookingCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    tripjackAmount: number
    userId: number
    status: number
    paymentStatus: number
    orderId: number
    paymentId: number
    phone: number
    gstNumber: number
    travellerInfo: number
    deliveryInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type FlightBookingMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    tripjackAmount?: true
    userId?: true
    status?: true
    paymentStatus?: true
    orderId?: true
    paymentId?: true
    phone?: true
    gstNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlightBookingMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    tripjackAmount?: true
    userId?: true
    status?: true
    paymentStatus?: true
    orderId?: true
    paymentId?: true
    phone?: true
    gstNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type FlightBookingCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    tripjackAmount?: true
    userId?: true
    status?: true
    paymentStatus?: true
    orderId?: true
    paymentId?: true
    phone?: true
    gstNumber?: true
    travellerInfo?: true
    deliveryInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type FlightBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightBooking to aggregate.
     */
    where?: FlightBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightBookings to fetch.
     */
    orderBy?: FlightBookingOrderByWithRelationInput | FlightBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FlightBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned FlightBookings
    **/
    _count?: true | FlightBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FlightBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FlightBookingMaxAggregateInputType
  }

  export type GetFlightBookingAggregateType<T extends FlightBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateFlightBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFlightBooking[P]>
      : GetScalarType<T[P], AggregateFlightBooking[P]>
  }




  export type FlightBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FlightBookingWhereInput
    orderBy?: FlightBookingOrderByWithAggregationInput | FlightBookingOrderByWithAggregationInput[]
    by: FlightBookingScalarFieldEnum[] | FlightBookingScalarFieldEnum
    having?: FlightBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FlightBookingCountAggregateInputType | true
    _min?: FlightBookingMinAggregateInputType
    _max?: FlightBookingMaxAggregateInputType
  }

  export type FlightBookingGroupByOutputType = {
    id: string
    bookingId: string
    amount: string
    tripjackAmount: string | null
    userId: string
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    orderId: string
    paymentId: string | null
    phone: string | null
    gstNumber: string | null
    travellerInfo: JsonValue[]
    deliveryInfo: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: FlightBookingCountAggregateOutputType | null
    _min: FlightBookingMinAggregateOutputType | null
    _max: FlightBookingMaxAggregateOutputType | null
  }

  type GetFlightBookingGroupByPayload<T extends FlightBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FlightBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FlightBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FlightBookingGroupByOutputType[P]>
            : GetScalarType<T[P], FlightBookingGroupByOutputType[P]>
        }
      >
    >


  export type FlightBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    tripjackAmount?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    orderId?: boolean
    paymentId?: boolean
    phone?: boolean
    gstNumber?: boolean
    travellerInfo?: boolean
    deliveryInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["flightBooking"]>


  export type FlightBookingSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    tripjackAmount?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    orderId?: boolean
    paymentId?: boolean
    phone?: boolean
    gstNumber?: boolean
    travellerInfo?: boolean
    deliveryInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type FlightBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $FlightBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "FlightBooking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amount: string
      tripjackAmount: string | null
      userId: string
      status: $Enums.BookingStatus
      paymentStatus: $Enums.PaymentStatus
      orderId: string
      paymentId: string | null
      phone: string | null
      gstNumber: string | null
      travellerInfo: Prisma.JsonValue[]
      deliveryInfo: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["flightBooking"]>
    composites: {}
  }

  type FlightBookingGetPayload<S extends boolean | null | undefined | FlightBookingDefaultArgs> = $Result.GetResult<Prisma.$FlightBookingPayload, S>

  type FlightBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<FlightBookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: FlightBookingCountAggregateInputType | true
    }

  export interface FlightBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['FlightBooking'], meta: { name: 'FlightBooking' } }
    /**
     * Find zero or one FlightBooking that matches the filter.
     * @param {FlightBookingFindUniqueArgs} args - Arguments to find a FlightBooking
     * @example
     * // Get one FlightBooking
     * const flightBooking = await prisma.flightBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FlightBookingFindUniqueArgs>(args: SelectSubset<T, FlightBookingFindUniqueArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one FlightBooking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {FlightBookingFindUniqueOrThrowArgs} args - Arguments to find a FlightBooking
     * @example
     * // Get one FlightBooking
     * const flightBooking = await prisma.flightBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FlightBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, FlightBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first FlightBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingFindFirstArgs} args - Arguments to find a FlightBooking
     * @example
     * // Get one FlightBooking
     * const flightBooking = await prisma.flightBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FlightBookingFindFirstArgs>(args?: SelectSubset<T, FlightBookingFindFirstArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first FlightBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingFindFirstOrThrowArgs} args - Arguments to find a FlightBooking
     * @example
     * // Get one FlightBooking
     * const flightBooking = await prisma.flightBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FlightBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, FlightBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more FlightBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all FlightBookings
     * const flightBookings = await prisma.flightBooking.findMany()
     * 
     * // Get first 10 FlightBookings
     * const flightBookings = await prisma.flightBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const flightBookingWithIdOnly = await prisma.flightBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FlightBookingFindManyArgs>(args?: SelectSubset<T, FlightBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a FlightBooking.
     * @param {FlightBookingCreateArgs} args - Arguments to create a FlightBooking.
     * @example
     * // Create one FlightBooking
     * const FlightBooking = await prisma.flightBooking.create({
     *   data: {
     *     // ... data to create a FlightBooking
     *   }
     * })
     * 
     */
    create<T extends FlightBookingCreateArgs>(args: SelectSubset<T, FlightBookingCreateArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many FlightBookings.
     * @param {FlightBookingCreateManyArgs} args - Arguments to create many FlightBookings.
     * @example
     * // Create many FlightBookings
     * const flightBooking = await prisma.flightBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FlightBookingCreateManyArgs>(args?: SelectSubset<T, FlightBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a FlightBooking.
     * @param {FlightBookingDeleteArgs} args - Arguments to delete one FlightBooking.
     * @example
     * // Delete one FlightBooking
     * const FlightBooking = await prisma.flightBooking.delete({
     *   where: {
     *     // ... filter to delete one FlightBooking
     *   }
     * })
     * 
     */
    delete<T extends FlightBookingDeleteArgs>(args: SelectSubset<T, FlightBookingDeleteArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one FlightBooking.
     * @param {FlightBookingUpdateArgs} args - Arguments to update one FlightBooking.
     * @example
     * // Update one FlightBooking
     * const flightBooking = await prisma.flightBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FlightBookingUpdateArgs>(args: SelectSubset<T, FlightBookingUpdateArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more FlightBookings.
     * @param {FlightBookingDeleteManyArgs} args - Arguments to filter FlightBookings to delete.
     * @example
     * // Delete a few FlightBookings
     * const { count } = await prisma.flightBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FlightBookingDeleteManyArgs>(args?: SelectSubset<T, FlightBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more FlightBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many FlightBookings
     * const flightBooking = await prisma.flightBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FlightBookingUpdateManyArgs>(args: SelectSubset<T, FlightBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one FlightBooking.
     * @param {FlightBookingUpsertArgs} args - Arguments to update or create a FlightBooking.
     * @example
     * // Update or create a FlightBooking
     * const flightBooking = await prisma.flightBooking.upsert({
     *   create: {
     *     // ... data to create a FlightBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the FlightBooking we want to update
     *   }
     * })
     */
    upsert<T extends FlightBookingUpsertArgs>(args: SelectSubset<T, FlightBookingUpsertArgs<ExtArgs>>): Prisma__FlightBookingClient<$Result.GetResult<Prisma.$FlightBookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more FlightBookings that matches the filter.
     * @param {FlightBookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const flightBooking = await prisma.flightBooking.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: FlightBookingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a FlightBooking.
     * @param {FlightBookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const flightBooking = await prisma.flightBooking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: FlightBookingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of FlightBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingCountArgs} args - Arguments to filter FlightBookings to count.
     * @example
     * // Count the number of FlightBookings
     * const count = await prisma.flightBooking.count({
     *   where: {
     *     // ... the filter for the FlightBookings we want to count
     *   }
     * })
    **/
    count<T extends FlightBookingCountArgs>(
      args?: Subset<T, FlightBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FlightBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a FlightBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FlightBookingAggregateArgs>(args: Subset<T, FlightBookingAggregateArgs>): Prisma.PrismaPromise<GetFlightBookingAggregateType<T>>

    /**
     * Group by FlightBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FlightBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FlightBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FlightBookingGroupByArgs['orderBy'] }
        : { orderBy?: FlightBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FlightBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFlightBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the FlightBooking model
   */
  readonly fields: FlightBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for FlightBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FlightBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the FlightBooking model
   */ 
  interface FlightBookingFieldRefs {
    readonly id: FieldRef<"FlightBooking", 'String'>
    readonly bookingId: FieldRef<"FlightBooking", 'String'>
    readonly amount: FieldRef<"FlightBooking", 'String'>
    readonly tripjackAmount: FieldRef<"FlightBooking", 'String'>
    readonly userId: FieldRef<"FlightBooking", 'String'>
    readonly status: FieldRef<"FlightBooking", 'BookingStatus'>
    readonly paymentStatus: FieldRef<"FlightBooking", 'PaymentStatus'>
    readonly orderId: FieldRef<"FlightBooking", 'String'>
    readonly paymentId: FieldRef<"FlightBooking", 'String'>
    readonly phone: FieldRef<"FlightBooking", 'String'>
    readonly gstNumber: FieldRef<"FlightBooking", 'String'>
    readonly travellerInfo: FieldRef<"FlightBooking", 'Json[]'>
    readonly deliveryInfo: FieldRef<"FlightBooking", 'Json'>
    readonly createdAt: FieldRef<"FlightBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"FlightBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * FlightBooking findUnique
   */
  export type FlightBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * Filter, which FlightBooking to fetch.
     */
    where: FlightBookingWhereUniqueInput
  }

  /**
   * FlightBooking findUniqueOrThrow
   */
  export type FlightBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * Filter, which FlightBooking to fetch.
     */
    where: FlightBookingWhereUniqueInput
  }

  /**
   * FlightBooking findFirst
   */
  export type FlightBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * Filter, which FlightBooking to fetch.
     */
    where?: FlightBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightBookings to fetch.
     */
    orderBy?: FlightBookingOrderByWithRelationInput | FlightBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightBookings.
     */
    cursor?: FlightBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightBookings.
     */
    distinct?: FlightBookingScalarFieldEnum | FlightBookingScalarFieldEnum[]
  }

  /**
   * FlightBooking findFirstOrThrow
   */
  export type FlightBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * Filter, which FlightBooking to fetch.
     */
    where?: FlightBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightBookings to fetch.
     */
    orderBy?: FlightBookingOrderByWithRelationInput | FlightBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for FlightBookings.
     */
    cursor?: FlightBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of FlightBookings.
     */
    distinct?: FlightBookingScalarFieldEnum | FlightBookingScalarFieldEnum[]
  }

  /**
   * FlightBooking findMany
   */
  export type FlightBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * Filter, which FlightBookings to fetch.
     */
    where?: FlightBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of FlightBookings to fetch.
     */
    orderBy?: FlightBookingOrderByWithRelationInput | FlightBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing FlightBookings.
     */
    cursor?: FlightBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` FlightBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` FlightBookings.
     */
    skip?: number
    distinct?: FlightBookingScalarFieldEnum | FlightBookingScalarFieldEnum[]
  }

  /**
   * FlightBooking create
   */
  export type FlightBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a FlightBooking.
     */
    data: XOR<FlightBookingCreateInput, FlightBookingUncheckedCreateInput>
  }

  /**
   * FlightBooking createMany
   */
  export type FlightBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many FlightBookings.
     */
    data: FlightBookingCreateManyInput | FlightBookingCreateManyInput[]
  }

  /**
   * FlightBooking update
   */
  export type FlightBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a FlightBooking.
     */
    data: XOR<FlightBookingUpdateInput, FlightBookingUncheckedUpdateInput>
    /**
     * Choose, which FlightBooking to update.
     */
    where: FlightBookingWhereUniqueInput
  }

  /**
   * FlightBooking updateMany
   */
  export type FlightBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update FlightBookings.
     */
    data: XOR<FlightBookingUpdateManyMutationInput, FlightBookingUncheckedUpdateManyInput>
    /**
     * Filter which FlightBookings to update
     */
    where?: FlightBookingWhereInput
  }

  /**
   * FlightBooking upsert
   */
  export type FlightBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the FlightBooking to update in case it exists.
     */
    where: FlightBookingWhereUniqueInput
    /**
     * In case the FlightBooking found by the `where` argument doesn't exist, create a new FlightBooking with this data.
     */
    create: XOR<FlightBookingCreateInput, FlightBookingUncheckedCreateInput>
    /**
     * In case the FlightBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FlightBookingUpdateInput, FlightBookingUncheckedUpdateInput>
  }

  /**
   * FlightBooking delete
   */
  export type FlightBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
    /**
     * Filter which FlightBooking to delete.
     */
    where: FlightBookingWhereUniqueInput
  }

  /**
   * FlightBooking deleteMany
   */
  export type FlightBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which FlightBookings to delete
     */
    where?: FlightBookingWhereInput
  }

  /**
   * FlightBooking findRaw
   */
  export type FlightBookingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FlightBooking aggregateRaw
   */
  export type FlightBookingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * FlightBooking without action
   */
  export type FlightBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the FlightBooking
     */
    select?: FlightBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FlightBookingInclude<ExtArgs> | null
  }


  /**
   * Model HotelBooking
   */

  export type AggregateHotelBooking = {
    _count: HotelBookingCountAggregateOutputType | null
    _min: HotelBookingMinAggregateOutputType | null
    _max: HotelBookingMaxAggregateOutputType | null
  }

  export type HotelBookingMinAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: string | null
    tripjackAmount: string | null
    userId: string | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    orderId: string | null
    paymentId: string | null
    phone: string | null
    gstNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelBookingMaxAggregateOutputType = {
    id: string | null
    bookingId: string | null
    amount: string | null
    tripjackAmount: string | null
    userId: string | null
    status: $Enums.BookingStatus | null
    paymentStatus: $Enums.PaymentStatus | null
    orderId: string | null
    paymentId: string | null
    phone: string | null
    gstNumber: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type HotelBookingCountAggregateOutputType = {
    id: number
    bookingId: number
    amount: number
    tripjackAmount: number
    userId: number
    status: number
    paymentStatus: number
    orderId: number
    paymentId: number
    phone: number
    gstNumber: number
    roomTravellerInfo: number
    deliveryInfo: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type HotelBookingMinAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    tripjackAmount?: true
    userId?: true
    status?: true
    paymentStatus?: true
    orderId?: true
    paymentId?: true
    phone?: true
    gstNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelBookingMaxAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    tripjackAmount?: true
    userId?: true
    status?: true
    paymentStatus?: true
    orderId?: true
    paymentId?: true
    phone?: true
    gstNumber?: true
    createdAt?: true
    updatedAt?: true
  }

  export type HotelBookingCountAggregateInputType = {
    id?: true
    bookingId?: true
    amount?: true
    tripjackAmount?: true
    userId?: true
    status?: true
    paymentStatus?: true
    orderId?: true
    paymentId?: true
    phone?: true
    gstNumber?: true
    roomTravellerInfo?: true
    deliveryInfo?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type HotelBookingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelBooking to aggregate.
     */
    where?: HotelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelBookings to fetch.
     */
    orderBy?: HotelBookingOrderByWithRelationInput | HotelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: HotelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned HotelBookings
    **/
    _count?: true | HotelBookingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: HotelBookingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: HotelBookingMaxAggregateInputType
  }

  export type GetHotelBookingAggregateType<T extends HotelBookingAggregateArgs> = {
        [P in keyof T & keyof AggregateHotelBooking]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateHotelBooking[P]>
      : GetScalarType<T[P], AggregateHotelBooking[P]>
  }




  export type HotelBookingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: HotelBookingWhereInput
    orderBy?: HotelBookingOrderByWithAggregationInput | HotelBookingOrderByWithAggregationInput[]
    by: HotelBookingScalarFieldEnum[] | HotelBookingScalarFieldEnum
    having?: HotelBookingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: HotelBookingCountAggregateInputType | true
    _min?: HotelBookingMinAggregateInputType
    _max?: HotelBookingMaxAggregateInputType
  }

  export type HotelBookingGroupByOutputType = {
    id: string
    bookingId: string
    amount: string
    tripjackAmount: string | null
    userId: string
    status: $Enums.BookingStatus
    paymentStatus: $Enums.PaymentStatus
    orderId: string
    paymentId: string | null
    phone: string | null
    gstNumber: string | null
    roomTravellerInfo: JsonValue[]
    deliveryInfo: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: HotelBookingCountAggregateOutputType | null
    _min: HotelBookingMinAggregateOutputType | null
    _max: HotelBookingMaxAggregateOutputType | null
  }

  type GetHotelBookingGroupByPayload<T extends HotelBookingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<HotelBookingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof HotelBookingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], HotelBookingGroupByOutputType[P]>
            : GetScalarType<T[P], HotelBookingGroupByOutputType[P]>
        }
      >
    >


  export type HotelBookingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    tripjackAmount?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    orderId?: boolean
    paymentId?: boolean
    phone?: boolean
    gstNumber?: boolean
    roomTravellerInfo?: boolean
    deliveryInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["hotelBooking"]>


  export type HotelBookingSelectScalar = {
    id?: boolean
    bookingId?: boolean
    amount?: boolean
    tripjackAmount?: boolean
    userId?: boolean
    status?: boolean
    paymentStatus?: boolean
    orderId?: boolean
    paymentId?: boolean
    phone?: boolean
    gstNumber?: boolean
    roomTravellerInfo?: boolean
    deliveryInfo?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type HotelBookingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $HotelBookingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "HotelBooking"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      bookingId: string
      amount: string
      tripjackAmount: string | null
      userId: string
      status: $Enums.BookingStatus
      paymentStatus: $Enums.PaymentStatus
      orderId: string
      paymentId: string | null
      phone: string | null
      gstNumber: string | null
      roomTravellerInfo: Prisma.JsonValue[]
      deliveryInfo: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["hotelBooking"]>
    composites: {}
  }

  type HotelBookingGetPayload<S extends boolean | null | undefined | HotelBookingDefaultArgs> = $Result.GetResult<Prisma.$HotelBookingPayload, S>

  type HotelBookingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<HotelBookingFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: HotelBookingCountAggregateInputType | true
    }

  export interface HotelBookingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['HotelBooking'], meta: { name: 'HotelBooking' } }
    /**
     * Find zero or one HotelBooking that matches the filter.
     * @param {HotelBookingFindUniqueArgs} args - Arguments to find a HotelBooking
     * @example
     * // Get one HotelBooking
     * const hotelBooking = await prisma.hotelBooking.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends HotelBookingFindUniqueArgs>(args: SelectSubset<T, HotelBookingFindUniqueArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one HotelBooking that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {HotelBookingFindUniqueOrThrowArgs} args - Arguments to find a HotelBooking
     * @example
     * // Get one HotelBooking
     * const hotelBooking = await prisma.hotelBooking.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends HotelBookingFindUniqueOrThrowArgs>(args: SelectSubset<T, HotelBookingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first HotelBooking that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingFindFirstArgs} args - Arguments to find a HotelBooking
     * @example
     * // Get one HotelBooking
     * const hotelBooking = await prisma.hotelBooking.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends HotelBookingFindFirstArgs>(args?: SelectSubset<T, HotelBookingFindFirstArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first HotelBooking that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingFindFirstOrThrowArgs} args - Arguments to find a HotelBooking
     * @example
     * // Get one HotelBooking
     * const hotelBooking = await prisma.hotelBooking.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends HotelBookingFindFirstOrThrowArgs>(args?: SelectSubset<T, HotelBookingFindFirstOrThrowArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more HotelBookings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all HotelBookings
     * const hotelBookings = await prisma.hotelBooking.findMany()
     * 
     * // Get first 10 HotelBookings
     * const hotelBookings = await prisma.hotelBooking.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const hotelBookingWithIdOnly = await prisma.hotelBooking.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends HotelBookingFindManyArgs>(args?: SelectSubset<T, HotelBookingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a HotelBooking.
     * @param {HotelBookingCreateArgs} args - Arguments to create a HotelBooking.
     * @example
     * // Create one HotelBooking
     * const HotelBooking = await prisma.hotelBooking.create({
     *   data: {
     *     // ... data to create a HotelBooking
     *   }
     * })
     * 
     */
    create<T extends HotelBookingCreateArgs>(args: SelectSubset<T, HotelBookingCreateArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many HotelBookings.
     * @param {HotelBookingCreateManyArgs} args - Arguments to create many HotelBookings.
     * @example
     * // Create many HotelBookings
     * const hotelBooking = await prisma.hotelBooking.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends HotelBookingCreateManyArgs>(args?: SelectSubset<T, HotelBookingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a HotelBooking.
     * @param {HotelBookingDeleteArgs} args - Arguments to delete one HotelBooking.
     * @example
     * // Delete one HotelBooking
     * const HotelBooking = await prisma.hotelBooking.delete({
     *   where: {
     *     // ... filter to delete one HotelBooking
     *   }
     * })
     * 
     */
    delete<T extends HotelBookingDeleteArgs>(args: SelectSubset<T, HotelBookingDeleteArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one HotelBooking.
     * @param {HotelBookingUpdateArgs} args - Arguments to update one HotelBooking.
     * @example
     * // Update one HotelBooking
     * const hotelBooking = await prisma.hotelBooking.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends HotelBookingUpdateArgs>(args: SelectSubset<T, HotelBookingUpdateArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more HotelBookings.
     * @param {HotelBookingDeleteManyArgs} args - Arguments to filter HotelBookings to delete.
     * @example
     * // Delete a few HotelBookings
     * const { count } = await prisma.hotelBooking.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends HotelBookingDeleteManyArgs>(args?: SelectSubset<T, HotelBookingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more HotelBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many HotelBookings
     * const hotelBooking = await prisma.hotelBooking.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends HotelBookingUpdateManyArgs>(args: SelectSubset<T, HotelBookingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one HotelBooking.
     * @param {HotelBookingUpsertArgs} args - Arguments to update or create a HotelBooking.
     * @example
     * // Update or create a HotelBooking
     * const hotelBooking = await prisma.hotelBooking.upsert({
     *   create: {
     *     // ... data to create a HotelBooking
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the HotelBooking we want to update
     *   }
     * })
     */
    upsert<T extends HotelBookingUpsertArgs>(args: SelectSubset<T, HotelBookingUpsertArgs<ExtArgs>>): Prisma__HotelBookingClient<$Result.GetResult<Prisma.$HotelBookingPayload<ExtArgs>, T, "upsert">, never, ExtArgs>

    /**
     * Find zero or more HotelBookings that matches the filter.
     * @param {HotelBookingFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const hotelBooking = await prisma.hotelBooking.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
     */
    findRaw(args?: HotelBookingFindRawArgs): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a HotelBooking.
     * @param {HotelBookingAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const hotelBooking = await prisma.hotelBooking.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
     */
    aggregateRaw(args?: HotelBookingAggregateRawArgs): Prisma.PrismaPromise<JsonObject>


    /**
     * Count the number of HotelBookings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingCountArgs} args - Arguments to filter HotelBookings to count.
     * @example
     * // Count the number of HotelBookings
     * const count = await prisma.hotelBooking.count({
     *   where: {
     *     // ... the filter for the HotelBookings we want to count
     *   }
     * })
    **/
    count<T extends HotelBookingCountArgs>(
      args?: Subset<T, HotelBookingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], HotelBookingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a HotelBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends HotelBookingAggregateArgs>(args: Subset<T, HotelBookingAggregateArgs>): Prisma.PrismaPromise<GetHotelBookingAggregateType<T>>

    /**
     * Group by HotelBooking.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {HotelBookingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends HotelBookingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: HotelBookingGroupByArgs['orderBy'] }
        : { orderBy?: HotelBookingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, HotelBookingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetHotelBookingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the HotelBooking model
   */
  readonly fields: HotelBookingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for HotelBooking.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__HotelBookingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the HotelBooking model
   */ 
  interface HotelBookingFieldRefs {
    readonly id: FieldRef<"HotelBooking", 'String'>
    readonly bookingId: FieldRef<"HotelBooking", 'String'>
    readonly amount: FieldRef<"HotelBooking", 'String'>
    readonly tripjackAmount: FieldRef<"HotelBooking", 'String'>
    readonly userId: FieldRef<"HotelBooking", 'String'>
    readonly status: FieldRef<"HotelBooking", 'BookingStatus'>
    readonly paymentStatus: FieldRef<"HotelBooking", 'PaymentStatus'>
    readonly orderId: FieldRef<"HotelBooking", 'String'>
    readonly paymentId: FieldRef<"HotelBooking", 'String'>
    readonly phone: FieldRef<"HotelBooking", 'String'>
    readonly gstNumber: FieldRef<"HotelBooking", 'String'>
    readonly roomTravellerInfo: FieldRef<"HotelBooking", 'Json[]'>
    readonly deliveryInfo: FieldRef<"HotelBooking", 'Json'>
    readonly createdAt: FieldRef<"HotelBooking", 'DateTime'>
    readonly updatedAt: FieldRef<"HotelBooking", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * HotelBooking findUnique
   */
  export type HotelBookingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * Filter, which HotelBooking to fetch.
     */
    where: HotelBookingWhereUniqueInput
  }

  /**
   * HotelBooking findUniqueOrThrow
   */
  export type HotelBookingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * Filter, which HotelBooking to fetch.
     */
    where: HotelBookingWhereUniqueInput
  }

  /**
   * HotelBooking findFirst
   */
  export type HotelBookingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * Filter, which HotelBooking to fetch.
     */
    where?: HotelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelBookings to fetch.
     */
    orderBy?: HotelBookingOrderByWithRelationInput | HotelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelBookings.
     */
    cursor?: HotelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelBookings.
     */
    distinct?: HotelBookingScalarFieldEnum | HotelBookingScalarFieldEnum[]
  }

  /**
   * HotelBooking findFirstOrThrow
   */
  export type HotelBookingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * Filter, which HotelBooking to fetch.
     */
    where?: HotelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelBookings to fetch.
     */
    orderBy?: HotelBookingOrderByWithRelationInput | HotelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for HotelBookings.
     */
    cursor?: HotelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelBookings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of HotelBookings.
     */
    distinct?: HotelBookingScalarFieldEnum | HotelBookingScalarFieldEnum[]
  }

  /**
   * HotelBooking findMany
   */
  export type HotelBookingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * Filter, which HotelBookings to fetch.
     */
    where?: HotelBookingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of HotelBookings to fetch.
     */
    orderBy?: HotelBookingOrderByWithRelationInput | HotelBookingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing HotelBookings.
     */
    cursor?: HotelBookingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` HotelBookings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` HotelBookings.
     */
    skip?: number
    distinct?: HotelBookingScalarFieldEnum | HotelBookingScalarFieldEnum[]
  }

  /**
   * HotelBooking create
   */
  export type HotelBookingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * The data needed to create a HotelBooking.
     */
    data: XOR<HotelBookingCreateInput, HotelBookingUncheckedCreateInput>
  }

  /**
   * HotelBooking createMany
   */
  export type HotelBookingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many HotelBookings.
     */
    data: HotelBookingCreateManyInput | HotelBookingCreateManyInput[]
  }

  /**
   * HotelBooking update
   */
  export type HotelBookingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * The data needed to update a HotelBooking.
     */
    data: XOR<HotelBookingUpdateInput, HotelBookingUncheckedUpdateInput>
    /**
     * Choose, which HotelBooking to update.
     */
    where: HotelBookingWhereUniqueInput
  }

  /**
   * HotelBooking updateMany
   */
  export type HotelBookingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update HotelBookings.
     */
    data: XOR<HotelBookingUpdateManyMutationInput, HotelBookingUncheckedUpdateManyInput>
    /**
     * Filter which HotelBookings to update
     */
    where?: HotelBookingWhereInput
  }

  /**
   * HotelBooking upsert
   */
  export type HotelBookingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * The filter to search for the HotelBooking to update in case it exists.
     */
    where: HotelBookingWhereUniqueInput
    /**
     * In case the HotelBooking found by the `where` argument doesn't exist, create a new HotelBooking with this data.
     */
    create: XOR<HotelBookingCreateInput, HotelBookingUncheckedCreateInput>
    /**
     * In case the HotelBooking was found with the provided `where` argument, update it with this data.
     */
    update: XOR<HotelBookingUpdateInput, HotelBookingUncheckedUpdateInput>
  }

  /**
   * HotelBooking delete
   */
  export type HotelBookingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
    /**
     * Filter which HotelBooking to delete.
     */
    where: HotelBookingWhereUniqueInput
  }

  /**
   * HotelBooking deleteMany
   */
  export type HotelBookingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which HotelBookings to delete
     */
    where?: HotelBookingWhereInput
  }

  /**
   * HotelBooking findRaw
   */
  export type HotelBookingFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HotelBooking aggregateRaw
   */
  export type HotelBookingAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }

  /**
   * HotelBooking without action
   */
  export type HotelBookingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the HotelBooking
     */
    select?: HotelBookingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: HotelBookingInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const AdminScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AdminScalarFieldEnum = (typeof AdminScalarFieldEnum)[keyof typeof AdminScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    phone: 'phone',
    password: 'password',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const FlightBookingScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    tripjackAmount: 'tripjackAmount',
    userId: 'userId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    orderId: 'orderId',
    paymentId: 'paymentId',
    phone: 'phone',
    gstNumber: 'gstNumber',
    travellerInfo: 'travellerInfo',
    deliveryInfo: 'deliveryInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type FlightBookingScalarFieldEnum = (typeof FlightBookingScalarFieldEnum)[keyof typeof FlightBookingScalarFieldEnum]


  export const HotelBookingScalarFieldEnum: {
    id: 'id',
    bookingId: 'bookingId',
    amount: 'amount',
    tripjackAmount: 'tripjackAmount',
    userId: 'userId',
    status: 'status',
    paymentStatus: 'paymentStatus',
    orderId: 'orderId',
    paymentId: 'paymentId',
    phone: 'phone',
    gstNumber: 'gstNumber',
    roomTravellerInfo: 'roomTravellerInfo',
    deliveryInfo: 'deliveryInfo',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type HotelBookingScalarFieldEnum = (typeof HotelBookingScalarFieldEnum)[keyof typeof HotelBookingScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BookingStatus'
   */
  export type EnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus'>
    


  /**
   * Reference to a field of type 'BookingStatus[]'
   */
  export type ListEnumBookingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BookingStatus[]'>
    


  /**
   * Reference to a field of type 'PaymentStatus'
   */
  export type EnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus'>
    


  /**
   * Reference to a field of type 'PaymentStatus[]'
   */
  export type ListEnumPaymentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PaymentStatus[]'>
    


  /**
   * Reference to a field of type 'Json[]'
   */
  export type ListJsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type AdminWhereInput = {
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    id?: StringFilter<"Admin"> | string
    email?: StringFilter<"Admin"> | string
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }

  export type AdminOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: AdminWhereInput | AdminWhereInput[]
    OR?: AdminWhereInput[]
    NOT?: AdminWhereInput | AdminWhereInput[]
    password?: StringFilter<"Admin"> | string
    createdAt?: DateTimeFilter<"Admin"> | Date | string
    updatedAt?: DateTimeFilter<"Admin"> | Date | string
  }, "id" | "email">

  export type AdminOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AdminCountOrderByAggregateInput
    _max?: AdminMaxOrderByAggregateInput
    _min?: AdminMinOrderByAggregateInput
  }

  export type AdminScalarWhereWithAggregatesInput = {
    AND?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    OR?: AdminScalarWhereWithAggregatesInput[]
    NOT?: AdminScalarWhereWithAggregatesInput | AdminScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Admin"> | string
    email?: StringWithAggregatesFilter<"Admin"> | string
    password?: StringWithAggregatesFilter<"Admin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Admin"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    phone?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    flight_bookings?: FlightBookingListRelationFilter
    hotel_bookings?: HotelBookingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    flight_bookings?: FlightBookingOrderByRelationAggregateInput
    hotel_bookings?: HotelBookingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    flight_bookings?: FlightBookingListRelationFilter
    hotel_bookings?: HotelBookingListRelationFilter
  }, "id" | "email" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    phone?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type FlightBookingWhereInput = {
    AND?: FlightBookingWhereInput | FlightBookingWhereInput[]
    OR?: FlightBookingWhereInput[]
    NOT?: FlightBookingWhereInput | FlightBookingWhereInput[]
    id?: StringFilter<"FlightBooking"> | string
    bookingId?: StringFilter<"FlightBooking"> | string
    amount?: StringFilter<"FlightBooking"> | string
    tripjackAmount?: StringNullableFilter<"FlightBooking"> | string | null
    userId?: StringFilter<"FlightBooking"> | string
    status?: EnumBookingStatusFilter<"FlightBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"FlightBooking"> | $Enums.PaymentStatus
    orderId?: StringFilter<"FlightBooking"> | string
    paymentId?: StringNullableFilter<"FlightBooking"> | string | null
    phone?: StringNullableFilter<"FlightBooking"> | string | null
    gstNumber?: StringNullableFilter<"FlightBooking"> | string | null
    travellerInfo?: JsonNullableListFilter<"FlightBooking">
    deliveryInfo?: JsonNullableFilter<"FlightBooking">
    createdAt?: DateTimeFilter<"FlightBooking"> | Date | string
    updatedAt?: DateTimeFilter<"FlightBooking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type FlightBookingOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    travellerInfo?: SortOrder
    deliveryInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type FlightBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    orderId?: string
    AND?: FlightBookingWhereInput | FlightBookingWhereInput[]
    OR?: FlightBookingWhereInput[]
    NOT?: FlightBookingWhereInput | FlightBookingWhereInput[]
    amount?: StringFilter<"FlightBooking"> | string
    tripjackAmount?: StringNullableFilter<"FlightBooking"> | string | null
    userId?: StringFilter<"FlightBooking"> | string
    status?: EnumBookingStatusFilter<"FlightBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"FlightBooking"> | $Enums.PaymentStatus
    paymentId?: StringNullableFilter<"FlightBooking"> | string | null
    phone?: StringNullableFilter<"FlightBooking"> | string | null
    gstNumber?: StringNullableFilter<"FlightBooking"> | string | null
    travellerInfo?: JsonNullableListFilter<"FlightBooking">
    deliveryInfo?: JsonNullableFilter<"FlightBooking">
    createdAt?: DateTimeFilter<"FlightBooking"> | Date | string
    updatedAt?: DateTimeFilter<"FlightBooking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "bookingId" | "orderId">

  export type FlightBookingOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    travellerInfo?: SortOrder
    deliveryInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: FlightBookingCountOrderByAggregateInput
    _max?: FlightBookingMaxOrderByAggregateInput
    _min?: FlightBookingMinOrderByAggregateInput
  }

  export type FlightBookingScalarWhereWithAggregatesInput = {
    AND?: FlightBookingScalarWhereWithAggregatesInput | FlightBookingScalarWhereWithAggregatesInput[]
    OR?: FlightBookingScalarWhereWithAggregatesInput[]
    NOT?: FlightBookingScalarWhereWithAggregatesInput | FlightBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"FlightBooking"> | string
    bookingId?: StringWithAggregatesFilter<"FlightBooking"> | string
    amount?: StringWithAggregatesFilter<"FlightBooking"> | string
    tripjackAmount?: StringNullableWithAggregatesFilter<"FlightBooking"> | string | null
    userId?: StringWithAggregatesFilter<"FlightBooking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"FlightBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"FlightBooking"> | $Enums.PaymentStatus
    orderId?: StringWithAggregatesFilter<"FlightBooking"> | string
    paymentId?: StringNullableWithAggregatesFilter<"FlightBooking"> | string | null
    phone?: StringNullableWithAggregatesFilter<"FlightBooking"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"FlightBooking"> | string | null
    travellerInfo?: JsonNullableListFilter<"FlightBooking">
    deliveryInfo?: JsonNullableWithAggregatesFilter<"FlightBooking">
    createdAt?: DateTimeWithAggregatesFilter<"FlightBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"FlightBooking"> | Date | string
  }

  export type HotelBookingWhereInput = {
    AND?: HotelBookingWhereInput | HotelBookingWhereInput[]
    OR?: HotelBookingWhereInput[]
    NOT?: HotelBookingWhereInput | HotelBookingWhereInput[]
    id?: StringFilter<"HotelBooking"> | string
    bookingId?: StringFilter<"HotelBooking"> | string
    amount?: StringFilter<"HotelBooking"> | string
    tripjackAmount?: StringNullableFilter<"HotelBooking"> | string | null
    userId?: StringFilter<"HotelBooking"> | string
    status?: EnumBookingStatusFilter<"HotelBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"HotelBooking"> | $Enums.PaymentStatus
    orderId?: StringFilter<"HotelBooking"> | string
    paymentId?: StringNullableFilter<"HotelBooking"> | string | null
    phone?: StringNullableFilter<"HotelBooking"> | string | null
    gstNumber?: StringNullableFilter<"HotelBooking"> | string | null
    roomTravellerInfo?: JsonNullableListFilter<"HotelBooking">
    deliveryInfo?: JsonNullableFilter<"HotelBooking">
    createdAt?: DateTimeFilter<"HotelBooking"> | Date | string
    updatedAt?: DateTimeFilter<"HotelBooking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type HotelBookingOrderByWithRelationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    roomTravellerInfo?: SortOrder
    deliveryInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type HotelBookingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    bookingId?: string
    orderId?: string
    AND?: HotelBookingWhereInput | HotelBookingWhereInput[]
    OR?: HotelBookingWhereInput[]
    NOT?: HotelBookingWhereInput | HotelBookingWhereInput[]
    amount?: StringFilter<"HotelBooking"> | string
    tripjackAmount?: StringNullableFilter<"HotelBooking"> | string | null
    userId?: StringFilter<"HotelBooking"> | string
    status?: EnumBookingStatusFilter<"HotelBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"HotelBooking"> | $Enums.PaymentStatus
    paymentId?: StringNullableFilter<"HotelBooking"> | string | null
    phone?: StringNullableFilter<"HotelBooking"> | string | null
    gstNumber?: StringNullableFilter<"HotelBooking"> | string | null
    roomTravellerInfo?: JsonNullableListFilter<"HotelBooking">
    deliveryInfo?: JsonNullableFilter<"HotelBooking">
    createdAt?: DateTimeFilter<"HotelBooking"> | Date | string
    updatedAt?: DateTimeFilter<"HotelBooking"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "bookingId" | "orderId">

  export type HotelBookingOrderByWithAggregationInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    roomTravellerInfo?: SortOrder
    deliveryInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: HotelBookingCountOrderByAggregateInput
    _max?: HotelBookingMaxOrderByAggregateInput
    _min?: HotelBookingMinOrderByAggregateInput
  }

  export type HotelBookingScalarWhereWithAggregatesInput = {
    AND?: HotelBookingScalarWhereWithAggregatesInput | HotelBookingScalarWhereWithAggregatesInput[]
    OR?: HotelBookingScalarWhereWithAggregatesInput[]
    NOT?: HotelBookingScalarWhereWithAggregatesInput | HotelBookingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"HotelBooking"> | string
    bookingId?: StringWithAggregatesFilter<"HotelBooking"> | string
    amount?: StringWithAggregatesFilter<"HotelBooking"> | string
    tripjackAmount?: StringNullableWithAggregatesFilter<"HotelBooking"> | string | null
    userId?: StringWithAggregatesFilter<"HotelBooking"> | string
    status?: EnumBookingStatusWithAggregatesFilter<"HotelBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusWithAggregatesFilter<"HotelBooking"> | $Enums.PaymentStatus
    orderId?: StringWithAggregatesFilter<"HotelBooking"> | string
    paymentId?: StringNullableWithAggregatesFilter<"HotelBooking"> | string | null
    phone?: StringNullableWithAggregatesFilter<"HotelBooking"> | string | null
    gstNumber?: StringNullableWithAggregatesFilter<"HotelBooking"> | string | null
    roomTravellerInfo?: JsonNullableListFilter<"HotelBooking">
    deliveryInfo?: JsonNullableWithAggregatesFilter<"HotelBooking">
    createdAt?: DateTimeWithAggregatesFilter<"HotelBooking"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"HotelBooking"> | Date | string
  }

  export type AdminCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminCreateManyInput = {
    id?: string
    email: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AdminUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flight_bookings?: FlightBookingCreateNestedManyWithoutUserInput
    hotel_bookings?: HotelBookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flight_bookings?: FlightBookingUncheckedCreateNestedManyWithoutUserInput
    hotel_bookings?: HotelBookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flight_bookings?: FlightBookingUpdateManyWithoutUserNestedInput
    hotel_bookings?: HotelBookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flight_bookings?: FlightBookingUncheckedUpdateManyWithoutUserNestedInput
    hotel_bookings?: HotelBookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightBookingCreateInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    travellerInfo?: FlightBookingCreatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutFlight_bookingsInput
  }

  export type FlightBookingUncheckedCreateInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    userId: string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    travellerInfo?: FlightBookingCreatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightBookingUpdateInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFlight_bookingsNestedInput
  }

  export type FlightBookingUncheckedUpdateInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightBookingCreateManyInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    userId: string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    travellerInfo?: FlightBookingCreatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightBookingUpdateManyMutationInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightBookingUncheckedUpdateManyInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelBookingCreateInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    roomTravellerInfo?: HotelBookingCreateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutHotel_bookingsInput
  }

  export type HotelBookingUncheckedCreateInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    userId: string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    roomTravellerInfo?: HotelBookingCreateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelBookingUpdateInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHotel_bookingsNestedInput
  }

  export type HotelBookingUncheckedUpdateInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelBookingCreateManyInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    userId: string
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    roomTravellerInfo?: HotelBookingCreateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelBookingUpdateManyMutationInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelBookingUncheckedUpdateManyInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AdminCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AdminMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type FlightBookingListRelationFilter = {
    every?: FlightBookingWhereInput
    some?: FlightBookingWhereInput
    none?: FlightBookingWhereInput
  }

  export type HotelBookingListRelationFilter = {
    every?: HotelBookingWhereInput
    some?: HotelBookingWhereInput
    none?: HotelBookingWhereInput
  }

  export type FlightBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type HotelBookingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type EnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type EnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }
  export type JsonNullableListFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableListFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableListFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableListFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableListFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel> | null
    has?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    hasEvery?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    hasSome?: InputJsonValue[] | ListJsonFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }
  export type JsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type FlightBookingCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    travellerInfo?: SortOrder
    deliveryInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type FlightBookingMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type EnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type EnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type HotelBookingCountOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    roomTravellerInfo?: SortOrder
    deliveryInfo?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelBookingMaxOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type HotelBookingMinOrderByAggregateInput = {
    id?: SortOrder
    bookingId?: SortOrder
    amount?: SortOrder
    tripjackAmount?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    paymentStatus?: SortOrder
    orderId?: SortOrder
    paymentId?: SortOrder
    phone?: SortOrder
    gstNumber?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type FlightBookingCreateNestedManyWithoutUserInput = {
    create?: XOR<FlightBookingCreateWithoutUserInput, FlightBookingUncheckedCreateWithoutUserInput> | FlightBookingCreateWithoutUserInput[] | FlightBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlightBookingCreateOrConnectWithoutUserInput | FlightBookingCreateOrConnectWithoutUserInput[]
    createMany?: FlightBookingCreateManyUserInputEnvelope
    connect?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
  }

  export type HotelBookingCreateNestedManyWithoutUserInput = {
    create?: XOR<HotelBookingCreateWithoutUserInput, HotelBookingUncheckedCreateWithoutUserInput> | HotelBookingCreateWithoutUserInput[] | HotelBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HotelBookingCreateOrConnectWithoutUserInput | HotelBookingCreateOrConnectWithoutUserInput[]
    createMany?: HotelBookingCreateManyUserInputEnvelope
    connect?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
  }

  export type FlightBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FlightBookingCreateWithoutUserInput, FlightBookingUncheckedCreateWithoutUserInput> | FlightBookingCreateWithoutUserInput[] | FlightBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlightBookingCreateOrConnectWithoutUserInput | FlightBookingCreateOrConnectWithoutUserInput[]
    createMany?: FlightBookingCreateManyUserInputEnvelope
    connect?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
  }

  export type HotelBookingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<HotelBookingCreateWithoutUserInput, HotelBookingUncheckedCreateWithoutUserInput> | HotelBookingCreateWithoutUserInput[] | HotelBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HotelBookingCreateOrConnectWithoutUserInput | HotelBookingCreateOrConnectWithoutUserInput[]
    createMany?: HotelBookingCreateManyUserInputEnvelope
    connect?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
  }

  export type FlightBookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlightBookingCreateWithoutUserInput, FlightBookingUncheckedCreateWithoutUserInput> | FlightBookingCreateWithoutUserInput[] | FlightBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlightBookingCreateOrConnectWithoutUserInput | FlightBookingCreateOrConnectWithoutUserInput[]
    upsert?: FlightBookingUpsertWithWhereUniqueWithoutUserInput | FlightBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlightBookingCreateManyUserInputEnvelope
    set?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    disconnect?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    delete?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    connect?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    update?: FlightBookingUpdateWithWhereUniqueWithoutUserInput | FlightBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlightBookingUpdateManyWithWhereWithoutUserInput | FlightBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlightBookingScalarWhereInput | FlightBookingScalarWhereInput[]
  }

  export type HotelBookingUpdateManyWithoutUserNestedInput = {
    create?: XOR<HotelBookingCreateWithoutUserInput, HotelBookingUncheckedCreateWithoutUserInput> | HotelBookingCreateWithoutUserInput[] | HotelBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HotelBookingCreateOrConnectWithoutUserInput | HotelBookingCreateOrConnectWithoutUserInput[]
    upsert?: HotelBookingUpsertWithWhereUniqueWithoutUserInput | HotelBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HotelBookingCreateManyUserInputEnvelope
    set?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    disconnect?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    delete?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    connect?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    update?: HotelBookingUpdateWithWhereUniqueWithoutUserInput | HotelBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HotelBookingUpdateManyWithWhereWithoutUserInput | HotelBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HotelBookingScalarWhereInput | HotelBookingScalarWhereInput[]
  }

  export type FlightBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FlightBookingCreateWithoutUserInput, FlightBookingUncheckedCreateWithoutUserInput> | FlightBookingCreateWithoutUserInput[] | FlightBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FlightBookingCreateOrConnectWithoutUserInput | FlightBookingCreateOrConnectWithoutUserInput[]
    upsert?: FlightBookingUpsertWithWhereUniqueWithoutUserInput | FlightBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FlightBookingCreateManyUserInputEnvelope
    set?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    disconnect?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    delete?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    connect?: FlightBookingWhereUniqueInput | FlightBookingWhereUniqueInput[]
    update?: FlightBookingUpdateWithWhereUniqueWithoutUserInput | FlightBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FlightBookingUpdateManyWithWhereWithoutUserInput | FlightBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FlightBookingScalarWhereInput | FlightBookingScalarWhereInput[]
  }

  export type HotelBookingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<HotelBookingCreateWithoutUserInput, HotelBookingUncheckedCreateWithoutUserInput> | HotelBookingCreateWithoutUserInput[] | HotelBookingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: HotelBookingCreateOrConnectWithoutUserInput | HotelBookingCreateOrConnectWithoutUserInput[]
    upsert?: HotelBookingUpsertWithWhereUniqueWithoutUserInput | HotelBookingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: HotelBookingCreateManyUserInputEnvelope
    set?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    disconnect?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    delete?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    connect?: HotelBookingWhereUniqueInput | HotelBookingWhereUniqueInput[]
    update?: HotelBookingUpdateWithWhereUniqueWithoutUserInput | HotelBookingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: HotelBookingUpdateManyWithWhereWithoutUserInput | HotelBookingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: HotelBookingScalarWhereInput | HotelBookingScalarWhereInput[]
  }

  export type FlightBookingCreatetravellerInfoInput = {
    set: InputJsonValue[]
  }

  export type UserCreateNestedOneWithoutFlight_bookingsInput = {
    create?: XOR<UserCreateWithoutFlight_bookingsInput, UserUncheckedCreateWithoutFlight_bookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlight_bookingsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type EnumBookingStatusFieldUpdateOperationsInput = {
    set?: $Enums.BookingStatus
  }

  export type EnumPaymentStatusFieldUpdateOperationsInput = {
    set?: $Enums.PaymentStatus
  }

  export type FlightBookingUpdatetravellerInfoInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type UserUpdateOneRequiredWithoutFlight_bookingsNestedInput = {
    create?: XOR<UserCreateWithoutFlight_bookingsInput, UserUncheckedCreateWithoutFlight_bookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFlight_bookingsInput
    upsert?: UserUpsertWithoutFlight_bookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFlight_bookingsInput, UserUpdateWithoutFlight_bookingsInput>, UserUncheckedUpdateWithoutFlight_bookingsInput>
  }

  export type HotelBookingCreateroomTravellerInfoInput = {
    set: InputJsonValue[]
  }

  export type UserCreateNestedOneWithoutHotel_bookingsInput = {
    create?: XOR<UserCreateWithoutHotel_bookingsInput, UserUncheckedCreateWithoutHotel_bookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHotel_bookingsInput
    connect?: UserWhereUniqueInput
  }

  export type HotelBookingUpdateroomTravellerInfoInput = {
    set?: InputJsonValue[]
    push?: InputJsonValue | InputJsonValue[]
  }

  export type UserUpdateOneRequiredWithoutHotel_bookingsNestedInput = {
    create?: XOR<UserCreateWithoutHotel_bookingsInput, UserUncheckedCreateWithoutHotel_bookingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutHotel_bookingsInput
    upsert?: UserUpsertWithoutHotel_bookingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHotel_bookingsInput, UserUpdateWithoutHotel_bookingsInput>, UserUncheckedUpdateWithoutHotel_bookingsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedEnumBookingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusFilter<$PrismaModel> | $Enums.BookingStatus
  }

  export type NestedEnumPaymentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusFilter<$PrismaModel> | $Enums.PaymentStatus
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.BookingStatus | EnumBookingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.BookingStatus[] | ListEnumBookingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumBookingStatusWithAggregatesFilter<$PrismaModel> | $Enums.BookingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBookingStatusFilter<$PrismaModel>
    _max?: NestedEnumBookingStatusFilter<$PrismaModel>
  }

  export type NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PaymentStatus | EnumPaymentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.PaymentStatus[] | ListEnumPaymentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumPaymentStatusWithAggregatesFilter<$PrismaModel> | $Enums.PaymentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPaymentStatusFilter<$PrismaModel>
    _max?: NestedEnumPaymentStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    isSet?: boolean
  }

  export type FlightBookingCreateWithoutUserInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    travellerInfo?: FlightBookingCreatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightBookingUncheckedCreateWithoutUserInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    travellerInfo?: FlightBookingCreatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightBookingCreateOrConnectWithoutUserInput = {
    where: FlightBookingWhereUniqueInput
    create: XOR<FlightBookingCreateWithoutUserInput, FlightBookingUncheckedCreateWithoutUserInput>
  }

  export type FlightBookingCreateManyUserInputEnvelope = {
    data: FlightBookingCreateManyUserInput | FlightBookingCreateManyUserInput[]
  }

  export type HotelBookingCreateWithoutUserInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    roomTravellerInfo?: HotelBookingCreateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelBookingUncheckedCreateWithoutUserInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    roomTravellerInfo?: HotelBookingCreateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelBookingCreateOrConnectWithoutUserInput = {
    where: HotelBookingWhereUniqueInput
    create: XOR<HotelBookingCreateWithoutUserInput, HotelBookingUncheckedCreateWithoutUserInput>
  }

  export type HotelBookingCreateManyUserInputEnvelope = {
    data: HotelBookingCreateManyUserInput | HotelBookingCreateManyUserInput[]
  }

  export type FlightBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: FlightBookingWhereUniqueInput
    update: XOR<FlightBookingUpdateWithoutUserInput, FlightBookingUncheckedUpdateWithoutUserInput>
    create: XOR<FlightBookingCreateWithoutUserInput, FlightBookingUncheckedCreateWithoutUserInput>
  }

  export type FlightBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: FlightBookingWhereUniqueInput
    data: XOR<FlightBookingUpdateWithoutUserInput, FlightBookingUncheckedUpdateWithoutUserInput>
  }

  export type FlightBookingUpdateManyWithWhereWithoutUserInput = {
    where: FlightBookingScalarWhereInput
    data: XOR<FlightBookingUpdateManyMutationInput, FlightBookingUncheckedUpdateManyWithoutUserInput>
  }

  export type FlightBookingScalarWhereInput = {
    AND?: FlightBookingScalarWhereInput | FlightBookingScalarWhereInput[]
    OR?: FlightBookingScalarWhereInput[]
    NOT?: FlightBookingScalarWhereInput | FlightBookingScalarWhereInput[]
    id?: StringFilter<"FlightBooking"> | string
    bookingId?: StringFilter<"FlightBooking"> | string
    amount?: StringFilter<"FlightBooking"> | string
    tripjackAmount?: StringNullableFilter<"FlightBooking"> | string | null
    userId?: StringFilter<"FlightBooking"> | string
    status?: EnumBookingStatusFilter<"FlightBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"FlightBooking"> | $Enums.PaymentStatus
    orderId?: StringFilter<"FlightBooking"> | string
    paymentId?: StringNullableFilter<"FlightBooking"> | string | null
    phone?: StringNullableFilter<"FlightBooking"> | string | null
    gstNumber?: StringNullableFilter<"FlightBooking"> | string | null
    travellerInfo?: JsonNullableListFilter<"FlightBooking">
    deliveryInfo?: JsonNullableFilter<"FlightBooking">
    createdAt?: DateTimeFilter<"FlightBooking"> | Date | string
    updatedAt?: DateTimeFilter<"FlightBooking"> | Date | string
  }

  export type HotelBookingUpsertWithWhereUniqueWithoutUserInput = {
    where: HotelBookingWhereUniqueInput
    update: XOR<HotelBookingUpdateWithoutUserInput, HotelBookingUncheckedUpdateWithoutUserInput>
    create: XOR<HotelBookingCreateWithoutUserInput, HotelBookingUncheckedCreateWithoutUserInput>
  }

  export type HotelBookingUpdateWithWhereUniqueWithoutUserInput = {
    where: HotelBookingWhereUniqueInput
    data: XOR<HotelBookingUpdateWithoutUserInput, HotelBookingUncheckedUpdateWithoutUserInput>
  }

  export type HotelBookingUpdateManyWithWhereWithoutUserInput = {
    where: HotelBookingScalarWhereInput
    data: XOR<HotelBookingUpdateManyMutationInput, HotelBookingUncheckedUpdateManyWithoutUserInput>
  }

  export type HotelBookingScalarWhereInput = {
    AND?: HotelBookingScalarWhereInput | HotelBookingScalarWhereInput[]
    OR?: HotelBookingScalarWhereInput[]
    NOT?: HotelBookingScalarWhereInput | HotelBookingScalarWhereInput[]
    id?: StringFilter<"HotelBooking"> | string
    bookingId?: StringFilter<"HotelBooking"> | string
    amount?: StringFilter<"HotelBooking"> | string
    tripjackAmount?: StringNullableFilter<"HotelBooking"> | string | null
    userId?: StringFilter<"HotelBooking"> | string
    status?: EnumBookingStatusFilter<"HotelBooking"> | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFilter<"HotelBooking"> | $Enums.PaymentStatus
    orderId?: StringFilter<"HotelBooking"> | string
    paymentId?: StringNullableFilter<"HotelBooking"> | string | null
    phone?: StringNullableFilter<"HotelBooking"> | string | null
    gstNumber?: StringNullableFilter<"HotelBooking"> | string | null
    roomTravellerInfo?: JsonNullableListFilter<"HotelBooking">
    deliveryInfo?: JsonNullableFilter<"HotelBooking">
    createdAt?: DateTimeFilter<"HotelBooking"> | Date | string
    updatedAt?: DateTimeFilter<"HotelBooking"> | Date | string
  }

  export type UserCreateWithoutFlight_bookingsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel_bookings?: HotelBookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFlight_bookingsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    hotel_bookings?: HotelBookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFlight_bookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFlight_bookingsInput, UserUncheckedCreateWithoutFlight_bookingsInput>
  }

  export type UserUpsertWithoutFlight_bookingsInput = {
    update: XOR<UserUpdateWithoutFlight_bookingsInput, UserUncheckedUpdateWithoutFlight_bookingsInput>
    create: XOR<UserCreateWithoutFlight_bookingsInput, UserUncheckedCreateWithoutFlight_bookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFlight_bookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFlight_bookingsInput, UserUncheckedUpdateWithoutFlight_bookingsInput>
  }

  export type UserUpdateWithoutFlight_bookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel_bookings?: HotelBookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFlight_bookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    hotel_bookings?: HotelBookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutHotel_bookingsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flight_bookings?: FlightBookingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHotel_bookingsInput = {
    id?: string
    name: string
    email: string
    phone: string
    password: string
    createdAt?: Date | string
    updatedAt?: Date | string
    flight_bookings?: FlightBookingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHotel_bookingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHotel_bookingsInput, UserUncheckedCreateWithoutHotel_bookingsInput>
  }

  export type UserUpsertWithoutHotel_bookingsInput = {
    update: XOR<UserUpdateWithoutHotel_bookingsInput, UserUncheckedUpdateWithoutHotel_bookingsInput>
    create: XOR<UserCreateWithoutHotel_bookingsInput, UserUncheckedCreateWithoutHotel_bookingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHotel_bookingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHotel_bookingsInput, UserUncheckedUpdateWithoutHotel_bookingsInput>
  }

  export type UserUpdateWithoutHotel_bookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flight_bookings?: FlightBookingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHotel_bookingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    flight_bookings?: FlightBookingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type FlightBookingCreateManyUserInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    travellerInfo?: FlightBookingCreatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type HotelBookingCreateManyUserInput = {
    id?: string
    bookingId: string
    amount: string
    tripjackAmount?: string | null
    status?: $Enums.BookingStatus
    paymentStatus?: $Enums.PaymentStatus
    orderId: string
    paymentId?: string | null
    phone?: string | null
    gstNumber?: string | null
    roomTravellerInfo?: HotelBookingCreateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type FlightBookingUpdateWithoutUserInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightBookingUncheckedUpdateWithoutUserInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FlightBookingUncheckedUpdateManyWithoutUserInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    travellerInfo?: FlightBookingUpdatetravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelBookingUpdateWithoutUserInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelBookingUncheckedUpdateWithoutUserInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type HotelBookingUncheckedUpdateManyWithoutUserInput = {
    bookingId?: StringFieldUpdateOperationsInput | string
    amount?: StringFieldUpdateOperationsInput | string
    tripjackAmount?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumBookingStatusFieldUpdateOperationsInput | $Enums.BookingStatus
    paymentStatus?: EnumPaymentStatusFieldUpdateOperationsInput | $Enums.PaymentStatus
    orderId?: StringFieldUpdateOperationsInput | string
    paymentId?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    gstNumber?: NullableStringFieldUpdateOperationsInput | string | null
    roomTravellerInfo?: HotelBookingUpdateroomTravellerInfoInput | InputJsonValue[]
    deliveryInfo?: InputJsonValue | InputJsonValue | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AdminDefaultArgs instead
     */
    export type AdminArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AdminDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use FlightBookingDefaultArgs instead
     */
    export type FlightBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = FlightBookingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use HotelBookingDefaultArgs instead
     */
    export type HotelBookingArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = HotelBookingDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}