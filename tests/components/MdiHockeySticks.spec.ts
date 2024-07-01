
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHockeySticks from "../../src/components/MdiHockeySticks.vue";

test("MdiHockeySticks snapshot", () => {
  const wrapper = mount(MdiHockeySticks, {});
  expect(wrapper.html()).toMatchSnapshot();
});
