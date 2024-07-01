
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumRemoveOutline from "../../src/components/MdiForumRemoveOutline.vue";

test("MdiForumRemoveOutline snapshot", () => {
  const wrapper = mount(MdiForumRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
