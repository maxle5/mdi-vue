
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPodium from "../../src/components/MdiPodium.vue";

test("MdiPodium snapshot", () => {
  const wrapper = mount(MdiPodium, {});
  expect(wrapper.html()).toMatchSnapshot();
});
