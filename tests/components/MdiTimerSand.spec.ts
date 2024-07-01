
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSand from "../../src/components/MdiTimerSand.vue";

test("MdiTimerSand snapshot", () => {
  const wrapper = mount(MdiTimerSand, {});
  expect(wrapper.html()).toMatchSnapshot();
});
