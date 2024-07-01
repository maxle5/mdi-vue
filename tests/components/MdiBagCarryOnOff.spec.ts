
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagCarryOnOff from "../../src/components/MdiBagCarryOnOff.vue";

test("MdiBagCarryOnOff snapshot", () => {
  const wrapper = mount(MdiBagCarryOnOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
