
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightnessAuto from "../../src/components/MdiBrightnessAuto.vue";

test("MdiBrightnessAuto snapshot", () => {
  const wrapper = mount(MdiBrightnessAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
