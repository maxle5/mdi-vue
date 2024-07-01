
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPriorityLow from "../../src/components/MdiPriorityLow.vue";

test("MdiPriorityLow snapshot", () => {
  const wrapper = mount(MdiPriorityLow, {});
  expect(wrapper.html()).toMatchSnapshot();
});
