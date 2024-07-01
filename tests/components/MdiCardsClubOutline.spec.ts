
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCardsClubOutline from "../../src/components/MdiCardsClubOutline.vue";

test("MdiCardsClubOutline snapshot", () => {
  const wrapper = mount(MdiCardsClubOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
