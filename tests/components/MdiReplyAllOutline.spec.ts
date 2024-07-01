
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReplyAllOutline from "../../src/components/MdiReplyAllOutline.vue";

test("MdiReplyAllOutline snapshot", () => {
  const wrapper = mount(MdiReplyAllOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
