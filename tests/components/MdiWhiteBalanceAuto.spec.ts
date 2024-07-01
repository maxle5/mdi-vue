
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiWhiteBalanceAuto from "../../src/components/MdiWhiteBalanceAuto.vue";

test("MdiWhiteBalanceAuto snapshot", () => {
  const wrapper = mount(MdiWhiteBalanceAuto, {});
  expect(wrapper.html()).toMatchSnapshot();
});
