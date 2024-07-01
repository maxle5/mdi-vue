
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaMCircleOutline from "../../src/components/MdiAlphaMCircleOutline.vue";

test("MdiAlphaMCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaMCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
