
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardSync from "../../src/components/MdiCreditCardSync.vue";

test("MdiCreditCardSync snapshot", () => {
  const wrapper = mount(MdiCreditCardSync, {});
  expect(wrapper.html()).toMatchSnapshot();
});
