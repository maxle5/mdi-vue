
import { mount } from "@vue/test-utils";
import { expect, test } from "vitest";
import MdiRadiatorDisabled from "../../src/components/MdiRadiatorDisabled.vue";

test("MdiRadiatorDisabled snapshot", () => {
  const wrapper = mount(MdiRadiatorDisabled, {});
  expect(wrapper.html()).toMatchSnapshot();
});
