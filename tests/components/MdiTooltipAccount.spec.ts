
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTooltipAccount from "../../src/components/MdiTooltipAccount.vue";

test("MdiTooltipAccount snapshot", () => {
  const wrapper = mount(MdiTooltipAccount, {});
  expect(wrapper.html()).toMatchSnapshot();
});
