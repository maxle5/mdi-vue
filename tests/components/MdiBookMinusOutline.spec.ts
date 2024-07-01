
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookMinusOutline from "../../src/components/MdiBookMinusOutline.vue";

test("MdiBookMinusOutline snapshot", () => {
  const wrapper = mount(MdiBookMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
