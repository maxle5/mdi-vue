
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiImageMinusOutline from "../../src/components/MdiImageMinusOutline.vue";

test("MdiImageMinusOutline snapshot", () => {
  const wrapper = mount(MdiImageMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
