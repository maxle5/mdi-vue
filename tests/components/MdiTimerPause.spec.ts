
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerPause from "../../src/components/MdiTimerPause.vue";

test("MdiTimerPause snapshot", () => {
  const wrapper = mount(MdiTimerPause, {});
  expect(wrapper.html()).toMatchSnapshot();
});
