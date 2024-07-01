
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiShieldAccount from "../../src/components/MdiShieldAccount.vue";

test("MdiShieldAccount snapshot", () => {
  const wrapper = mount(MdiShieldAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
