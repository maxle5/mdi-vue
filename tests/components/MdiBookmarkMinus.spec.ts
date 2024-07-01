
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBookmarkMinus from "../../src/components/MdiBookmarkMinus.vue";

test("MdiBookmarkMinus snapshot", () => {
  const wrapper = mount(MdiBookmarkMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
