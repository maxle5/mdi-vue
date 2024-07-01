
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBulma from "../../src/components/MdiBulma.vue";

test("MdiBulma snapshot", () => {
  const wrapper = mount(MdiBulma, {});
  expect(wrapper.html()).toMatchSnapshot();
});
