
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxArrowDown from "../../src/components/MdiInboxArrowDown.vue";

test("MdiInboxArrowDown snapshot", () => {
  const wrapper = mount(MdiInboxArrowDown, {});
  expect(wrapper.html()).toMatchSnapshot();
});
