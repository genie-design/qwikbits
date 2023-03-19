import {
  $,
  component$,
  createContextId,
  Slot,
  useVisibleTask$,
  useContext,
  useContextProvider,
  useStore,
} from '@builder.io/qwik';
import type { QRL, Component } from '@builder.io/qwik';

type PortalInterface = {
  createPortal: QRL<(component: Component<{}>) => void> | undefined;
};

type PortalState = PortalInterface & {
  portals: Component<{}>[];
};

export const PortalContext = createContextId<PortalInterface>('portal');
export const usePortal = () =>
  useContext(PortalContext, { createPortal: undefined });

export const Portal = component$(() => {
  return <Slot />;
});

export const PortalProvider = component$(() => {
  const portalState = useStore<PortalState>({
    createPortal: undefined,
    portals: [],
  });

  const createPortal = $((component: Component<{}>) => {
    portalState.portals = [...portalState.portals, component];
  });

  useVisibleTask$(
    () => {
      portalState.createPortal = createPortal;
    },
    { strategy: 'document-ready' }
  );

  useContextProvider(PortalContext, portalState);
  return (
    <>
      {portalState.portals.map((PortalComp) => (
        <>
          TEST
          <PortalComp />
        </>
      ))}
      <Slot />
    </>
  );
});

export const QwikBitsProvider = component$(() => {
  const portalState = useStore<PortalState>({
    createPortal: undefined,
    portals: [],
  });

  const createPortal = $((component: Component<{}>) => {
    portalState.portals = [...portalState.portals, component];
  });

  useVisibleTask$(
    () => {
      portalState.createPortal = createPortal;
    },
    { strategy: 'document-ready' }
  );

  useContextProvider(PortalContext, portalState);
  return (
    <>
      <PortalProvider>
        <Slot />
      </PortalProvider>
    </>
  );
});
