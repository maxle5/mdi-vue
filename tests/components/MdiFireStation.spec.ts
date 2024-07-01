
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiFireStation from "../../src/components/MdiFireStation.vue";

test("MdiFireStation snapshot", () => {
  const wrapper = mount(MdiFireStation, {});
  expect(wrapper.html()).toMatchSnapshot();
});
