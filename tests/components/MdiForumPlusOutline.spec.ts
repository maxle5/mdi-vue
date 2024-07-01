
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumPlusOutline from "../../src/components/MdiForumPlusOutline.vue";

test("MdiForumPlusOutline snapshot", () => {
  const wrapper = mount(MdiForumPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
