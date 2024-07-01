
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFilterMinusOutline from "../../src/components/MdiFilterMinusOutline.vue";

test("MdiFilterMinusOutline snapshot", () => {
  const wrapper = mount(MdiFilterMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
