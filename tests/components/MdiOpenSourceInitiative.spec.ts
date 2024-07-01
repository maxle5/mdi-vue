
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOpenSourceInitiative from "../../src/components/MdiOpenSourceInitiative.vue";

test("MdiOpenSourceInitiative snapshot", () => {
  const wrapper = mount(MdiOpenSourceInitiative, {});
  expect(wrapper.html()).toMatchSnapshot();
});
