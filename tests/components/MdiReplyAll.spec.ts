
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiReplyAll from "../../src/components/MdiReplyAll.vue";

test("MdiReplyAll snapshot", () => {
  const wrapper = mount(MdiReplyAll, {});
  expect(wrapper.html()).toMatchSnapshot();
});
