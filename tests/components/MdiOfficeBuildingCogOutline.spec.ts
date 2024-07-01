
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingCogOutline from "../../src/components/MdiOfficeBuildingCogOutline.vue";

test("MdiOfficeBuildingCogOutline snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingCogOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
