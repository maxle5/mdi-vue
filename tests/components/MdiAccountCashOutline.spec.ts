
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAccountCashOutline from "../../src/components/MdiAccountCashOutline.vue";

test("MdiAccountCashOutline snapshot", () => {
  const wrapper = mount(MdiAccountCashOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
