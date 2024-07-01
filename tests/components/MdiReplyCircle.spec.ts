
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReplyCircle from "../../src/components/MdiReplyCircle.vue";

test("MdiReplyCircle snapshot", () => {
  const wrapper = mount(MdiReplyCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
