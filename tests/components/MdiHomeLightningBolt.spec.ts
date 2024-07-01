
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeLightningBolt from "../../src/components/MdiHomeLightningBolt.vue";

test("MdiHomeLightningBolt snapshot", () => {
  const wrapper = mount(MdiHomeLightningBolt, {});
  expect(wrapper.html()).toMatchSnapshot();
});
