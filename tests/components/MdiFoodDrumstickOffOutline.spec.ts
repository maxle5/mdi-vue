
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodDrumstickOffOutline from "../../src/components/MdiFoodDrumstickOffOutline.vue";

test("MdiFoodDrumstickOffOutline snapshot", () => {
  const wrapper = mount(MdiFoodDrumstickOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
