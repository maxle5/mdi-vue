
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHumanGreetingProximity from "../../src/components/MdiHumanGreetingProximity.vue";

test("MdiHumanGreetingProximity snapshot", () => {
  const wrapper = mount(MdiHumanGreetingProximity, {});
  expect(wrapper.html()).toMatchSnapshot();
});
