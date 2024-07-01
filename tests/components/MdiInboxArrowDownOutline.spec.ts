
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiInboxArrowDownOutline from "../../src/components/MdiInboxArrowDownOutline.vue";

test("MdiInboxArrowDownOutline snapshot", () => {
  const wrapper = mount(MdiInboxArrowDownOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
