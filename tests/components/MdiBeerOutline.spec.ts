
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBeerOutline from "../../src/components/MdiBeerOutline.vue";

test("MdiBeerOutline snapshot", () => {
  const wrapper = mount(MdiBeerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
