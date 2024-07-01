
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBaguette from "../../src/components/MdiBaguette.vue";

test("MdiBaguette snapshot", () => {
  const wrapper = mount(MdiBaguette, {});
  expect(wrapper.html()).toMatchSnapshot();
});
