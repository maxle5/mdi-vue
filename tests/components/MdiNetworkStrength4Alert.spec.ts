
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength4Alert from "../../src/components/MdiNetworkStrength4Alert.vue";

test("MdiNetworkStrength4Alert snapshot", () => {
  const wrapper = mount(MdiNetworkStrength4Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
