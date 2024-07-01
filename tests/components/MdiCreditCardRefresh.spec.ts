
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardRefresh from "../../src/components/MdiCreditCardRefresh.vue";

test("MdiCreditCardRefresh snapshot", () => {
  const wrapper = mount(MdiCreditCardRefresh, {});
  expect(wrapper.html()).toMatchSnapshot();
});
