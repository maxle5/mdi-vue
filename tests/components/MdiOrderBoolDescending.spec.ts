
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiOrderBoolDescending from "../../src/components/MdiOrderBoolDescending.vue";

test("MdiOrderBoolDescending snapshot", () => {
  const wrapper = mount(MdiOrderBoolDescending, {});
  expect(wrapper.html()).toMatchSnapshot();
});
