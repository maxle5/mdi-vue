
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiMailboxOutline from "../../src/components/MdiMailboxOutline.vue";

test("MdiMailboxOutline snapshot", () => {
  const wrapper = mount(MdiMailboxOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
