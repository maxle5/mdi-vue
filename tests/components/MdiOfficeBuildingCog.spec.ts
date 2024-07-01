
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOfficeBuildingCog from "../../src/components/MdiOfficeBuildingCog.vue";

test("MdiOfficeBuildingCog snapshot", () => {
  const wrapper = mount(MdiOfficeBuildingCog, {});
  expect(wrapper.html()).toMatchSnapshot();
});
