
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortAscending from "../../src/components/MdiSortAscending.vue";

test("MdiSortAscending snapshot", () => {
  const wrapper = mount(MdiSortAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
