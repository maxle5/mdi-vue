
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerRemove from "../../src/components/MdiTimerRemove.vue";

test("MdiTimerRemove snapshot", () => {
  const wrapper = mount(MdiTimerRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
