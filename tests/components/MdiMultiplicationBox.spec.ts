
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMultiplicationBox from "../../src/components/MdiMultiplicationBox.vue";

test("MdiMultiplicationBox snapshot", () => {
  const wrapper = mount(MdiMultiplicationBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
