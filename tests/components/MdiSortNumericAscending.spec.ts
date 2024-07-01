
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortNumericAscending from "../../src/components/MdiSortNumericAscending.vue";

test("MdiSortNumericAscending snapshot", () => {
  const wrapper = mount(MdiSortNumericAscending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
