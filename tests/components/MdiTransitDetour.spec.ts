
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiTransitDetour from "../../src/components/MdiTransitDetour.vue";

test("MdiTransitDetour snapshot", () => {
  const wrapper = mount(MdiTransitDetour, {});
  expect(wrapper.html()).toMatchSnapshot();
});
