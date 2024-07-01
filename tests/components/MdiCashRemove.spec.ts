
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashRemove from "../../src/components/MdiCashRemove.vue";

test("MdiCashRemove snapshot", () => {
  const wrapper = mount(MdiCashRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
