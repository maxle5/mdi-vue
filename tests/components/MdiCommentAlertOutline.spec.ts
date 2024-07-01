
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCommentAlertOutline from "../../src/components/MdiCommentAlertOutline.vue";

test("MdiCommentAlertOutline snapshot", () => {
  const wrapper = mount(MdiCommentAlertOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
