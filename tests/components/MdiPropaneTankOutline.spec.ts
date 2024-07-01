
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPropaneTankOutline from "../../src/components/MdiPropaneTankOutline.vue";

test("MdiPropaneTankOutline snapshot", () => {
  const wrapper = mount(MdiPropaneTankOutline, {});
  expect(wrapper.html()).toMatchSnapshot();
});
