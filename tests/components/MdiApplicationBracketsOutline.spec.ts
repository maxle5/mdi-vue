
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiApplicationBracketsOutline from "../../src/components/MdiApplicationBracketsOutline.vue";

test("MdiApplicationBracketsOutline snapshot", () => {
  const wrapper = mount(MdiApplicationBracketsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
