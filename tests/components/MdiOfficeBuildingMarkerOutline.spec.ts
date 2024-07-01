
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingMarkerOutline from "../../src/components/MdiOfficeBuildingMarkerOutline.vue";

test("MdiOfficeBuildingMarkerOutline snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingMarkerOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
