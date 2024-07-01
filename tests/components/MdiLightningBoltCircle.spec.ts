
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLightningBoltCircle from "../../src/components/MdiLightningBoltCircle.vue";

test("MdiLightningBoltCircle snapshot", () => {
  const wrapper = mount(MdiLightningBoltCircle, {});
  expect(wrapper.html()).toMatchSnapshot();
});
