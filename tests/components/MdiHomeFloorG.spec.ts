
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiHomeFloorG from "../../src/components/MdiHomeFloorG.vue";

test("MdiHomeFloorG snapshot", () => {
  const wrapper = mount(MdiHomeFloorG, {});
  expect(wrapper.html()).toMatchSnapshot();
});
