
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardRefreshOutline from "../../src/components/MdiCreditCardRefreshOutline.vue";

test("MdiCreditCardRefreshOutline snapshot", () => {
  const wrapper = mount(MdiCreditCardRefreshOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
