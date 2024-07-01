
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSortBoolDescending from "../../src/components/MdiSortBoolDescending.vue";

test("MdiSortBoolDescending snapshot", () => {
  const wrapper = mount(MdiSortBoolDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
