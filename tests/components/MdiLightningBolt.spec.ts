
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightningBolt from "../../src/components/MdiLightningBolt.vue";

test("MdiLightningBolt snapshot", () => {
  const wrapper = mount(MdiLightningBolt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
