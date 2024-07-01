
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardSettings from "../../src/components/MdiCreditCardSettings.vue";

test("MdiCreditCardSettings snapshot", () => {
  const wrapper = mount(MdiCreditCardSettings, {});
  expect(wrapper.html()).toMatchSnapshot();
});
