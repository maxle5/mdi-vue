
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumMinusOutline from "../../src/components/MdiForumMinusOutline.vue";

test("MdiForumMinusOutline snapshot", () => {
  const wrapper = mount(MdiForumMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
