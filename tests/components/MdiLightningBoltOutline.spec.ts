
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightningBoltOutline from "../../src/components/MdiLightningBoltOutline.vue";

test("MdiLightningBoltOutline snapshot", () => {
  const wrapper = mount(MdiLightningBoltOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
