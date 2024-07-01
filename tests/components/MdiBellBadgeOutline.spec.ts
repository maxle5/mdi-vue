
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBellBadgeOutline from "../../src/components/MdiBellBadgeOutline.vue";

test("MdiBellBadgeOutline snapshot", () => {
  const wrapper = mount(MdiBellBadgeOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
