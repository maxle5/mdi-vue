
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiAirplane from "../../src/components/MdiAirplane.vue";

test("MdiAirplane snapshot", () => {
  const wrapper = mount(MdiAirplane, {});
  expect(wrapper.html()).toMatchSnapshot();
});
