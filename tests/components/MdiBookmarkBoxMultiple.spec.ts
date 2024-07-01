
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkBoxMultiple from "../../src/components/MdiBookmarkBoxMultiple.vue";

test("MdiBookmarkBoxMultiple snapshot", () => {
  const wrapper = mount(MdiBookmarkBoxMultiple, {});
  expect(wrapper.html()).toMatchSnapshot();
});
