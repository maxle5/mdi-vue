
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagCarryOnCheck from "../../src/components/MdiBagCarryOnCheck.vue";

test("MdiBagCarryOnCheck snapshot", () => {
  const wrapper = mount(MdiBagCarryOnCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
