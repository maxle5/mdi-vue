
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCreditCardSearch from "../../src/components/MdiCreditCardSearch.vue";

test("MdiCreditCardSearch snapshot", () => {
  const wrapper = mount(MdiCreditCardSearch, {});
  expect(wrapper.html()).toMatchSnapshot();
});
