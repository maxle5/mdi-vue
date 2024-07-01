
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxOpenUpOutline from "../../src/components/MdiMailboxOpenUpOutline.vue";

test("MdiMailboxOpenUpOutline snapshot", () => {
  const wrapper = mount(MdiMailboxOpenUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
