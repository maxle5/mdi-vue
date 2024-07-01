
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerStop from "../../src/components/MdiTimerStop.vue";

test("MdiTimerStop snapshot", () => {
  const wrapper = mount(MdiTimerStop, {});
  expect(wrapper.html()).toMatchSnapshot();
});
