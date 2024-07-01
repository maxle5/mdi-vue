
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeLightningBoltOutline from "../../src/components/MdiHomeLightningBoltOutline.vue";

test("MdiHomeLightningBoltOutline snapshot", () => {
  const wrapper = mount(MdiHomeLightningBoltOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
