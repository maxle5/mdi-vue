
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReplyOutline from "../../src/components/MdiReplyOutline.vue";

test("MdiReplyOutline snapshot", () => {
  const wrapper = mount(MdiReplyOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
