
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortNumericDescending from "../../src/components/MdiSortNumericDescending.vue";

test("MdiSortNumericDescending snapshot", () => {
  const wrapper = mount(MdiSortNumericDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
