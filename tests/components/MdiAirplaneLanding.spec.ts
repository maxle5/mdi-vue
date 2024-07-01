
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplaneLanding from "../../src/components/MdiAirplaneLanding.vue";

test("MdiAirplaneLanding snapshot", () => {
  const wrapper = mount(MdiAirplaneLanding, {});
  expect(wrapper.html()).toMatchSnapshot();
});
