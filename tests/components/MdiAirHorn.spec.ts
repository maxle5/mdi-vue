
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirHorn from "../../src/components/MdiAirHorn.vue";

test("MdiAirHorn snapshot", () => {
  const wrapper = mount(MdiAirHorn, {});
  expect(wrapper.html()).toMatchSnapshot();
});
