
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCartRemove from "../../src/components/MdiCartRemove.vue";

test("MdiCartRemove snapshot", () => {
  const wrapper = mount(MdiCartRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
