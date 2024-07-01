
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxOpen from "../../src/components/MdiMailboxOpen.vue";

test("MdiMailboxOpen snapshot", () => {
  const wrapper = mount(MdiMailboxOpen, {});
  expect(wrapper.html()).toMatchSnapshot();
});
