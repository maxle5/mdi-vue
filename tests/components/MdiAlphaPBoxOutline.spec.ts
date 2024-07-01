
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaPBoxOutline from "../../src/components/MdiAlphaPBoxOutline.vue";

test("MdiAlphaPBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaPBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
