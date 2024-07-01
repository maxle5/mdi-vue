
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerSandPaused from "../../src/components/MdiTimerSandPaused.vue";

test("MdiTimerSandPaused snapshot", () => {
  const wrapper = mount(MdiTimerSandPaused, {});
  expect(wrapper.html()).toMatchSnapshot();
});
