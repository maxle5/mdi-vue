
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBrush from "../../src/components/MdiBrush.vue";

test("MdiBrush snapshot", () => {
  const wrapper = mount(MdiBrush, {});
  expect(wrapper.html()).toMatchSnapshot();
});
