
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPriorityHigh from "../../src/components/MdiPriorityHigh.vue";

test("MdiPriorityHigh snapshot", () => {
  const wrapper = mount(MdiPriorityHigh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
