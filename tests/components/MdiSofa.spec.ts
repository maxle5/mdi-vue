
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSofa from "../../src/components/MdiSofa.vue";

test("MdiSofa snapshot", () => {
  const wrapper = mount(MdiSofa, {});
  expect(wrapper.html()).toMatchSnapshot();
});
