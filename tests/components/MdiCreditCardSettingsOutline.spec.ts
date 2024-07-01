
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardSettingsOutline from "../../src/components/MdiCreditCardSettingsOutline.vue";

test("MdiCreditCardSettingsOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardSettingsOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
