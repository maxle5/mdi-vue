
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagCarryOn from "../../src/components/MdiBagCarryOn.vue";

test("MdiBagCarryOn snapshot", () => {
  const wrapper = mount(MdiBagCarryOn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
