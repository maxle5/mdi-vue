
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiThermometerAlert from "../../src/components/MdiThermometerAlert.vue";

test("MdiThermometerAlert snapshot", () => {
  const wrapper = mount(MdiThermometerAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
