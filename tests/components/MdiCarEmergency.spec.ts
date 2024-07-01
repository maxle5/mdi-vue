
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCarEmergency from "../../src/components/MdiCarEmergency.vue";

test("MdiCarEmergency snapshot", () => {
  const wrapper = mount(MdiCarEmergency, {});
  expect(wrapper.html()).toMatchSnapshot();
});
