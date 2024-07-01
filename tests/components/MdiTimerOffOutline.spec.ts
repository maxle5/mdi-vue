
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerOffOutline from "../../src/components/MdiTimerOffOutline.vue";

test("MdiTimerOffOutline snapshot", () => {
  const wrapper = mount(MdiTimerOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
