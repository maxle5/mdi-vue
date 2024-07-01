
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCashCheck from "../../src/components/MdiCashCheck.vue";

test("MdiCashCheck snapshot", () => {
  const wrapper = mount(MdiCashCheck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
