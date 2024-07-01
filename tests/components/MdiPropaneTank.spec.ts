
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiPropaneTank from "../../src/components/MdiPropaneTank.vue";

test("MdiPropaneTank snapshot", () => {
  const wrapper = mount(MdiPropaneTank, {});
  expect(wrapper.html()).toMatchSnapshot();
});
