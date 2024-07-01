
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery90 from "../../src/components/MdiBattery90.vue";

test("MdiBattery90 snapshot", () => {
  const wrapper = mount(MdiBattery90, {});
  expect(wrapper.html()).toMatchSnapshot();
});
