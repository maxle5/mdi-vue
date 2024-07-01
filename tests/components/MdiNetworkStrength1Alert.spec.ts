
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength1Alert from "../../src/components/MdiNetworkStrength1Alert.vue";

test("MdiNetworkStrength1Alert snapshot", () => {
  const wrapper = mount(MdiNetworkStrength1Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
