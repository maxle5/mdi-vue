
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodDrumstickOff from "../../src/components/MdiFoodDrumstickOff.vue";

test("MdiFoodDrumstickOff snapshot", () => {
  const wrapper = mount(MdiFoodDrumstickOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
