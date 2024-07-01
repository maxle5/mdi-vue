
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerPlusOutline from "../../src/components/MdiTimerPlusOutline.vue";

test("MdiTimerPlusOutline snapshot", () => {
  const wrapper = mount(MdiTimerPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
