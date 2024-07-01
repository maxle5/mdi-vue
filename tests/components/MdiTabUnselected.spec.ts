
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTabUnselected from "../../src/components/MdiTabUnselected.vue";

test("MdiTabUnselected snapshot", () => {
  const wrapper = mount(MdiTabUnselected, {});
  expect(wrapper.html()).toMatchSnapshot();
});
