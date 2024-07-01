
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCurrencyIls from "../../src/components/MdiCurrencyIls.vue";

test("MdiCurrencyIls snapshot", () => {
  const wrapper = mount(MdiCurrencyIls, {});
  expect(wrapper.html()).toMatchSnapshot();
});
