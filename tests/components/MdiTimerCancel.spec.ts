
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerCancel from "../../src/components/MdiTimerCancel.vue";

test("MdiTimerCancel snapshot", () => {
  const wrapper = mount(MdiTimerCancel, {});
  expect(wrapper.html()).toMatchSnapshot();
});
