
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneCog from "../../src/components/MdiAirplaneCog.vue";

test("MdiAirplaneCog snapshot", () => {
  const wrapper = mount(MdiAirplaneCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
