
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaBBoxOutline from "../../src/components/MdiAlphaBBoxOutline.vue";

test("MdiAlphaBBoxOutline snapshot", () => {
  const wrapper = mount(MdiAlphaBBoxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
