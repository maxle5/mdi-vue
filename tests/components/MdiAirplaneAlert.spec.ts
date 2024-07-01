
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneAlert from "../../src/components/MdiAirplaneAlert.vue";

test("MdiAirplaneAlert snapshot", () => {
  const wrapper = mount(MdiAirplaneAlert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
