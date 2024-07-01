
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkOutline from "../../src/components/MdiBookmarkOutline.vue";

test("MdiBookmarkOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
