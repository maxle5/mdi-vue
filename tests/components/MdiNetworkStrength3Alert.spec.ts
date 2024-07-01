
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength3Alert from "../../src/components/MdiNetworkStrength3Alert.vue";

test("MdiNetworkStrength3Alert snapshot", () => {
  const wrapper = mount(MdiNetworkStrength3Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
