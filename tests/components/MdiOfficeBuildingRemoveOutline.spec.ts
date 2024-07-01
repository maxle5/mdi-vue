
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingRemoveOutline from "../../src/components/MdiOfficeBuildingRemoveOutline.vue";

test("MdiOfficeBuildingRemoveOutline snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingRemoveOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
