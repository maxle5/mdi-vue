
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingPlusOutline from "../../src/components/MdiOfficeBuildingPlusOutline.vue";

test("MdiOfficeBuildingPlusOutline snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingPlusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
