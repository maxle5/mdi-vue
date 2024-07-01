
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSelectionMultiple from "../../src/components/MdiSelectionMultiple.vue";

test("MdiSelectionMultiple snapshot", () => {
  const wrapper = mount(MdiSelectionMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
