
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerRemoveOutline from "../../src/components/MdiTimerRemoveOutline.vue";

test("MdiTimerRemoveOutline snapshot", () => {
  const wrapper = mount(MdiTimerRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
