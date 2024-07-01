
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiCylinderOff from "../../src/components/MdiCylinderOff.vue";

test("MdiCylinderOff snapshot", () => {
  const wrapper = mount(MdiCylinderOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
