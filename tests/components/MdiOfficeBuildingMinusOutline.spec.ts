
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingMinusOutline from "../../src/components/MdiOfficeBuildingMinusOutline.vue";

test("MdiOfficeBuildingMinusOutline snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingMinusOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
