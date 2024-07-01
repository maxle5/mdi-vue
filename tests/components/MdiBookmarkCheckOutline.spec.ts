
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkCheckOutline from "../../src/components/MdiBookmarkCheckOutline.vue";

test("MdiBookmarkCheckOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkCheckOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
