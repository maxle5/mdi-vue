
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiForumOutline from "../../src/components/MdiForumOutline.vue";

test("MdiForumOutline snapshot", () => {
  const wrapper = mount(MdiForumOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
