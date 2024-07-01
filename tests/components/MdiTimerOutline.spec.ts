
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerOutline from "../../src/components/MdiTimerOutline.vue";

test("MdiTimerOutline snapshot", () => {
  const wrapper = mount(MdiTimerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
