
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBagChecked from "../../src/components/MdiBagChecked.vue";

test("MdiBagChecked snapshot", () => {
  const wrapper = mount(MdiBagChecked, {});
  expect(wrapper.html()).toMatchSnapshot();
});
