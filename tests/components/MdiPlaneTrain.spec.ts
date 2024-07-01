
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPlaneTrain from "../../src/components/MdiPlaneTrain.vue";

test("MdiPlaneTrain snapshot", () => {
  const wrapper = mount(MdiPlaneTrain, {});
  expect(wrapper.html()).toMatchSnapshot();
});
