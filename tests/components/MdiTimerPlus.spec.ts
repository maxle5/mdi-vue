
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerPlus from "../../src/components/MdiTimerPlus.vue";

test("MdiTimerPlus snapshot", () => {
  const wrapper = mount(MdiTimerPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
