
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFootballHelmet from "../../src/components/MdiFootballHelmet.vue";

test("MdiFootballHelmet snapshot", () => {
  const wrapper = mount(MdiFootballHelmet, {});
  expect(wrapper.html()).toMatchSnapshot();
});
