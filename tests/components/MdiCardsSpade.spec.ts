
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsSpade from "../../src/components/MdiCardsSpade.vue";

test("MdiCardsSpade snapshot", () => {
  const wrapper = mount(MdiCardsSpade, {});
  expect(wrapper.html()).toMatchSnapshot();
});
