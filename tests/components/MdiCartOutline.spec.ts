
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartOutline from "../../src/components/MdiCartOutline.vue";

test("MdiCartOutline snapshot", () => {
  const wrapper = mount(MdiCartOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
