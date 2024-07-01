
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodDrumstick from "../../src/components/MdiFoodDrumstick.vue";

test("MdiFoodDrumstick snapshot", () => {
  const wrapper = mount(MdiFoodDrumstick, {});
  expect(wrapper.html()).toMatchSnapshot();
});
