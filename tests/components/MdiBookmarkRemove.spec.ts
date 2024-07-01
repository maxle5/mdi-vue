
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkRemove from "../../src/components/MdiBookmarkRemove.vue";

test("MdiBookmarkRemove snapshot", () => {
  const wrapper = mount(MdiBookmarkRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
