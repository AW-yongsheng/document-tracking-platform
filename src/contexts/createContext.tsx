/* eslint-disable func-style */

import React, {
  useRef,
  createContext,
  useContext,
  useCallback,
  useSyncExternalStore,
} from 'react';

export default function createFastContext<Store>(initialState: Store) {
  function useStoreData(): {
    get: () => Store;
    set: (value: Partial<Store>) => void;
    subscribe: (callback: () => void) => () => void;
  } {
    const store = useRef(initialState);

    const get = useCallback(() => {
      return store.current;
    }, []);

    const subscribers = useRef(new Set<() => void>());

    const set = useCallback((value: Partial<Store>) => {
      store.current = { ...store.current, ...value };
      subscribers.current.forEach((callback) => {
        return callback();
      });
    }, []);

    const subscribe = useCallback((callback: () => void) => {
      subscribers.current.add(callback);
      return () => {
        return subscribers.current.delete(callback);
      };
    }, []);

    return {
      get,
      set,
      subscribe,
    };
  }

  type UseStoreDataReturnType = ReturnType<typeof useStoreData>;

  const StoreContext = createContext<UseStoreDataReturnType | null>(null);

  function Provider({ children }: { children: React.ReactNode }) {
    return (
      <StoreContext.Provider value={useStoreData()}>
        {children}
      </StoreContext.Provider>
    );
  }

  function useStore<SelectorOutput>(
    selector: (store: Store) => SelectorOutput,
  ): [SelectorOutput, (value: Partial<Store>) => void] {
    const store = useContext(StoreContext);
    if (!store) {
      throw new Error(`Store not found`);
    }

    const state = useSyncExternalStore(
      store.subscribe,
      () => {
        return selector(store.get());
      },
      () => {
        return selector(initialState);
      },
    );

    return [state, store.set];
  }

  return {
    Provider,
    useStore,
  };
}
