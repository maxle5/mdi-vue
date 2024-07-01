
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTimerMusic from "../../src/components/MdiTimerMusic.vue";

test("MdiTimerMusic snapshot", () => {
  const wrapper = mount(MdiTimerMusic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
