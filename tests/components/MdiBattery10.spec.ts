
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBattery10 from "../../src/components/MdiBattery10.vue";

test("MdiBattery10 snapshot", () => {
  const wrapper = mount(MdiBattery10, {});
  expect(wrapper.html()).toMatchSnapshot();
});
