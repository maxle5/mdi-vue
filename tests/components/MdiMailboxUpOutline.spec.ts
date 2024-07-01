
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxUpOutline from "../../src/components/MdiMailboxUpOutline.vue";

test("MdiMailboxUpOutline snapshot", () => {
  const wrapper = mount(MdiMailboxUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
