
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBadgeAccount from "../../src/components/MdiBadgeAccount.vue";

test("MdiBadgeAccount snapshot", () => {
  const wrapper = mount(MdiBadgeAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
