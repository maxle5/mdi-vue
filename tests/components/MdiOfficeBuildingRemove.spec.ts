
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingRemove from "../../src/components/MdiOfficeBuildingRemove.vue";

test("MdiOfficeBuildingRemove snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingRemove, {});
  expect(wrapper.html()).toMatchSnapshot();
});
