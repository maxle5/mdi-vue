
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkOff from "../../src/components/MdiBookmarkOff.vue";

test("MdiBookmarkOff snapshot", () => {
  const wrapper = mount(MdiBookmarkOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
