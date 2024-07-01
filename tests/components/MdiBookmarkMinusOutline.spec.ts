
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkMinusOutline from "../../src/components/MdiBookmarkMinusOutline.vue";

test("MdiBookmarkMinusOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
