
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadiatorOff from "../../src/components/MdiRadiatorOff.vue";

test("MdiRadiatorOff snapshot", () => {
  const wrapper = mount(MdiRadiatorOff, {});
  expect(wrapper.html()).toMatchSnapshot();
});
