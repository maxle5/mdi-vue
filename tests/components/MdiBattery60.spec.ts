
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery60 from "../../src/components/MdiBattery60.vue";

test("MdiBattery60 snapshot", () => {
  const wrapper = mount(MdiBattery60, {});
  expect(wrapper.html()).toMatchSnapshot();
});
