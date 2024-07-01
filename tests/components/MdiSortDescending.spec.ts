
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortDescending from "../../src/components/MdiSortDescending.vue";

test("MdiSortDescending snapshot", () => {
  const wrapper = mount(MdiSortDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
