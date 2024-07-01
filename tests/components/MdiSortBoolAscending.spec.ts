
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortBoolAscending from "../../src/components/MdiSortBoolAscending.vue";

test("MdiSortBoolAscending snapshot", () => {
  const wrapper = mount(MdiSortBoolAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
