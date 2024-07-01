
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortNumericVariant from "../../src/components/MdiSortNumericVariant.vue";

test("MdiSortNumericVariant snapshot", () => {
  const wrapper = mount(MdiSortNumericVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
