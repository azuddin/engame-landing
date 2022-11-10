import * as React from "react";
import type { AriaSelectProps } from "@react-types/select";
import {
  HiddenSelect,
  mergeProps,
  useButton,
  useFocusRing,
  useSelect,
} from "react-aria";
import { FiChevronDown } from "react-icons/fi";
import { useSelectState } from "react-stately";
import { ListBox } from "./ListBox";
import { Popover } from "./Popover";

export const Select = <T extends object>(props: AriaSelectProps<T>) => {
  // Create state based on the incoming props
  let state = useSelectState(props);

  // Get props for child elements from useSelect
  let ref = React.useRef(null);
  let { labelProps, triggerProps, valueProps, menuProps } = useSelect(
    props,
    state,
    ref
  );

  // Get props for the button based on the trigger props from useSelect
  let { buttonProps } = useButton(triggerProps, ref);

  let { focusProps, isFocusVisible } = useFocusRing();

  return (
    <div className="inline-flex flex-col relative rounded-md border text-md">
      <div {...labelProps} className="font-lato text-xl">
        {props.label}
      </div>
      <HiddenSelect
        state={state}
        triggerRef={ref}
        label={props.label}
        name={props.name}
      />
      <button
        {...mergeProps(buttonProps, focusProps)}
        ref={ref}
        className={`px-4 py-2 text-md relative inline-flex flex-row items-center justify-between rounded-md overflow-hidden cursor-default shadow-sm outline-none ${
          state.isOpen ? "bg-gray-100" : "bg-white"
        }`}
      >
        <span
          {...valueProps}
          className={`text-md font-light ${
            state.selectedItem ? "text-gray-800" : "text-gray-500"
          }`}
        >
          {state.selectedItem
            ? state.selectedItem.rendered
            : props.placeholder || "Select an option"}
        </span>
        <FiChevronDown className={state.isOpen ? "transform rotate-180" : ""} />
      </button>
      {state.isOpen && (
        <Popover isOpen={state.isOpen} onClose={state.close}>
          <ListBox {...menuProps} state={state} />
        </Popover>
      )}
    </div>
  );
};
