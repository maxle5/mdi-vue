
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountMinusOutline from "../../src/components/MdiAccountMinusOutline.vue";

test("MdiAccountMinusOutline snapshot", () => {
  const wrapper = mount(MdiAccountMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
