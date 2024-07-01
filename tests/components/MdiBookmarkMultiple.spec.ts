
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkMultiple from "../../src/components/MdiBookmarkMultiple.vue";

test("MdiBookmarkMultiple snapshot", () => {
  const wrapper = mount(MdiBookmarkMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
