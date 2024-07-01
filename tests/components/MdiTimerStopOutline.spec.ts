
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerStopOutline from "../../src/components/MdiTimerStopOutline.vue";

test("MdiTimerStopOutline snapshot", () => {
  const wrapper = mount(MdiTimerStopOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
