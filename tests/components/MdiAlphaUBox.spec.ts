
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaUBox from "../../src/components/MdiAlphaUBox.vue";

test("MdiAlphaUBox snapshot", () => {
  const wrapper = mount(MdiAlphaUBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
