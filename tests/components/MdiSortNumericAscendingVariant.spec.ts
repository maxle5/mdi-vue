
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortNumericAscendingVariant from "../../src/components/MdiSortNumericAscendingVariant.vue";

test("MdiSortNumericAscendingVariant snapshot", () => {
  const wrapper = mount(MdiSortNumericAscendingVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
