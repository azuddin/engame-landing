import * as React from "react";
import type { AriaListBoxOptions } from "@react-aria/listbox";
import type { Node } from "@react-types/shared";
import { useListBox, useListBoxSection, useOption } from "react-aria";
import { FiCheckCircle } from "react-icons/fi";
import type { ListState } from "react-stately";

interface ListBoxProps extends AriaListBoxOptions<unknown> {
  listBoxRef?: React.RefObject<HTMLUListElement>;
  state: ListState<unknown>;
}

interface SectionProps {
  section: Node<unknown>;
  state: ListState<unknown>;
}

interface OptionProps {
  item: Node<unknown>;
  state: ListState<unknown>;
}

export const ListBox = (props: ListBoxProps) => {
  let ref = React.useRef<HTMLUListElement>(null);
  let { listBoxRef = ref, state } = props;
  let { listBoxProps } = useListBox(props, state, listBoxRef);

  return (
    <ul
      {...listBoxProps}
      ref={listBoxRef}
      className="max-h-72 overflow-auto outline-none"
    >
      {[...state.collection].map((item) =>
        item.type === "section" ? (
          <ListBoxSection key={item.key} section={item} state={state} />
        ) : (
          <Option key={item.key} item={item} state={state} />
        )
      )}
    </ul>
  );
};

const ListBoxSection = ({ section, state }: SectionProps) => {
  let { itemProps, headingProps, groupProps } = useListBoxSection({
    heading: section.rendered,
    "aria-label": section["aria-label"],
  });

  return (
    <>
      <li {...itemProps} className="pt-2">
        {section.rendered && (
          <span
            {...headingProps}
            className="text-xs font-bold uppercase text-gray-500 mx-3"
          >
            {section.rendered}
          </span>
        )}
        <ul {...groupProps}>
          {[...section.childNodes].map((node) => (
            <Option key={node.key} item={node} state={state} />
          ))}
        </ul>
      </li>
    </>
  );
};

const Option = ({ item, state }: OptionProps) => {
  let ref = React.useRef<HTMLLIElement>(null);
  let { optionProps, isDisabled, isSelected, isFocused } = useOption(
    {
      key: item.key,
    },
    state,
    ref
  );

  let text = "text-gray-700";
  if (isFocused || isSelected) {
    text = "text-black";
  } else if (isDisabled) {
    text = "text-gray-200";
  }

  return (
    <li
      {...optionProps}
      ref={ref}
      className={`m-1 rounded-md px-4 py-2 text-2xl outline-none cursor-default flex items-center justify-between ${text} ${
        isFocused ? "bg-gray-100" : ""
      } ${isSelected ? "font-bold" : ""}`}
    >
      {item.rendered}
      {isSelected && (
        <FiCheckCircle aria-hidden="true" className="w-5 h-5 text-green-600" />
      )}
    </li>
  );
};
