
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReply from "../../src/components/MdiReply.vue";

test("MdiReply snapshot", () => {
  const wrapper = mount(MdiReply, {});
  expect(wrapper.html()).toMatchSnapshot();
});
