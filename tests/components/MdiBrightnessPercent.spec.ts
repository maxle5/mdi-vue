
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrightnessPercent from "../../src/components/MdiBrightnessPercent.vue";

test("MdiBrightnessPercent snapshot", () => {
  const wrapper = mount(MdiBrightnessPercent, {});
  expect(wrapper.html()).toMatchSnapshot();
});
