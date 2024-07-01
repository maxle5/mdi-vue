
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReflectVertical from "../../src/components/MdiReflectVertical.vue";

test("MdiReflectVertical snapshot", () => {
  const wrapper = mount(MdiReflectVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
