
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsClub from "../../src/components/MdiCardsClub.vue";

test("MdiCardsClub snapshot", () => {
  const wrapper = mount(MdiCardsClub, {});
  expect(wrapper.html()).toMatchSnapshot();
});
