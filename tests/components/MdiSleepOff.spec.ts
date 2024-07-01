
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSleepOff from "../../src/components/MdiSleepOff.vue";

test("MdiSleepOff snapshot", () => {
  const wrapper = mount(MdiSleepOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
