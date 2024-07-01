
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkOffOutline from "../../src/components/MdiBookmarkOffOutline.vue";

test("MdiBookmarkOffOutline snapshot", () => {
  const wrapper = mount(MdiBookmarkOffOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
