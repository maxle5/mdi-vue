
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerPlayOutline from "../../src/components/MdiTimerPlayOutline.vue";

test("MdiTimerPlayOutline snapshot", () => {
  const wrapper = mount(MdiTimerPlayOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
