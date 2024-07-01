
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortVariant from "../../src/components/MdiSortVariant.vue";

test("MdiSortVariant snapshot", () => {
  const wrapper = mount(MdiSortVariant, {});
  expect(wrapper.html()).toMatchSnapshot();
});
