
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTrophy from "../../src/components/MdiTrophy.vue";

test("MdiTrophy snapshot", () => {
  const wrapper = mount(MdiTrophy, {});
  expect(wrapper.html()).toMatchSnapshot();
});
