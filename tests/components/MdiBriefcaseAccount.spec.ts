
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiBriefcaseAccount from "../../src/components/MdiBriefcaseAccount.vue";

test("MdiBriefcaseAccount snapshot", () => {
  const wrapper = mount(MdiBriefcaseAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
