
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingMarker from "../../src/components/MdiOfficeBuildingMarker.vue";

test("MdiOfficeBuildingMarker snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingMarker, {});
  expect(wrapper.html()).toMatchSnapshot();
});
