
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLayers from "../../src/components/MdiLayers.vue";

test("MdiLayers snapshot", () => {
  const wrapper = mount(MdiLayers, {});
  expect(wrapper.html()).toMatchSnapshot();
});
