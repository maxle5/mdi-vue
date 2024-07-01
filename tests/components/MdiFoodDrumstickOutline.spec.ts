
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFoodDrumstickOutline from "../../src/components/MdiFoodDrumstickOutline.vue";

test("MdiFoodDrumstickOutline snapshot", () => {
  const wrapper = mount(MdiFoodDrumstickOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
