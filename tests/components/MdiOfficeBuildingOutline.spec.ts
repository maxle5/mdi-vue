
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingOutline from "../../src/components/MdiOfficeBuildingOutline.vue";

test("MdiOfficeBuildingOutline snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
