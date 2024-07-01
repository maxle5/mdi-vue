
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHazardLights from "../../src/components/MdiHazardLights.vue";

test("MdiHazardLights snapshot", () => {
  const wrapper = mount(MdiHazardLights, {});
  expect(wrapper.html()).toMatchSnapshot();
});
