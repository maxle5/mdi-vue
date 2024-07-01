
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumMinus from "../../src/components/MdiForumMinus.vue";

test("MdiForumMinus snapshot", () => {
  const wrapper = mount(MdiForumMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
