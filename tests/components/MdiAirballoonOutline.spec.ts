
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirballoonOutline from "../../src/components/MdiAirballoonOutline.vue";

test("MdiAirballoonOutline snapshot", () => {
  const wrapper = mount(MdiAirballoonOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
