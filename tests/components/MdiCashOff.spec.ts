
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashOff from "../../src/components/MdiCashOff.vue";

test("MdiCashOff snapshot", () => {
  const wrapper = mount(MdiCashOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
