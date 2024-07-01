
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBedDouble from "../../src/components/MdiBedDouble.vue";

test("MdiBedDouble snapshot", () => {
  const wrapper = mount(MdiBedDouble, {});
  expect(wrapper.html()).toMatchSnapshot();
});
