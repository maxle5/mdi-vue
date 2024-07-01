
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkPlusOutline from "../../src/components/MdiBookmarkPlusOutline.vue";

test("MdiBookmarkPlusOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
