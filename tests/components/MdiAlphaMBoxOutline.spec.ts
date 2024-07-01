
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaMBoxOutline from "../../src/components/MdiAlphaMBoxOutline.vue";

test("MdiAlphaMBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaMBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
