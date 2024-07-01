
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaKBox from "../../src/components/MdiAlphaKBox.vue";

test("MdiAlphaKBox snapshot", () => {
  const wrapper = mount(MdiAlphaKBox, {});
  expect(wrapper.html()).toMatchSnapshot();
});
