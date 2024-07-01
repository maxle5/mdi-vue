
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxArrowUpOutline from "../../src/components/MdiInboxArrowUpOutline.vue";

test("MdiInboxArrowUpOutline snapshot", () => {
  const wrapper = mount(MdiInboxArrowUpOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
