
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingPlus from "../../src/components/MdiOfficeBuildingPlus.vue";

test("MdiOfficeBuildingPlus snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingPlus, {});
  expect(wrapper.html()).toMatchSnapshot();
});
