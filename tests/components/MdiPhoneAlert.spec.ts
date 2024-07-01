
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPhoneAlert from "../../src/components/MdiPhoneAlert.vue";

test("MdiPhoneAlert snapshot", () => {
  const wrapper = mount(MdiPhoneAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
