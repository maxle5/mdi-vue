
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHockeyPuck from "../../src/components/MdiHockeyPuck.vue";

test("MdiHockeyPuck snapshot", () => {
  const wrapper = mount(MdiHockeyPuck, {});
  expect(wrapper.html()).toMatchSnapshot();
});
