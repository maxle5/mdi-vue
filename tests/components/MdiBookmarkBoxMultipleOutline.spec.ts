
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkBoxMultipleOutline from "../../src/components/MdiBookmarkBoxMultipleOutline.vue";

test("MdiBookmarkBoxMultipleOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkBoxMultipleOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
