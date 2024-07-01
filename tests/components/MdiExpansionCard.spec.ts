
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiExpansionCard from "../../src/components/MdiExpansionCard.vue";

test("MdiExpansionCard snapshot", () => {
  const wrapper = mount(MdiExpansionCard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
