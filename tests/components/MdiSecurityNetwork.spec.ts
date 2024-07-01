
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSecurityNetwork from "../../src/components/MdiSecurityNetwork.vue";

test("MdiSecurityNetwork snapshot", () => {
  const wrapper = mount(MdiSecurityNetwork, {});
  expect(wrapper.html()).toMatchSnapshot();
});
