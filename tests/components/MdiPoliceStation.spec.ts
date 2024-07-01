
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPoliceStation from "../../src/components/MdiPoliceStation.vue";

test("MdiPoliceStation snapshot", () => {
  const wrapper = mount(MdiPoliceStation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
