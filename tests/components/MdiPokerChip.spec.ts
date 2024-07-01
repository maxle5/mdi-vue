
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPokerChip from "../../src/components/MdiPokerChip.vue";

test("MdiPokerChip snapshot", () => {
  const wrapper = mount(MdiPokerChip, {});
  expect(wrapper.html()).toMatchSnapshot();
});
