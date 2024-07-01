
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardScanOutline from "../../src/components/MdiCreditCardScanOutline.vue";

test("MdiCreditCardScanOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardScanOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
