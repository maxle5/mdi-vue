
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardMinusOutline from "../../src/components/MdiCardMinusOutline.vue";

test("MdiCardMinusOutline snapshot", () => {
  const wrapper = mount(MdiCardMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
