
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReorderVertical from "../../src/components/MdiReorderVertical.vue";

test("MdiReorderVertical snapshot", () => {
  const wrapper = mount(MdiReorderVertical, {});
  expect(wrapper.html()).toMatchSnapshot();
});
