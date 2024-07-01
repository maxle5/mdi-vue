
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiSolderingIron from "../../src/components/MdiSolderingIron.vue";

test("MdiSolderingIron snapshot", () => {
  const wrapper = mount(MdiSolderingIron, {});
  expect(wrapper.html()).toMatchSnapshot();
});
