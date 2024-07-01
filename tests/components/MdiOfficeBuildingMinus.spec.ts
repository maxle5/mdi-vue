
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingMinus from "../../src/components/MdiOfficeBuildingMinus.vue";

test("MdiOfficeBuildingMinus snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingMinus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
