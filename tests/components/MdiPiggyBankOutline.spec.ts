
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPiggyBankOutline from "../../src/components/MdiPiggyBankOutline.vue";

test("MdiPiggyBankOutline snapshot", () => {
  const wrapper = mount(MdiPiggyBankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
