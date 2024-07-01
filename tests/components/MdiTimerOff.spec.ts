
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerOff from "../../src/components/MdiTimerOff.vue";

test("MdiTimerOff snapshot", () => {
  const wrapper = mount(MdiTimerOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
