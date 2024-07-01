
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAlphaSCircleOutline from "../../src/components/MdiAlphaSCircleOutline.vue";

test("MdiAlphaSCircleOutline snapshot", () => {
  const wrapper = mount(MdiAlphaSCircleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
