
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiScoreboard from "../../src/components/MdiScoreboard.vue";

test("MdiScoreboard snapshot", () => {
  const wrapper = mount(MdiScoreboard, {});
  expect(wrapper.html()).toMatchSnapshot();
});
