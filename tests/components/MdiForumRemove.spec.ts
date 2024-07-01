
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumRemove from "../../src/components/MdiForumRemove.vue";

test("MdiForumRemove snapshot", () => {
  const wrapper = mount(MdiForumRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
