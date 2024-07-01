
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkMultipleOutline from "../../src/components/MdiBookmarkMultipleOutline.vue";

test("MdiBookmarkMultipleOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
