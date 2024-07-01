
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiNetworkStrength2Alert from "../../src/components/MdiNetworkStrength2Alert.vue";

test("MdiNetworkStrength2Alert snapshot", () => {
  const wrapper = mount(MdiNetworkStrength2Alert, {});
  expect(wrapper.html()).toMatchSnapshot();
});
