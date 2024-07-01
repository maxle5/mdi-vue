
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiLandPlots from "../../src/components/MdiLandPlots.vue";

test("MdiLandPlots snapshot", () => {
  const wrapper = mount(MdiLandPlots, {});
  expect(wrapper.html()).toMatchSnapshot();
});
