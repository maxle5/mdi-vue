
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirPurifierOff from "../../src/components/MdiAirPurifierOff.vue";

test("MdiAirPurifierOff snapshot", () => {
  const wrapper = mount(MdiAirPurifierOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
