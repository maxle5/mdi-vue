
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneClassic from "../../src/components/MdiPhoneClassic.vue";

test("MdiPhoneClassic snapshot", () => {
  const wrapper = mount(MdiPhoneClassic, {});
  expect(wrapper.html()).toMatchSnapshot();
});
