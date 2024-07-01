
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadiator from "../../src/components/MdiRadiator.vue";

test("MdiRadiator snapshot", () => {
  const wrapper = mount(MdiRadiator, {});
  expect(wrapper.html()).toMatchSnapshot();
});
