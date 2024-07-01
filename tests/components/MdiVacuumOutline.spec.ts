
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiVacuumOutline from "../../src/components/MdiVacuumOutline.vue";

test("MdiVacuumOutline snapshot", () => {
  const wrapper = mount(MdiVacuumOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
