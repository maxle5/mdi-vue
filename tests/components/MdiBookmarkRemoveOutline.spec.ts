
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkRemoveOutline from "../../src/components/MdiBookmarkRemoveOutline.vue";

test("MdiBookmarkRemoveOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
