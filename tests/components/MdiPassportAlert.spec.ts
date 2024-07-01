
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPassportAlert from "../../src/components/MdiPassportAlert.vue";

test("MdiPassportAlert snapshot", () => {
  const wrapper = mount(MdiPassportAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
